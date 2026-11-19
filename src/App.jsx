import React, { useState } from 'react';
import WeddingOpeningCard from './components/WeddingOpeningCard';
import PetalEffects from './components/PetalEffects';
import AudioControl from './components/AudioControl';
import HeroSection from './components/HeroSection';
import EventsTimeline from './components/EventsTimeline';
import VenuesSection from './components/VenuesSection';
import FamilySection from './components/FamilySection';
import GuestBook from './components/GuestBook';
import ShareSection from './components/ShareSection';
import OriginalCardModal from './components/OriginalCardModal';
import FloatingNav from './components/FloatingNav';
import { weddingAudio } from './utils/audio';
import { Sparkles, MailOpen } from 'lucide-react';

export default function App() {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [showOriginalCard, setShowOriginalCard] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);

  const handleCompleteCardOpening = () => {
    setIsCardOpen(true);
    setMusicStarted(true);
    try {
      weddingAudio.play();
    } catch (err) {
      console.warn('Audio play error:', err);
    }
  };

  const handleReopenCard = () => {
    setIsCardOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleScrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFDF9] via-[#FFF5F7] to-[#FAF4DC] text-neutral-800 font-sans relative selection:bg-wedding-pink-200 selection:text-wedding-pink-700 pb-20">
      
      {/* FLOATING ROSE PETALS & GOLD SPARKLES */}
      <PetalEffects />

      {/* TOP FLOATING AUDIO CONTROL */}
      <AudioControl autoStart={musicStarted} />

      {/* WEDDING OPENING ENVELOPE (RIBBON & BOW COVER) */}
      {!isCardOpen && (
        <WeddingOpeningCard
          isOpen={isCardOpen}
          onComplete={handleCompleteCardOpening}
        />
      )}

      {/* TOP REPLAY CARD BUTTON FOR DESKTOP */}
      {isCardOpen && (
        <button
          onClick={handleReopenCard}
          className="hidden md:flex fixed top-4 left-4 z-40 items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-md border border-wedding-gold-300 shadow-md text-xs font-bold text-wedding-pink-700 hover:bg-wedding-pink-50 hover:scale-105 transition-all"
        >
          <MailOpen className="w-3.5 h-3.5 text-wedding-pink-500" />
          <span>View Invitation Card</span>
        </button>
      )}

      {/* MAIN WEDDING PAGE CONTENT (REVEALED IMMEDIATELY AFTER RIBBON UNTIES) */}
      <main className={`transition-opacity duration-500 ${isCardOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        
        {/* HERO SECTION WITH TOP BANNER & INTEGRATED COUNTDOWN */}
        <HeroSection
          onOpenCardModal={() => setShowOriginalCard(true)}
          onScrollToSection={handleScrollToSection}
        />

        {/* TIMELINE OF CEREMONIES */}
        <EventsTimeline />

        {/* VENUES & MAPS */}
        <VenuesSection />

        {/* FAMILIES & CONTACTS */}
        <FamilySection />

        {/* GUEST BOOK & WISHES (SQLITE DATABASE CONNECTED) */}
        <GuestBook />

        {/* SHARE SECTION */}
        <ShareSection />

        {/* FOOTER */}
        <footer className="mt-16 text-center py-10 px-4 border-t border-wedding-gold-200 bg-white/60">
          <div className="flex items-center justify-center gap-2 text-wedding-gold-600 mb-2">
            <Sparkles className="w-4 h-4 text-wedding-gold-500" />
            <span className="font-script text-2xl text-wedding-pink-600 font-bold">Abhirami & Ajeesh</span>
            <Sparkles className="w-4 h-4 text-wedding-gold-500" />
          </div>
          <p className="font-serif italic text-xs text-neutral-600 max-w-sm mx-auto">
            "With the divine grace of Sree Narayana Guru, stepping together into an eternity of love, respect, and companionship."
          </p>
          <p className="text-[11px] text-neutral-500 mt-4 font-medium">
            Sunday, 24th January 2027 • Sivagiri, Varkala & Alamcode
          </p>
        </footer>

      </main>

      {/* FLOATING BOTTOM NAV (FOR MOBILE & QUICK ACTIONS) */}
      {isCardOpen && (
        <FloatingNav
          onReopenCard={handleReopenCard}
          onScrollTo={handleScrollToSection}
        />
      )}

      {/* ORIGINAL PRINTED INVITATION MODAL */}
      <OriginalCardModal
        isOpen={showOriginalCard}
        onClose={() => setShowOriginalCard(false)}
      />

    </div>
  );
}
