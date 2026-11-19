import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { weddingAudio } from '../utils/audio';
import { Sparkles, Heart } from 'lucide-react';

export default function WeddingOpeningCard({ onComplete, isOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  const triggerConfetti = () => {
    try {
      const count = 180;
      const defaults = {
        origin: { y: 0.5 },
        colors: ['#C9A227', '#E5C158', '#7A1F2B', '#E8A3A3', '#FFFFFF', '#6B8F5E', '#FFD700']
      };

      function fire(particleRatio, opts) {
        confetti({
          ...defaults,
          ...opts,
          particleCount: Math.floor(count * particleRatio)
        });
      }

      fire(0.25, { spread: 40, startVelocity: 60 });
      fire(0.2, { spread: 70 });
      fire(0.35, { spread: 110, decay: 0.91, scalar: 1.1 });
      fire(0.1, { spread: 140, startVelocity: 35, decay: 0.92, scalar: 1.3 });
      fire(0.1, { spread: 140, startVelocity: 55 });
    } catch (e) {
      console.warn('Confetti error:', e);
    }
  };

  const handleOpenCard = (e) => {
    if (e) e.stopPropagation();
    if (isOpening) return;
    setIsOpening(true);

    try {
      weddingAudio.play();
    } catch (err) {
      console.warn('Audio play error:', err);
    }

    triggerConfetti();

    setTimeout(() => {
      if (onComplete) {
        onComplete();
      }
    }, 700);
  };

  if (isOpen) {
    return null;
  }

  return (
    <div 
      onClick={handleOpenCard}
      className={`fixed inset-0 z-50 w-full h-full min-h-screen bg-[#FAF6EE] text-[#2B2B2B] overflow-y-auto overflow-x-hidden cursor-pointer select-none transition-all duration-700 ${
        isOpening ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{
        boxShadow: 'inset 0 0 100px rgba(201, 162, 39, 0.25)'
      }}
    >
      
      {/* ========================================================================= */}
      {/* 1. TEXTURED ROYAL SILK PAPER BACKGROUND & SUBTLE SACRED MANDALA WATERMARK */}
      {/* ========================================================================= */}
      
      {/* Warm Parchment / Silk Paper Grain */}
      <div 
        className="fixed inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#2B2B2B 0.8px, transparent 0.8px), radial-gradient(#C9A227 0.8px, transparent 0.8px)`,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 10px 10px'
        }}
      />

      {/* Radial Warm Golden Ambient Glow from Center */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#FFF8E7]/60 via-[#FAF4DC]/30 to-[#F5EEDB]/70 pointer-events-none" />

      {/* Faint Sacred Temple Mandala Watermark (Spiritual elegance across full screen) */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none opacity-[0.045]">
        <svg width="700" height="700" viewBox="0 0 200 200" fill="none" stroke="#C9A227" strokeWidth="0.6">
          <circle cx="100" cy="100" r="92" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="80" />
          <circle cx="100" cy="100" r="60" strokeDasharray="2 2" />
          <circle cx="100" cy="100" r="40" />
          <circle cx="100" cy="100" r="20" />
          {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((deg) => (
            <g key={deg} transform={`rotate(${deg} 100 100)`}>
              <path d="M100 10 C106 30, 112 50, 100 70 C88 50, 94 30, 100 10 Z" fill="#C9A227" fillOpacity="0.08" />
              <line x1="100" y1="10" x2="100" y2="100" />
            </g>
          ))}
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 2. FULL-SCREEN DOUBLE GOLD FOIL BORDERS WITH ORNATE CORNER FILIGREES       */}
      {/* ========================================================================= */}
      <div className="fixed inset-2 sm:inset-4 md:inset-6 rounded-2xl md:rounded-3xl border-2 border-[#C9A227] pointer-events-none" />
      <div className="fixed inset-3.5 sm:inset-6 md:inset-8 rounded-xl md:rounded-2xl border border-[#C9A227]/50 pointer-events-none" />

      {/* Four Grand Ornate Gold Corner Motifs */}
      {/* Top-Left */}
      <div className="fixed top-4 left-4 sm:top-7 sm:left-7 md:top-9 md:left-9 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 pointer-events-none text-[#C9A227]">
        <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 30 L2 2 L30 2" />
          <path d="M6 24 L6 6 L24 6" />
          <path d="M10 18 L10 10 L18 10" />
          <circle cx="14" cy="14" r="3" fill="currentColor" />
          <path d="M30 2 C30 16, 16 30, 2 30" strokeDasharray="2 3" />
        </svg>
      </div>
      {/* Top-Right */}
      <div className="fixed top-4 right-4 sm:top-7 sm:right-7 md:top-9 md:right-9 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 pointer-events-none text-[#C9A227] scale-x-[-1]">
        <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 30 L2 2 L30 2" />
          <path d="M6 24 L6 6 L24 6" />
          <path d="M10 18 L10 10 L18 10" />
          <circle cx="14" cy="14" r="3" fill="currentColor" />
          <path d="M30 2 C30 16, 16 30, 2 30" strokeDasharray="2 3" />
        </svg>
      </div>
      {/* Bottom-Left */}
      <div className="fixed bottom-7 left-4 sm:bottom-10 sm:left-7 md:bottom-12 md:left-9 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 pointer-events-none text-[#C9A227] scale-y-[-1]">
        <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 30 L2 2 L30 2" />
          <path d="M6 24 L6 6 L24 6" />
          <path d="M10 18 L10 10 L18 10" />
          <circle cx="14" cy="14" r="3" fill="currentColor" />
          <path d="M30 2 C30 16, 16 30, 2 30" strokeDasharray="2 3" />
        </svg>
      </div>
      {/* Bottom-Right */}
      <div className="fixed bottom-7 right-4 sm:bottom-10 sm:right-7 md:bottom-12 md:right-9 w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 pointer-events-none text-[#C9A227] scale-[-1]">
        <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M2 30 L2 2 L30 2" />
          <path d="M6 24 L6 6 L24 6" />
          <path d="M10 18 L10 10 L18 10" />
          <circle cx="14" cy="14" r="3" fill="currentColor" />
          <path d="M30 2 C30 16, 16 30, 2 30" strokeDasharray="2 3" />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 3. TRADITIONAL HANGING KERALA BRASS LAMPS (THOOKKUVILAKKU) ON BOTH SIDES  */}
      {/* ========================================================================= */}
      
      {/* Left Hanging Brass Lamp */}
      <div className="absolute top-2 left-6 sm:left-14 md:left-20 lg:left-28 w-16 sm:w-20 md:w-24 h-64 sm:h-80 md:h-96 pointer-events-none z-20">
        <svg viewBox="0 0 80 220" fill="none" className="w-full h-full filter drop-shadow-md">
          <defs>
            <linearGradient id="lampBrassLeft" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#8E6D18" />
              <stop offset="35%" stopColor="#E5C158" />
              <stop offset="50%" stopColor="#FFF2B8" />
              <stop offset="70%" stopColor="#C9A227" />
              <stop offset="100%" stopColor="#755716" />
            </linearGradient>
            <radialGradient id="lampGlowHalo" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#FFECB3" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#FFA000" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#FFA000" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Chain */}
          <line x1="40" y1="0" x2="40" y2="100" stroke="#C9A227" strokeWidth="2" strokeDasharray="3 4" />
          <circle cx="40" cy="100" r="4" fill="url(#lampBrassLeft)" />
          {/* Lamp Crown */}
          <path d="M32 105 L48 105 L44 114 L36 114 Z" fill="url(#lampBrassLeft)" />
          <circle cx="40" cy="118" r="6" fill="url(#lampBrassLeft)" />
          <rect x="38" y="124" width="4" height="18" fill="url(#lampBrassLeft)" />
          <ellipse cx="40" cy="144" rx="8" ry="4" fill="url(#lampBrassLeft)" />
          {/* Oil Bowl / Thatte */}
          <path d="M22 154 C22 146, 58 146, 58 154 L52 165 L28 165 Z" fill="url(#lampBrassLeft)" />
          <ellipse cx="40" cy="154" rx="18" ry="3.5" fill="#755716" />
          <ellipse cx="40" cy="153" rx="15" ry="2.5" fill="#996515" />
          {/* Bottom Drop */}
          <path d="M34 165 L46 165 L42 173 L38 173 Z" fill="url(#lampBrassLeft)" />
          <circle cx="40" cy="178" r="4.5" fill="url(#lampBrassLeft)" />
          <path d="M40 182 L42 192 L38 192 Z" fill="url(#lampBrassLeft)" />
          {/* Glowing Flame */}
          <circle cx="40" cy="144" r="22" fill="url(#lampGlowHalo)" className="animate-pulse" />
          <path d="M40 134 C36 142, 38 148, 40 150 C42 148, 44 142, 40 134 Z" fill="#FFC107" />
          <path d="M40 138 C38 143, 39 147, 40 148 C41 147, 42 143, 40 138 Z" fill="#FFFFFF" />
        </svg>
      </div>

      {/* Right Hanging Brass Lamp */}
      <div className="absolute top-2 right-6 sm:right-14 md:right-20 lg:right-28 w-16 sm:w-20 md:w-24 h-64 sm:h-80 md:h-96 pointer-events-none z-20 scale-x-[-1]">
        <svg viewBox="0 0 80 220" fill="none" className="w-full h-full filter drop-shadow-md">
          <line x1="40" y1="0" x2="40" y2="100" stroke="#C9A227" strokeWidth="2" strokeDasharray="3 4" />
          <circle cx="40" cy="100" r="4" fill="url(#lampBrassLeft)" />
          <path d="M32 105 L48 105 L44 114 L36 114 Z" fill="url(#lampBrassLeft)" />
          <circle cx="40" cy="118" r="6" fill="url(#lampBrassLeft)" />
          <rect x="38" y="124" width="4" height="18" fill="url(#lampBrassLeft)" />
          <ellipse cx="40" cy="144" rx="8" ry="4" fill="url(#lampBrassLeft)" />
          <path d="M22 154 C22 146, 58 146, 58 154 L52 165 L28 165 Z" fill="url(#lampBrassLeft)" />
          <ellipse cx="40" cy="154" rx="18" ry="3.5" fill="#755716" />
          <ellipse cx="40" cy="153" rx="15" ry="2.5" fill="#996515" />
          <path d="M34 165 L46 165 L42 173 L38 173 Z" fill="url(#lampBrassLeft)" />
          <circle cx="40" cy="178" r="4.5" fill="url(#lampBrassLeft)" />
          <path d="M40 182 L42 192 L38 192 Z" fill="url(#lampBrassLeft)" />
          <circle cx="40" cy="144" r="22" fill="url(#lampGlowHalo)" className="animate-pulse" />
          <path d="M40 134 C36 142, 38 148, 40 150 C42 148, 44 142, 40 134 Z" fill="#FFC107" />
          <path d="M40 138 C38 143, 39 147, 40 148 C41 147, 42 143, 40 138 Z" fill="#FFFFFF" />
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 4. OVERHEAD JASMINE (MULLA POO) GARLANDS & BOTANICAL ARCH AT TOP          */}
      {/* ========================================================================= */}
      <div className="absolute top-0 left-0 right-0 h-28 sm:h-36 md:h-44 pointer-events-none z-15 overflow-hidden">
        <svg viewBox="0 0 1200 160" preserveAspectRatio="none" fill="none" className="w-full h-full opacity-90">
          <defs>
            <linearGradient id="garlandLeaf" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#4E6B44" />
              <stop offset="60%" stopColor="#6B8F5E" />
              <stop offset="100%" stopColor="#8CAE7C" />
            </linearGradient>
          </defs>
          {/* Top green foliage canopy */}
          <path d="M0 0 L1200 0 L1200 45 C1000 65, 800 25, 600 55 C400 25, 200 65, 0 45 Z" fill="url(#garlandLeaf)" opacity="0.8" />
          <path d="M0 0 L1200 0 L1200 30 C1050 45, 750 15, 600 35 C450 15, 150 45, 0 30 Z" fill="#3D5635" opacity="0.7" />

          {/* Hanging Jasmine Swags */}
          <path d="M100 25 Q350 90 600 35 Q850 90 1100 25" stroke="#C9A227" strokeWidth="1" strokeDasharray="2 3" />
          <path d="M200 25 Q400 110 600 40 Q800 110 1000 25" stroke="#C9A227" strokeWidth="1" strokeDasharray="2 3" />

          {/* Jasmine Blossom Dots */}
          {[120, 160, 210, 260, 310, 360, 420, 480, 540, 600, 660, 720, 780, 840, 890, 940, 990, 1040, 1080].map((x, i) => (
            <circle key={i} cx={x} cy={45 + Math.sin(i * 0.4) * 22} r="4.5" fill="#FFFFFF" stroke="#F5E8C7" strokeWidth="0.8" />
          ))}
          {[180, 240, 300, 380, 460, 550, 650, 740, 820, 900, 960, 1020].map((x, i) => (
            <circle key={`inner-${i}`} cx={x} cy={55 + Math.sin(i * 0.5) * 28} r="4" fill="#FFFFFF" stroke="#F5E8C7" strokeWidth="0.8" />
          ))}
        </svg>
      </div>

      {/* ========================================================================= */}
      {/* 5. MAIN WEDDING COVER LETTER CONTENT (USING FULL SCREEN FOR PC & MOBILE)  */}
      {/* ========================================================================= */}
      <div className="relative z-30 min-h-screen flex flex-col justify-between items-center px-4 sm:px-8 md:px-12 py-10 sm:py-14 md:py-16 text-center max-w-5xl mx-auto">
        
        {/* TOP SECTION: AUSPICIOUS LORD GANESHA EMBLEM & DIVINE INVOCATION */}
        <div className="pt-8 sm:pt-10 flex flex-col items-center">
          
          {/* Royal Hindu Lord Ganesha Emblem (Like Reference) */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 text-[#C9A227] filter drop-shadow-md mb-2">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
              <defs>
                <linearGradient id="ganeshaGold" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF9D2" />
                  <stop offset="35%" stopColor="#E5B83B" />
                  <stop offset="70%" stopColor="#C9A227" />
                  <stop offset="100%" stopColor="#755716" />
                </linearGradient>
              </defs>
              {/* Radiant Sun Halo */}
              <circle cx="50" cy="50" r="44" stroke="url(#ganeshaGold)" strokeWidth="0.8" strokeDasharray="1.5 2.5" />
              <circle cx="50" cy="50" r="40" stroke="url(#ganeshaGold)" strokeWidth="1" />
              
              {/* Lord Ganesha Sacred Line Art */}
              {/* Crown (Mukut) */}
              <path d="M43 20 L57 20 L53 10 L50 6 L47 10 Z" fill="url(#ganeshaGold)" />
              <path d="M40 24 L60 24 L56 20 L44 20 Z" fill="url(#ganeshaGold)" />
              <circle cx="50" cy="15" r="2" fill="#7A1F2B" />

              {/* Head & Big Ears */}
              <path d="M40 28 C30 22, 22 35, 32 46 C37 42, 40 38, 42 34" stroke="url(#ganeshaGold)" strokeWidth="2" strokeLinecap="round" />
              <path d="M60 28 C70 22, 78 35, 68 46 C63 42, 60 38, 58 34" stroke="url(#ganeshaGold)" strokeWidth="2" strokeLinecap="round" />

              {/* Forehead Tilak */}
              <path d="M48 27 L52 27 L50 33 Z" fill="#7A1F2B" />
              <line x1="45" y1="29" x2="55" y2="29" stroke="url(#ganeshaGold)" strokeWidth="1.2" />

              {/* Trunk (Vakratunda) */}
              <path d="M48 35 C48 45, 43 55, 48 65 C52 72, 60 70, 62 64 C64 59, 58 56, 55 58" stroke="url(#ganeshaGold)" strokeWidth="2.8" strokeLinecap="round" />
              {/* Modak (Laddoo) */}
              <circle cx="56" cy="58" r="3.5" fill="#E5C158" stroke="#755716" strokeWidth="0.6" />

              {/* Tusk */}
              <line x1="43" y1="46" x2="40" y2="49" stroke="#FFF" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* CENTER SECTION: WEDDING INVITATION LETTER & COUPLE NAMES */}
        <div className="my-6 sm:my-8 max-w-4xl w-full px-2 sm:px-6">
          
          {/* Formal Invite Words */}
          <p className="font-serif italic text-base sm:text-lg md:text-xl text-[#2B2B2B] font-medium tracking-wide">
            We cordially invite you to attend the
          </p>

          <h2 className="font-script text-6xl sm:text-8xl md:text-9xl text-[#7A1F2B] font-bold leading-none py-2 sm:py-4 drop-shadow-sm">
            Wedding
          </h2>

          <p className="font-sans text-xs sm:text-sm md:text-base uppercase tracking-[0.3em] text-[#C9A227] font-bold mb-4 sm:mb-6">
            Ceremony of
          </p>

          {/* BRIDE & GROOM REGAL NAMES WITH 3D GOLD INTERLOCKING RINGS */}
          <div className="my-4 sm:my-6 py-2">
            <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-6 md:gap-8">
              
              {/* Bride Name & Family */}
              <div className="flex-1 text-center md:text-right">
                <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#2B2B2B] font-bold tracking-tight leading-tight">
                  Abhirami
                </h1>
                <p className="font-serif text-sm sm:text-base md:text-lg text-[#7A1F2B] font-semibold mt-1">
                  Abhirami S L
                </p>
                <p className="font-serif text-xs sm:text-sm text-neutral-600 italic">
                  D/o Mr. K. Sanjayan & Mrs. Leena. R
                </p>
                <p className="text-[11px] sm:text-xs text-neutral-500 font-sans">
                  Kunnuvila Veedu, Chathanpara, Thottakkadu P.O, Attingal
                </p>
              </div>

              {/* Realistic 3D Interlocking Golden Rings / Mangalya Knot */}
              <div className="shrink-0 my-2 md:my-0 px-2 py-2 filter drop-shadow-lg scale-110 sm:scale-125">
                <svg width="60" height="54" viewBox="0 0 54 48" fill="none">
                  <ellipse cx="20" cy="24" rx="15" ry="17" fill="none" stroke="url(#ganeshaGold)" strokeWidth="4.5" />
                  <ellipse cx="20" cy="24" rx="12.5" ry="14.5" fill="none" stroke="#5E4003" strokeWidth="0.8" opacity="0.6" />

                  <ellipse cx="34" cy="24" rx="15" ry="17" fill="none" stroke="url(#ganeshaGold)" strokeWidth="4.5" />
                  <ellipse cx="34" cy="24" rx="12.5" ry="14.5" fill="none" stroke="#5E4003" strokeWidth="0.8" opacity="0.6" />

                  <path d="M26 12 C29 15, 29 20, 26 24" stroke="url(#ganeshaGold)" strokeWidth="4.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Groom Name & Family */}
              <div className="flex-1 text-center md:text-left">
                <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#2B2B2B] font-bold tracking-tight leading-tight">
                  Ajeesh
                </h1>
                <p className="font-serif text-sm sm:text-base md:text-lg text-[#C9A227] font-semibold mt-1">
                  Ajeesh R
                </p>
                <p className="font-serif text-xs sm:text-sm text-neutral-600 italic">
                  S/o Mr. Reghunathan. S & Mrs. Ushakumari. S
                </p>
                <p className="text-[11px] sm:text-xs text-neutral-500 font-sans">
                  Thrayambakam, Parakkulam, Thottakkadu P.O
                </p>
              </div>

            </div>
          </div>

          {/* DATE & CALENDAR 3-COLUMN AUSPICIOUS BLOCK */}
          <div className="my-4 sm:my-6 max-w-xl mx-auto py-3 px-6 rounded-2xl bg-white/80 border-2 border-[#C9A227]/60 shadow-sm">
            <div className="flex items-center justify-center gap-4 sm:gap-8">
              
              <div className="flex-1 text-right">
                <span className="font-serif text-base sm:text-xl md:text-2xl font-bold text-[#2B2B2B] block uppercase tracking-wider">
                  Sunday
                </span>
                <span className="font-serif text-xs sm:text-sm text-neutral-600 italic">
                  10 Makaram 1202
                </span>
              </div>

              <div className="h-12 sm:h-16 w-[2px] bg-[#C9A227]" />

              <div className="shrink-0 px-2 leading-none">
                <span className="font-serif text-5xl sm:text-7xl font-bold text-[#7A1F2B] tracking-tight block">
                  24
                </span>
              </div>

              <div className="h-12 sm:h-16 w-[2px] bg-[#C9A227]" />

              <div className="flex-1 text-left">
                <span className="font-serif text-base sm:text-xl md:text-2xl font-bold text-[#2B2B2B] block uppercase tracking-wider">
                  January
                </span>
                <span className="font-serif text-sm sm:text-base text-[#7A1F2B] font-bold block">
                  2027
                </span>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: ELEGANT BUTTON WITH BORDER LINE MATCHING BACKGROUND */}
        <div className="pb-6 pt-3 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-8 sm:px-12 py-2.5 sm:py-3 rounded-full bg-[#FAF6EE] hover:bg-[#FAF4DC] border-2 border-[#C9A227] text-[#7A1F2B] font-serif text-sm sm:text-base md:text-lg tracking-widest font-bold shadow-sm hover:scale-105 active:scale-95 transition-all">
            <Sparkles className="w-4 h-4 text-[#C9A227]" />
            <span>Tap to Open</span>
            <Sparkles className="w-4 h-4 text-[#C9A227]" />
          </div>
        </div>

        {/* AUTHENTIC KERALA KASAVU (GOLD-AND-CREAM) ZARI BORDER STRIP AT BOTTOM */}
        <div className="w-full h-4 sm:h-5 bg-[#FAF6EE] border-t border-[#C9A227] overflow-hidden pointer-events-none mt-4 rounded-b-xl flex items-center relative">
          <div 
            className="w-full h-full opacity-90"
            style={{
              backgroundImage: `
                linear-gradient(to bottom, #C9A227 1px, transparent 1px, transparent 2px, #E5C158 2px, #E5C158 4px, transparent 4px),
                repeating-linear-gradient(45deg, #C9A227 0, #C9A227 2px, transparent 2px, transparent 6px)
              `,
              backgroundSize: '100% 6px, 8px 8px'
            }}
          />
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-[#7A1F2B]" />
        </div>

      </div>

    </div>
  );
}
