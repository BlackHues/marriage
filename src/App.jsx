import React, { useState, useEffect } from 'react';
import WeddingOpeningCard from './components/WeddingOpeningCard';
import PetalEffects from './components/PetalEffects';
import PetalCursor from './components/PetalCursor';
import HeroSection from './components/HeroSection';
import GuestBook from './components/GuestBook';
import OriginalCardModal from './components/OriginalCardModal';
import { weddingAudio } from './utils/audio';

export default function App() {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [showOriginalCard, setShowOriginalCard] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);

  useEffect(() => {
    // Attempt playback immediately and on any first user gesture anywhere
    weddingAudio.play().catch(() => {});

    const handleFirstGesture = () => {
      weddingAudio.play().catch(() => {});
    };

    window.addEventListener('click', handleFirstGesture, { once: true, passive: true });
    window.addEventListener('touchstart', handleFirstGesture, { once: true, passive: true });
    window.addEventListener('scroll', handleFirstGesture, { once: true, passive: true });
    window.addEventListener('keydown', handleFirstGesture, { once: true, passive: true });

    // Prevent browser from restoring scrolled position on refresh
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    return () => {
      window.removeEventListener('click', handleFirstGesture);
      window.removeEventListener('touchstart', handleFirstGesture);
      window.removeEventListener('scroll', handleFirstGesture);
      window.removeEventListener('keydown', handleFirstGesture);
    };
  }, []);

  const handleCompleteCardOpening = () => {
    // Force instant scroll to top on card open
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;

    setIsCardOpen(true);
    setMusicStarted(true);
    weddingAudio.play().catch(() => {});

    // Ensure top position persists across DOM repaint frames
    requestAnimationFrame(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
      if (document.documentElement) document.documentElement.scrollTop = 0;
      if (document.body) document.body.scrollTop = 0;
    });

    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 50);

    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, 250);
  };

  const handleReopenCard = () => {
    setIsCardOpen(false);
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    if (document.documentElement) document.documentElement.scrollTop = 0;
    if (document.body) document.body.scrollTop = 0;
  };

  const handleScrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFFDF9] via-[#FFF5F7] to-[#FAF4DC] text-neutral-800 font-sans relative selection:bg-wedding-pink-200 selection:text-wedding-pink-700">
      
      {/* CUSTOM ROSE PETAL CURSOR & INTERACTIVE TRAIL */}
      <PetalCursor />

      {/* FLOATING ROSE PETALS (NO STARS) */}
      <PetalEffects />

      {/* WEDDING OPENING ENVELOPE (RIBBON & BOW COVER) */}
      {!isCardOpen && (
        <WeddingOpeningCard
          isOpen={isCardOpen}
          onComplete={handleCompleteCardOpening}
        />
      )}

      {/* MAIN WEDDING PAGE CONTENT (REVEALED IMMEDIATELY AFTER RIBBON UNTIES) */}
      <main className={`transition-opacity duration-500 ${isCardOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        
        {/* HERO SECTION WITH TOP BANNER & INTEGRATED COUNTDOWN */}
        <HeroSection
          onOpenCardModal={() => setShowOriginalCard(true)}
          onScrollToSection={handleScrollToSection}
        />

        {/* GUEST BOOK & WISHES (SQLITE DATABASE CONNECTED) */}
        <GuestBook />

        {/* DEVELOPER FOOTER */}
        <footer className="mt-10 text-center py-4 sm:py-5 px-4 border-t-2 border-[#C9A24B] bg-gradient-to-r from-[#5B1226] via-[#7A1F3D] to-[#5B1226] text-white shadow-inner">
          <div className="max-w-xl mx-auto flex flex-col items-center justify-center space-y-1.5 text-center">
            <p className="text-xs sm:text-[13px] text-white/95 font-sans tracking-wide">
              Designed &amp; Developed by <span className="font-semibold text-[#F6E3B4]">Arjun Kumar H</span>
            </p>
            <p className="text-[11px] sm:text-xs text-white/75 font-sans">
              For custom wedding websites &amp; digital invites at affordable pricing
            </p>
            <div className="pt-1 flex items-center justify-center">
              <a 
                href="https://wa.me/919995956770?text=Hi%20Arjun,%20I%20saw%20your%20wedding%20website%20and%20would%20like%20to%20enquire%20about%20a%20website."
                target="_blank" 
                rel="noopener noreferrer"
                title="WhatsApp: 9995956770"
                aria-label="Direct WhatsApp Message to Arjun Kumar H: 9995956770"
                className="inline-flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-md hover:shadow-lg hover:scale-110 active:scale-95 transition-all"
              >
                <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.1.824zm-3.423-14.416c-6.627 0-12 5.373-12 12 0 2.155.57 4.178 1.564 5.924l-1.657 6.052 6.222-1.632c1.701.929 3.651 1.456 5.728 1.456 6.627 0 12-5.373 12-12 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>

      </main>

      {/* ORIGINAL PRINTED INVITATION MODAL */}
      <OriginalCardModal
        isOpen={showOriginalCard}
        onClose={() => setShowOriginalCard(false)}
      />

    </div>
  );
}
