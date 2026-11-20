import React, { useState, useEffect, useMemo } from 'react';
import confetti from 'canvas-confetti';
import './GuestbookSection.css';
import Icon from './Icon';
import BlessingForm from './BlessingForm';
import BlessingWall from './BlessingWall';

export default function GuestbookSection({
  coupleNames = "Abhirami & Ajeesh",
  weddingDate = "Sunday, 24 January 2027",
  initialNotes,
  onSubmit
}) {
  const [notes, setNotes] = useState(initialNotes || []);
  const [likedMap, setLikedMap] = useState(() => {
    try {
      const saved = localStorage.getItem('wedding_liked_notes');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  const getUserToken = () => {
    try {
      let token = localStorage.getItem('wedding_user_token');
      if (!token) {
        token = 'usr_' + Math.random().toString(36).substring(2, 11) + '_' + Date.now();
        localStorage.setItem('wedding_user_token', token);
      }
      return token;
    } catch (e) {
      return 'usr_' + Date.now();
    }
  };

  // Fetch from backend API if available, keeping fallback
  useEffect(() => {
    // Clear old test data cache for a fresh start
    try {
      localStorage.removeItem('user_guest_wishes');
    } catch (e) {}

    if (initialNotes && initialNotes.length > 0) return;

    let isMounted = true;
    const fetchRemoteNotes = async () => {
      try {
        const res = await fetch('/api/wishes');
        if (res.ok) {
          const json = await res.json();
          if (json.success && Array.isArray(json.data)) {
            if (isMounted) {
              setNotes(json.data);
              return;
            }
          }
        }
      } catch (err) {
        // Fallback to local storage
        try {
          const local = JSON.parse(localStorage.getItem('guestbook_notes') || '[]');
          if (Array.isArray(local) && isMounted) {
            setNotes(local);
            return;
          }
        } catch (e) {}
      }
    };

    fetchRemoteNotes();
    return () => { isMounted = false; };
  }, [initialNotes]);

  // Derived totals with useMemo
  const totalWishes = useMemo(() => notes.length, [notes]);
  const totalHearts = useMemo(() => {
    return notes.reduce((sum, item) => sum + (item.likes || 0), 0);
  }, [notes]);

  // Handle new blessing submission
  const handleFormSubmit = async (newNoteData) => {
    const tempId = Date.now();
    const newNote = {
      ...newNoteData,
      id: tempId,
      likes: 1,
      isNew: true
    };

    // Optimistically add to top of wall with gold outline
    setNotes((prev) => [newNote, ...prev]);

    // Save to localStorage
    try {
      const local = JSON.parse(localStorage.getItem('guestbook_notes') || '[]');
      localStorage.setItem('guestbook_notes', JSON.stringify([newNote, ...local]));
    } catch (e) {}

    // Call optional prop if provided
    if (onSubmit) {
      onSubmit(newNote);
    }

    // Call existing backend API
    try {
      const res = await fetch('/api/wishes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: newNote.name,
          relation: newNote.relation,
          message: newNote.message,
          emoji: '💖'
        })
      });
      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) {
          setNotes((prev) =>
            prev.map((n) => (n.id === tempId ? { ...json.data, isNew: true } : n))
          );
        }
      }
    } catch (err) {
      // Offline fallback: kept in local state & storage
      console.warn('Network issue saving wish to server, stored locally:', err);
    }

    // Celebration confetti
    try {
      confetti({
        particleCount: 75,
        spread: 65,
        origin: { y: 0.7 },
        colors: ['#c39a2b', '#7a1f33', '#fff6f2', '#e5be53']
      });
    } catch (e) {}
  };

  // Strict "Only One Love Per User" rule
  const handleToggleHeart = async (id) => {
    // If the user already gave love to this blessing, prevent duplicate likes!
    if (likedMap[id]) {
      return;
    }

    const token = getUserToken();

    // Mark as liked permanently in state & localStorage
    const updatedLikedMap = { ...likedMap, [id]: true };
    setLikedMap(updatedLikedMap);
    try {
      localStorage.setItem('wedding_liked_notes', JSON.stringify(updatedLikedMap));
    } catch (e) {}

    // Optimistically increment likes
    setNotes((prev) =>
      prev.map((note) => {
        if (note.id === id) {
          return { ...note, likes: (note.likes || 0) + 1 };
        }
        return note;
      })
    );

    // Call server to permanently record love with userToken
    try {
      const res = await fetch(`/api/wishes/${id}/like`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userToken: token })
      });
      if (res.ok) {
        const json = await res.json();
        if (typeof json.likes === 'number') {
          setNotes((prev) =>
            prev.map((note) => (note.id === id ? { ...note, likes: json.likes } : note))
          );
        }
      }
    } catch (err) {
      // Offline fallback: kept in state and localStorage
    }
  };

  return (
    <div id="guestbook" className="guestbook-root py-10 sm:py-14 w-full">
      <div className="max-w-[1440px] 2xl:max-w-[1500px] w-full mx-auto px-4 sm:px-8 lg:px-14">
        {/* FORM (Royal Velvet Theme matching user reference) */}
        <BlessingForm
          coupleNames={coupleNames}
          weddingDate={weddingDate}
          onSubmit={handleFormSubmit}
        />

        {/* BLESSING WALL */}
        <BlessingWall
          notes={notes}
          onToggleHeart={handleToggleHeart}
          likedMap={likedMap}
          totalWishes={totalWishes}
          totalHearts={totalHearts}
        />
      </div>
    </div>
  );
}
