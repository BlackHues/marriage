import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Send, MessageSquareHeart, Sparkles, Filter, Smile, CheckCircle2 } from 'lucide-react';

const EMOJI_OPTIONS = [
  { emoji: '💖', label: 'Love' },
  { emoji: '💍', label: 'Union' },
  { emoji: '🌸', label: 'Flowers' },
  { emoji: '🥂', label: 'Celebration' },
  { emoji: '✨', label: 'Blessings' },
  { emoji: '🕊️', label: 'Peace' },
  { emoji: '🙏', label: 'Devotion' },
];

const RELATION_TAGS = [
  "Bride's Friend",
  "Groom's Friend",
  "Friend of Both",
  "Family",
  "Colleague",
  "Well-wisher"
];

export default function GuestBook() {
  const [wishes, setWishes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [filter, setFilter] = useState('All');
  const [likedMap, setLikedMap] = useState({});
  const [successToast, setSuccessToast] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [relation, setRelation] = useState("Bride's Friend");
  const [message, setMessage] = useState('');
  const [selectedEmoji, setSelectedEmoji] = useState('💖');

  // Fetch wishes from database with local storage backup
  const fetchWishes = async () => {
    try {
      const res = await fetch('/api/wishes');
      if (res.ok) {
        const json = await res.json();
        if (json.success && Array.isArray(json.data)) {
          // Merge with any locally saved device wishes
          const localSaved = JSON.parse(localStorage.getItem('user_guest_wishes') || '[]');
          const serverIds = new Set(json.data.map(w => w.id));
          const uniqueLocal = localSaved.filter(w => !serverIds.has(w.id));
          setWishes([...uniqueLocal, ...json.data]);
          return;
        }
      }
    } catch (err) {
      console.warn('Could not fetch remote wishes, loading local cache:', err);
    } finally {
      setLoading(false);
    }

    // Fallback: load local cached wishes if remote is slow or offline
    const localSaved = JSON.parse(localStorage.getItem('user_guest_wishes') || '[]');
    if (localSaved.length > 0) {
      setWishes(prev => {
        const ids = new Set(prev.map(w => w.id));
        const filtered = localSaved.filter(w => !ids.has(w.id));
        return [...filtered, ...prev];
      });
    }
  };

  useEffect(() => {
    fetchWishes();
  }, []);

  // Submit new wish
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;

    setSubmitting(true);
    const newLocalWish = {
      id: Date.now(),
      name: name.trim(),
      relation,
      message: message.trim(),
      emoji: selectedEmoji,
      likes: 1,
      created_at: new Date().toISOString()
    };

    try {
      const res = await fetch('/api/wishes', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          relation,
          message: message.trim(),
          emoji: selectedEmoji
        })
      });

      if (res.ok) {
        const json = await res.json();
        if (json.success && json.data) {
          setWishes(prev => [json.data, ...prev]);
        } else {
          setWishes(prev => [newLocalWish, ...prev]);
        }
      } else {
        setWishes(prev => [newLocalWish, ...prev]);
      }
    } catch (err) {
      console.warn('Network issue, saved wish locally:', err);
      setWishes(prev => [newLocalWish, ...prev]);
    } finally {
      // Cache wish locally so guest always sees it on their device
      try {
        const existing = JSON.parse(localStorage.getItem('user_guest_wishes') || '[]');
        localStorage.setItem('user_guest_wishes', JSON.stringify([newLocalWish, ...existing]));
      } catch (e) {}

      setName('');
      setMessage('');
      setSuccessToast(true);
      setTimeout(() => setSuccessToast(false), 4000);
      setSubmitting(false);

      // Confetti celebratory burst
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 },
        colors: ['#D4AF37', '#F47293', '#FBCFE8', '#FAF4DC']
      });
    }
  };

  // Like a wish
  const handleLike = async (id) => {
    if (likedMap[id]) return; // prevent duplicate clicks per session

    // Optimistic UI update
    setLikedMap(prev => ({ ...prev, [id]: true }));
    setWishes(prev =>
      prev.map(item => (item.id === id ? { ...item, likes: (item.likes || 0) + 1 } : item))
    );

    try {
      await fetch(`/api/wishes/${id}/like`, { method: 'POST' });
    } catch (err) {
      console.error('Failed to like wish:', err);
    }
  };

  // Filter wishes
  const filteredWishes = wishes.filter(item => {
    if (filter === 'All') return true;
    if (filter === 'Friends') return item.relation && item.relation.includes('Friend');
    if (filter === 'Family') return item.relation && (item.relation.includes('Family') || item.relation.includes('Parents'));
    if (filter === 'Loved') return (item.likes || 0) > 0;
    return true;
  }).sort((a, b) => {
    if (filter === 'Loved') return (b.likes || 0) - (a.likes || 0);
    return new Date(b.created_at || 0) - new Date(a.created_at || 0);
  });

  const totalHearts = wishes.reduce((sum, item) => sum + (item.likes || 0), 0);

  // Helper format time
  const formatTime = (isoString) => {
    if (!isoString) return 'Recent';
    try {
      const date = new Date(isoString);
      return date.toLocaleDateString('en-IN', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (e) {
      return 'Recent';
    }
  };

  return (
    <section id="guestbook" className="py-12 px-4 sm:px-8 max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1500px] mx-auto w-full">
      {/* SECTION HEADER */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full bg-wedding-pink-100 border border-wedding-pink-300 text-wedding-pink-700 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
          <MessageSquareHeart className="w-4 h-4 text-wedding-pink-600" />
          <span>Guest Book & Wishing Wall</span>
        </div>
        <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-neutral-800 font-semibold">
          Blessings For Abhirami & Ajeesh
        </h3>
        <p className="font-serif italic text-base sm:text-lg text-neutral-600 mt-2 max-w-xl mx-auto">
          Leave your heartfelt wishes, blessings, and lovely memories for the newlyweds. Stored permanently in our wedding registry!
        </p>

        {/* STATS PILL */}
        <div className="inline-flex items-center gap-4 px-6 py-2.5 mt-4 rounded-full bg-white border border-wedding-gold-300 shadow-sm text-xs sm:text-sm font-medium text-neutral-700">
          <span className="flex items-center gap-1.5">
            <span className="font-bold text-wedding-pink-600">{wishes.length}</span> Wishes Shared
          </span>
          <span className="h-3.5 w-[1px] bg-neutral-300" />
          <span className="flex items-center gap-1.5">
            <Heart className="w-4 h-4 fill-wedding-pink-500 text-wedding-pink-500" />
            <span className="font-bold text-wedding-gold-700">{totalHearts}</span> Hearts Received
          </span>
        </div>
      </div>

      {/* WISH FORM CARD */}
      <div className="bg-white/95 rounded-3xl p-6 sm:p-8 border-2 border-wedding-gold-300 shadow-card-royal mb-12 relative overflow-hidden">
        {/* Subtle decorative gold line */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-wedding-pink-400 via-wedding-gold-400 to-wedding-pink-400" />

        <h4 className="font-serif text-xl sm:text-2xl font-bold text-neutral-800 mb-4 flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-wedding-gold-600" />
          <span>Write a Wish for the Couple</span>
        </h4>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Guest Name */}
            <div>
              <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                Your Name <span className="text-wedding-pink-500">*</span>
              </label>
              <input
                type="text"
                required
                maxLength={80}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g., Rahul, Ananya, Vivek..."
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:border-wedding-pink-500 focus:ring-2 focus:ring-wedding-pink-200 outline-none text-sm transition-all bg-white"
              />
            </div>

            {/* Relationship */}
            <div>
              <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
                Your Relationship
              </label>
              <select
                value={relation}
                onChange={(e) => setRelation(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-neutral-300 focus:border-wedding-gold-500 focus:ring-2 focus:ring-wedding-gold-200 outline-none text-sm transition-all bg-white"
              >
                {RELATION_TAGS.map(tag => (
                  <option key={tag} value={tag}>{tag}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Blessing Emoji Picker */}
          <div>
            <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
              Pick a Blessing Stamp
            </label>
            <div className="flex flex-wrap gap-2">
              {EMOJI_OPTIONS.map(opt => (
                <button
                  type="button"
                  key={opt.emoji}
                  onClick={() => setSelectedEmoji(opt.emoji)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium border transition-all ${
                    selectedEmoji === opt.emoji
                      ? 'bg-wedding-pink-100 border-wedding-pink-500 text-wedding-pink-700 scale-105 shadow-sm'
                      : 'bg-white border-neutral-200 text-neutral-600 hover:bg-wedding-pink-50'
                  }`}
                >
                  <span className="text-base">{opt.emoji}</span>
                  <span>{opt.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Message Textarea */}
          <div>
            <label className="block text-xs font-semibold text-neutral-700 uppercase tracking-wider mb-1.5">
              Your Blessing / Message <span className="text-wedding-pink-500">*</span>
            </label>
            <textarea
              required
              rows={3}
              maxLength={800}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Dear Abhirami & Ajeesh, wishing you both endless happiness, unconditional love, and a joyful lifetime together! Congratulations! 💕"
              className="w-full px-4 py-3 rounded-xl border border-neutral-300 focus:border-wedding-pink-500 focus:ring-2 focus:ring-wedding-pink-200 outline-none text-sm transition-all bg-white resize-y"
            />
            <div className="flex justify-between text-[11px] text-neutral-400 mt-1">
              <span>Saved permanently in wedding database</span>
              <span>{message.length}/800</span>
            </div>
          </div>

          {/* Submit Button */}
          <div className="flex items-center justify-between pt-2">
            {successToast && (
              <span className="flex items-center gap-1.5 text-xs font-semibold text-emerald-600 animate-fade-in">
                <CheckCircle2 className="w-4 h-4" />
                <span>Your blessing has been saved beautifully!</span>
              </span>
            )}
            <div className="ml-auto">
              <button
                type="submit"
                disabled={submitting || !name.trim() || !message.trim()}
                className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-wedding-pink-500 to-wedding-pink-600 hover:from-wedding-pink-600 hover:to-wedding-pink-700 text-white font-medium shadow-md hover:shadow-pink-glow hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed transition-all text-sm"
              >
                {submitting ? (
                  <span>Saving...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Blessing</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* FILTER TABS */}
      <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
        <h4 className="font-serif text-xl font-bold text-neutral-800">
          Wishes Wall ({filteredWishes.length})
        </h4>

        <div className="flex items-center gap-1 bg-white p-1 rounded-full border border-wedding-gold-300 shadow-sm text-xs font-medium">
          {[
            { id: 'All', label: 'All' },
            { id: 'Friends', label: 'Friends' },
            { id: 'Family', label: 'Family' },
            { id: 'Loved', label: 'Most Loved' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-3 py-1 rounded-full transition-all ${
                filter === tab.id
                  ? 'bg-wedding-pink-500 text-white shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* WISHES GRID */}
      {loading ? (
        <div className="text-center py-12 text-sm text-neutral-500 font-serif italic">
          Loading wedding wishes...
        </div>
      ) : filteredWishes.length === 0 ? (
        <div className="bg-white/80 rounded-2xl p-8 text-center border border-dashed border-wedding-gold-300">
          <p className="font-serif italic text-neutral-600 text-base">
            Be the first to leave a wish for Abhirami & Ajeesh! ✨
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredWishes.map((item) => (
            <div
              key={item.id}
              className="bg-white/95 rounded-2xl p-5 border border-wedding-gold-200 hover:border-wedding-gold-400 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between relative group"
            >
              <div>
                {/* Author & Tag header */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl shrink-0">{item.emoji || '💖'}</span>
                    <div>
                      <h5 className="font-serif font-bold text-neutral-900 text-base leading-tight">
                        {item.name}
                      </h5>
                      <span className="text-[10px] font-medium uppercase tracking-wider text-wedding-pink-600">
                        {item.relation || 'Well-wisher'}
                      </span>
                    </div>
                  </div>

                  <span className="text-[10px] text-neutral-400 shrink-0">
                    {formatTime(item.created_at)}
                  </span>
                </div>

                {/* Message Body */}
                <p className="text-xs sm:text-sm text-neutral-700 font-serif leading-relaxed italic my-2 bg-wedding-pink-50/40 p-3 rounded-xl border border-wedding-pink-100/60">
                  "{item.message}"
                </p>
              </div>

              {/* Heart like action */}
              <div className="flex items-center justify-end pt-2 border-t border-neutral-100">
                <button
                  onClick={() => handleLike(item.id)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs transition-all ${
                    likedMap[item.id]
                      ? 'bg-wedding-pink-50 text-wedding-pink-600 font-semibold'
                      : 'text-neutral-500 hover:text-wedding-pink-600 hover:bg-wedding-pink-50'
                  }`}
                >
                  <Heart
                    className={`w-3.5 h-3.5 transition-transform group-hover:scale-110 ${
                      likedMap[item.id] ? 'fill-wedding-pink-500 text-wedding-pink-500' : 'text-neutral-400'
                    }`}
                  />
                  <span>{item.likes || 0}</span>
                </button>
              </div>

            </div>
          ))}
        </div>
      )}
    </section>
  );
}
