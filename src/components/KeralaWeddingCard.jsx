import React from 'react';
import { Calendar, MapPin, Phone, Sparkles, Navigation } from 'lucide-react';

export default function KeralaWeddingCard({ 
  interactive = false, 
  showActions = true,
  className = "" 
}) {
  // Calendar event details for Google Calendar
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'Wedding: Abhirami & Ajeesh 💍'
  )}&dates=20270124T043500Z/20270124T052000Z&details=${encodeURIComponent(
    'Wedding Ceremony of Abhirami S L with Ajeesh R.\nMuhurtham: 10:05 AM - 10:50 AM\nEvening Reception: 4:30 PM onwards at Harizon Plaza, Alamcode\nContact: 9048728981'
  )}&location=${encodeURIComponent(
    'Sivagiri Sarada Mutt, Varkala, Thiruvananthapuram, Kerala'
  )}`;

  return (
    <div className={`relative w-full max-w-xl mx-auto ${className}`}>
      
      {/* 4:5 PORTRAIT LUXURY WEDDING CARD CANVAS */}
      <div 
        id="kerala-wedding-invitation-card"
        className="relative aspect-[4/5] min-h-[640px] sm:min-h-[720px] w-full rounded-2xl sm:rounded-3xl bg-[#FBF6EC] text-[#2B2B2B] shadow-2xl border-2 sm:border-[3px] border-[#C9A227] overflow-hidden flex flex-col justify-between p-4 sm:p-7 md:p-8 select-none"
        style={{
          boxShadow: '0 25px 60px -15px rgba(122, 31, 43, 0.25), 0 0 35px rgba(201, 162, 39, 0.35)',
        }}
      >
        
        {/* ========================================================================= */}
        {/* 1. TEXTURED PAPER & SUBTLE SACRED MANDALA WATERMARK                       */}
        {/* ========================================================================= */}
        
        {/* Warm Textured Paper Fibers */}
        <div 
          className="absolute inset-0 opacity-[0.035] pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(#2B2B2B 0.75px, transparent 0.75px), radial-gradient(#C9A227 0.75px, transparent 0.75px)`,
            backgroundSize: '16px 16px',
            backgroundPosition: '0 0, 8px 8px'
          }}
        />

        {/* Faint Sacred Temple Mandala Watermark (Spiritual elegance) */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.05]">
          <svg width="420" height="420" viewBox="0 0 200 200" fill="none" stroke="#C9A227" strokeWidth="0.75">
            <circle cx="100" cy="100" r="90" strokeDasharray="3 3" />
            <circle cx="100" cy="100" r="75" />
            <circle cx="100" cy="100" r="55" strokeDasharray="2 2" />
            <circle cx="100" cy="100" r="35" />
            <circle cx="100" cy="100" r="15" />
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
              <g key={deg} transform={`rotate(${deg} 100 100)`}>
                <path d="M100 10 C108 30, 115 50, 100 70 C85 50, 92 30, 100 10 Z" fill="#C9A227" fillOpacity="0.1" />
                <path d="M100 25 C105 45, 108 55, 100 65 C92 55, 95 45, 100 25 Z" />
                <line x1="100" y1="10" x2="100" y2="100" />
              </g>
            ))}
          </svg>
        </div>

        {/* ========================================================================= */}
        {/* 2. THIN DOUBLE GOLD FOIL BORDER WITH ORNATE CORNER MOTIFS                 */}
        {/* ========================================================================= */}
        
        {/* Outer border is card frame; Inner thin gold border */}
        <div className="absolute inset-2 sm:inset-3 rounded-xl sm:rounded-2xl border border-[#C9A227]/80 pointer-events-none" />
        <div className="absolute inset-2.5 sm:inset-3.5 rounded-lg sm:rounded-xl border border-[#C9A227]/40 pointer-events-none" />

        {/* Ornate Gold Corner Motifs (Top-Left, Top-Right, Bottom-Left, Bottom-Right) */}
        <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-7 h-7 sm:w-10 sm:h-10 pointer-events-none text-[#C9A227]">
          <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M2 18 L2 2 L18 2" />
            <path d="M5 14 L5 5 L14 5" />
            <circle cx="9" cy="9" r="2" fill="currentColor" />
            <path d="M18 2 C18 10, 10 18, 2 18" strokeDasharray="1.5 2" />
          </svg>
        </div>
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 w-7 h-7 sm:w-10 sm:h-10 pointer-events-none text-[#C9A227] scale-x-[-1]">
          <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M2 18 L2 2 L18 2" />
            <path d="M5 14 L5 5 L14 5" />
            <circle cx="9" cy="9" r="2" fill="currentColor" />
            <path d="M18 2 C18 10, 10 18, 2 18" strokeDasharray="1.5 2" />
          </svg>
        </div>
        <div className="absolute bottom-6 left-3 sm:bottom-7 sm:left-4 w-7 h-7 sm:w-10 sm:h-10 pointer-events-none text-[#C9A227] scale-y-[-1]">
          <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M2 18 L2 2 L18 2" />
            <path d="M5 14 L5 5 L14 5" />
            <circle cx="9" cy="9" r="2" fill="currentColor" />
            <path d="M18 2 C18 10, 10 18, 2 18" strokeDasharray="1.5 2" />
          </svg>
        </div>
        <div className="absolute bottom-6 right-3 sm:bottom-7 sm:right-4 w-7 h-7 sm:w-10 sm:h-10 pointer-events-none text-[#C9A227] scale-[-1]">
          <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.2">
            <path d="M2 18 L2 2 L18 2" />
            <path d="M5 14 L5 5 L14 5" />
            <circle cx="9" cy="9" r="2" fill="currentColor" />
            <path d="M18 2 C18 10, 10 18, 2 18" strokeDasharray="1.5 2" />
          </svg>
        </div>

        {/* ========================================================================= */}
        {/* 3. WATERCOLOR BANANA LEAVES, JASMINE (MULLA POO) & PINK LOTUS BUDS       */}
        {/* ========================================================================= */}
        
        {/* TOP-LEFT BOTANICAL CLUSTER */}
        <div className="absolute top-0 left-0 w-36 sm:w-48 h-40 sm:h-52 pointer-events-none">
          <svg viewBox="0 0 180 190" fill="none" className="w-full h-full">
            <defs>
              {/* Watercolor Leaf Gradients */}
              <linearGradient id="leafGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4E6B44" />
                <stop offset="50%" stopColor="#6B8F5E" />
                <stop offset="100%" stopColor="#8CAE7C" />
              </linearGradient>
              <linearGradient id="leafGrad2" x1="10%" y1="0%" x2="90%" y2="100%">
                <stop offset="0%" stopColor="#557A47" />
                <stop offset="60%" stopColor="#7DA16E" />
                <stop offset="100%" stopColor="#A4C495" />
              </linearGradient>
              {/* Lotus Bud Pink Gradient */}
              <linearGradient id="lotusPinkGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#D9798A" />
                <stop offset="40%" stopColor="#E8A3A3" />
                <stop offset="85%" stopColor="#F7D4D4" />
                <stop offset="100%" stopColor="#FFFFFF" />
              </linearGradient>
            </defs>

            {/* Banana Leaf 1 (Large curved) */}
            <path 
              d="M-15 -10 C35 15, 80 55, 65 110 C50 115, 25 80, -15 -10 Z" 
              fill="url(#leafGrad1)" 
              opacity="0.88" 
            />
            {/* Banana Leaf Central Vein & Ribs */}
            <path d="M-10 -5 Q40 50 60 108" stroke="#385032" strokeWidth="1.2" opacity="0.75" />
            <path d="M15 20 Q30 25 35 35 M25 38 Q45 45 50 60 M35 60 Q50 72 55 88" stroke="#385032" strokeWidth="0.7" opacity="0.6" />

            {/* Banana Leaf 2 (Secondary overlapping leaf) */}
            <path 
              d="M10 -15 C60 5, 105 45, 95 95 C75 90, 45 55, 10 -15 Z" 
              fill="url(#leafGrad2)" 
              opacity="0.82" 
            />
            <path d="M15 -10 Q65 40 90 92" stroke="#3F5A35" strokeWidth="1" opacity="0.65" />

            {/* Hanging Fragrant Jasmine Garlands (Mulla Poo) - Strand 1 */}
            <line x1="28" y1="0" x2="28" y2="140" stroke="#C9A227" strokeWidth="0.8" strokeDasharray="1.5 2.5" />
            {[25, 42, 59, 76, 93, 110, 127].map((y, idx) => (
              <g key={idx}>
                {/* Jasmine bud */}
                <ellipse cx="28" cy={y} rx="4.5" ry="3.5" fill="#FFFFFF" stroke="#F5E8C7" strokeWidth="0.8" />
                <ellipse cx="28" cy={y - 1} rx="2.5" ry="1.8" fill="#FFFBF2" />
                <circle cx="28" cy={y + 3} r="1" fill="#7DA16E" />
              </g>
            ))}
            {/* Terminal decorative bead */}
            <circle cx="28" cy="140" r="4" fill="#E8A3A3" stroke="#C9A227" strokeWidth="0.8" />

            {/* Jasmine Strand 2 */}
            <line x1="55" y1="0" x2="55" y2="165" stroke="#C9A227" strokeWidth="0.8" strokeDasharray="1.5 2.5" />
            {[20, 38, 56, 74, 92, 110, 128, 146].map((y, idx) => (
              <g key={idx}>
                <ellipse cx="55" cy={y} rx="4" ry="3.2" fill="#FFFFFF" stroke="#F5E8C7" strokeWidth="0.8" />
                <circle cx="55" cy={y + 2.5} r="0.9" fill="#7DA16E" />
              </g>
            ))}
            <circle cx="55" cy="165" r="3.5" fill="#E8A3A3" stroke="#C9A227" strokeWidth="0.8" />

            {/* Lotus Bud 1 (Blooming gracefully from foliage) */}
            <g transform="translate(42, 48) rotate(-18)">
              {/* Calyx sepals */}
              <path d="M0 12 Q-6 2 0 -12 Q6 2 0 12 Z" fill="#6B8F5E" />
              {/* Petals */}
              <path d="M-2 10 C-12 -2, -10 -16, 0 -22 C10 -16, 12 -2, 2 10 Z" fill="url(#lotusPinkGrad)" stroke="#D9798A" strokeWidth="0.6" />
              <path d="M-1 9 C-6 0, -5 -12, 0 -18 C5 -12, 6 0, 1 9 Z" fill="#FFF5F5" opacity="0.8" />
            </g>

            {/* Lotus Bud 2 (Small bud near edge) */}
            <g transform="translate(75, 62) rotate(15)">
              <path d="M0 8 Q-4 0 0 -8 Q4 0 0 8 Z" fill="#6B8F5E" />
              <path d="M-1 7 C-8 -1, -7 -10, 0 -15 C7 -10, 8 -1, 1 7 Z" fill="url(#lotusPinkGrad)" stroke="#D9798A" strokeWidth="0.5" />
            </g>
          </svg>
        </div>

        {/* TOP-RIGHT BOTANICAL CLUSTER (Mirrored) */}
        <div className="absolute top-0 right-0 w-36 sm:w-48 h-40 sm:h-52 pointer-events-none scale-x-[-1]">
          <svg viewBox="0 0 180 190" fill="none" className="w-full h-full">
            <path d="M-15 -10 C35 15, 80 55, 65 110 C50 115, 25 80, -15 -10 Z" fill="url(#leafGrad1)" opacity="0.88" />
            <path d="M-10 -5 Q40 50 60 108" stroke="#385032" strokeWidth="1.2" opacity="0.75" />
            <path d="M15 20 Q30 25 35 35 M25 38 Q45 45 50 60 M35 60 Q50 72 55 88" stroke="#385032" strokeWidth="0.7" opacity="0.6" />

            <path d="M10 -15 C60 5, 105 45, 95 95 C75 90, 45 55, 10 -15 Z" fill="url(#leafGrad2)" opacity="0.82" />
            <path d="M15 -10 Q65 40 90 92" stroke="#3F5A35" strokeWidth="1" opacity="0.65" />

            <line x1="28" y1="0" x2="28" y2="140" stroke="#C9A227" strokeWidth="0.8" strokeDasharray="1.5 2.5" />
            {[25, 42, 59, 76, 93, 110, 127].map((y, idx) => (
              <g key={idx}>
                <ellipse cx="28" cy={y} rx="4.5" ry="3.5" fill="#FFFFFF" stroke="#F5E8C7" strokeWidth="0.8" />
                <ellipse cx="28" cy={y - 1} rx="2.5" ry="1.8" fill="#FFFBF2" />
                <circle cx="28" cy={y + 3} r="1" fill="#7DA16E" />
              </g>
            ))}
            <circle cx="28" cy="140" r="4" fill="#E8A3A3" stroke="#C9A227" strokeWidth="0.8" />

            <line x1="55" y1="0" x2="55" y2="165" stroke="#C9A227" strokeWidth="0.8" strokeDasharray="1.5 2.5" />
            {[20, 38, 56, 74, 92, 110, 128, 146].map((y, idx) => (
              <g key={idx}>
                <ellipse cx="55" cy={y} rx="4" ry="3.2" fill="#FFFFFF" stroke="#F5E8C7" strokeWidth="0.8" />
                <circle cx="55" cy={y + 2.5} r="0.9" fill="#7DA16E" />
              </g>
            ))}
            <circle cx="55" cy="165" r="3.5" fill="#E8A3A3" stroke="#C9A227" strokeWidth="0.8" />

            <g transform="translate(42, 48) rotate(-18)">
              <path d="M0 12 Q-6 2 0 -12 Q6 2 0 12 Z" fill="#6B8F5E" />
              <path d="M-2 10 C-12 -2, -10 -16, 0 -22 C10 -16, 12 -2, 2 10 Z" fill="url(#lotusPinkGrad)" stroke="#D9798A" strokeWidth="0.6" />
            </g>
            <g transform="translate(75, 62) rotate(15)">
              <path d="M0 8 Q-4 0 0 -8 Q4 0 0 8 Z" fill="#6B8F5E" />
              <path d="M-1 7 C-8 -1, -7 -10, 0 -15 C7 -10, 8 -1, 1 7 Z" fill="url(#lotusPinkGrad)" stroke="#D9798A" strokeWidth="0.5" />
            </g>
          </svg>
        </div>

        {/* ========================================================================= */}
        {/* 4. HANGING TRADITIONAL BRASS NILAVILAKKU (OIL LAMP) AT TOP CENTER GLOWING */}
        {/* ========================================================================= */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 sm:w-20 h-28 sm:h-32 pointer-events-none z-10 flex flex-col items-center">
          <svg viewBox="0 0 70 120" fill="none" className="w-full h-full filter drop-shadow-md">
            <defs>
              <linearGradient id="brassGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8E6D18" />
                <stop offset="30%" stopColor="#E5C158" />
                <stop offset="50%" stopColor="#FFECA8" />
                <stop offset="70%" stopColor="#C9A227" />
                <stop offset="100%" stopColor="#755716" />
              </linearGradient>
              <radialGradient id="lampFlameGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFECB3" stopOpacity="0.9" />
                <stop offset="40%" stopColor="#FFB300" stopOpacity="0.6" />
                <stop offset="80%" stopColor="#FF6F00" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#FF6F00" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Hanging Brass Chain from Ceiling */}
            <line x1="35" y1="0" x2="35" y2="45" stroke="#C9A227" strokeWidth="1.6" strokeDasharray="2 3" />
            <circle cx="35" cy="45" r="3" fill="url(#brassGrad)" />

            {/* Nilavilakku Upper Crown (Prabha) */}
            <path d="M30 48 L40 48 L37 54 L33 54 Z" fill="url(#brassGrad)" />
            <circle cx="35" cy="56" r="4.5" fill="url(#brassGrad)" />

            {/* Stem & Central Beads */}
            <rect x="33.5" y="60" width="3" height="12" fill="url(#brassGrad)" />
            <ellipse cx="35" cy="73" rx="5" ry="3" fill="url(#brassGrad)" />

            {/* Oil Bowl / Thatte (Deep vessel for oil) */}
            <path d="M22 80 C22 75, 48 75, 48 80 L44 87 L26 87 Z" fill="url(#brassGrad)" />
            <ellipse cx="35" cy="80" rx="13" ry="2.5" fill="#755716" />
            <ellipse cx="35" cy="79.5" rx="11" ry="1.8" fill="#996515" />

            {/* Lower Base & Drip Pendant */}
            <path d="M31 87 L39 87 L36 93 L34 93 Z" fill="url(#brassGrad)" />
            <circle cx="35" cy="96" r="3.2" fill="url(#brassGrad)" />
            <path d="M35 99 L36.5 106 L33.5 106 Z" fill="url(#brassGrad)" />

            {/* Soft Glowing Aura behind Flame */}
            <circle cx="35" cy="74" r="16" fill="url(#lampFlameGlow)" className="animate-pulse" />

            {/* Sacred Diya Flame (Flickering gentle flame) */}
            <path 
              d="M35 66 C32 72, 33 76, 35 77 C37 76, 38 72, 35 66 Z" 
              fill="#FFC107" 
            />
            <path 
              d="M35 69 C33.8 73, 34.2 75.5, 35 76 C35.8 75.5, 36.2 73, 35 69 Z" 
              fill="#FFFFFF" 
            />
          </svg>
        </div>

        {/* ========================================================================= */}
        {/* 5. CARD CONTENT - GENEROUS SPACING, STRONG CONTRAST, LUXURY TYPOGRAPHY    */}
        {/* ========================================================================= */}
        <div className="relative z-10 flex flex-col justify-between h-full pt-16 sm:pt-20 pb-3 px-2 sm:px-4 text-center">

          {/* SECTION 1: INVITATION HEADER & WEDDING CEREMONY OF */}
          <div className="space-y-1">
            <p className="font-serif italic text-xs sm:text-sm md:text-base text-[#2B2B2B] tracking-wide font-medium">
              We cordially invite you to attend the
            </p>

            <h2 className="font-script text-4xl sm:text-5xl md:text-6xl text-[#7A1F2B] font-bold leading-none py-1 sm:py-2 drop-shadow-sm">
              Wedding
            </h2>

            <p className="font-sans text-[11px] sm:text-xs md:text-sm uppercase tracking-[0.25em] text-[#C9A227] font-bold">
              Ceremony of
            </p>
          </div>

          {/* SECTION 2: BRIDE & GROOM WITH 3D GOLD INTERLOCKING RINGS EMBLEM */}
          <div className="my-2 sm:my-3 py-1 sm:py-2">
            <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap">
              
              {/* Bride Name */}
              <div className="flex-1 min-w-[130px] text-right">
                <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2B2B2B] font-bold tracking-tight leading-tight">
                  Abhirami
                </h1>
                <span className="block text-[11px] sm:text-xs font-serif uppercase tracking-widest text-[#7A1F2B] font-semibold mt-0.5">
                  S L
                </span>
              </div>

              {/* Gold Interlocking Rings Emblem */}
              <div className="shrink-0 px-1 py-1 filter drop-shadow">
                <svg width="44" height="40" viewBox="0 0 54 48" fill="none">
                  <defs>
                    <linearGradient id="ringGoldFoil1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#FFF9D2" />
                      <stop offset="35%" stopColor="#E5B83B" />
                      <stop offset="70%" stopColor="#C9A227" />
                      <stop offset="100%" stopColor="#755716" />
                    </linearGradient>
                    <linearGradient id="ringGoldFoil2" x1="100%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FFF9D2" />
                      <stop offset="35%" stopColor="#E5B83B" />
                      <stop offset="70%" stopColor="#C9A227" />
                      <stop offset="100%" stopColor="#755716" />
                    </linearGradient>
                  </defs>
                  {/* Left Ring */}
                  <ellipse cx="20" cy="24" rx="15" ry="17" fill="none" stroke="url(#ringGoldFoil1)" strokeWidth="4.5" />
                  <ellipse cx="20" cy="24" rx="12.5" ry="14.5" fill="none" stroke="#5E4003" strokeWidth="0.8" opacity="0.6" />

                  {/* Right Ring */}
                  <ellipse cx="34" cy="24" rx="15" ry="17" fill="none" stroke="url(#ringGoldFoil2)" strokeWidth="4.5" />
                  <ellipse cx="34" cy="24" rx="12.5" ry="14.5" fill="none" stroke="#5E4003" strokeWidth="0.8" opacity="0.6" />

                  {/* Interlock Overlap */}
                  <path d="M26 12 C29 15, 29 20, 26 24" stroke="url(#ringGoldFoil1)" strokeWidth="4.5" strokeLinecap="round" />
                </svg>
              </div>

              {/* Groom Name */}
              <div className="flex-1 min-w-[130px] text-left">
                <h1 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2B2B2B] font-bold tracking-tight leading-tight">
                  Ajeesh
                </h1>
                <span className="block text-[11px] sm:text-xs font-serif uppercase tracking-widest text-[#C9A227] font-semibold mt-0.5">
                  R
                </span>
              </div>

            </div>
          </div>

          {/* SECTION 3: DATE BLOCK (SUNDAY | 24 | JANUARY 2027) & MUHURTHAM */}
          <div className="my-1 sm:my-2 py-2 px-3 sm:px-6 rounded-xl bg-white/70 border border-[#C9A227]/40 shadow-sm max-w-md mx-auto w-full">
            
            {/* 3-Column Clean Calendar Date Block */}
            <div className="flex items-center justify-center gap-3 sm:gap-6 py-1">
              
              {/* Day Column */}
              <div className="flex-1 text-right">
                <span className="font-serif text-sm sm:text-base md:text-lg font-bold text-[#2B2B2B] uppercase tracking-wider block">
                  Sunday
                </span>
              </div>

              {/* Vertical Gold Divider */}
              <div className="h-9 sm:h-11 w-[1.5px] bg-[#C9A227]/70" />

              {/* Center Prominent Date in Deep Maroon */}
              <div className="shrink-0 leading-none px-1">
                <span className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-[#7A1F2B] tracking-tight block">
                  24
                </span>
              </div>

              {/* Vertical Gold Divider */}
              <div className="h-9 sm:h-11 w-[1.5px] bg-[#C9A227]/70" />

              {/* Month & Year Column */}
              <div className="flex-1 text-left">
                <span className="font-serif text-sm sm:text-base md:text-lg font-bold text-[#2B2B2B] uppercase tracking-wider block leading-tight">
                  January
                </span>
                <span className="font-serif text-xs sm:text-sm font-semibold text-[#7A1F2B] block">
                  2027
                </span>
              </div>

            </div>

            {/* Muhurtham & Malayalam Star Date (High Contrast & Clear) */}
            <div className="mt-2 pt-1.5 border-t border-[#C9A227]/30 flex flex-col items-center">
              <p className="font-serif text-xs sm:text-sm md:text-base font-bold text-[#2B2B2B]">
                Muhurtham: <span className="text-[#7A1F2B] font-bold">10:05 AM – 10:50 AM</span>
              </p>
              <p className="font-serif text-[11px] sm:text-xs text-[#2B2B2B]/80 font-medium italic mt-0.5">
                (10 Makaram 1202) • Morning Reception at 9:30 AM
              </p>
            </div>

          </div>

          {/* SECTION 4: GOLD ORNAMENTAL DIVIDER */}
          <div className="my-1.5 flex items-center justify-center gap-2 text-[#C9A227]">
            <span className="h-[1px] w-12 sm:w-16 bg-[#C9A227]/70"></span>
            <span className="text-xs sm:text-sm font-serif">❖ ── ✦ ── ❖</span>
            <span className="h-[1px] w-12 sm:w-16 bg-[#C9A227]/70"></span>
          </div>

          {/* SECTION 5: MAIN WEDDING CEREMONY VENUE */}
          <div className="space-y-0.5 max-w-lg mx-auto">
            <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#C9A227] font-bold">
              VENUE:
            </p>
            <h3 className="font-serif text-base sm:text-xl md:text-2xl font-bold text-[#7A1F2B] leading-snug">
              Sivagiri Sarada Mutt
            </h3>
            <p className="font-serif text-xs sm:text-sm text-[#2B2B2B] font-medium">
              Varkala, Thiruvananthapuram, Kerala
            </p>
          </div>

          {/* SECTION 6: EVENING RECEPTION (DEDICATED BOXED SECTION - NEVER MISSED!) */}
          <div className="my-2 p-2.5 sm:p-3 rounded-xl bg-gradient-to-r from-[#FAF4DC] via-[#FFFDF9] to-[#FAF4DC] border-2 border-[#C9A227] shadow-sm max-w-md mx-auto w-full text-center">
            <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#7A1F2B] text-white text-[9px] sm:text-[10px] font-sans font-bold uppercase tracking-widest mb-1">
              <Sparkles className="w-3 h-3 text-[#E5C158]" />
              <span>Evening Reception</span>
            </div>
            <p className="font-serif text-xs sm:text-sm md:text-base font-bold text-[#2B2B2B]">
              4:30 PM onwards at <span className="text-[#7A1F2B] underline decoration-[#C9A227] underline-offset-2">Harizon Plaza, Alamcode</span>
            </p>
          </div>

          {/* SECTION 7: CONTACT NUMBER & MAP QR CODE (DIGITAL ENHANCEMENT) */}
          <div className="pt-1 flex items-center justify-between gap-2 max-w-md mx-auto w-full text-left">
            
            {/* Contact Details */}
            <div className="flex-1">
              <div className="flex items-center gap-1.5 text-xs sm:text-sm font-sans font-bold text-[#2B2B2B]">
                <Phone className="w-3.5 h-3.5 text-[#7A1F2B]" />
                <span>Contact: 9048728981 / 9048728978</span>
              </div>
              <p className="font-serif text-[11px] sm:text-xs text-[#2B2B2B]/75 italic mt-0.5">
                K. Sanjayan & Leena. R (Kunnuvila Veedu, Attingal)
              </p>
            </div>

            {/* Google Maps QR Code Thumbnail */}
            <a
              href="https://maps.app.goo.gl/1GZLNi8eUNfY3Eu67"
              target="_blank"
              rel="noopener noreferrer"
              title="Tap or Scan for Google Maps Navigation"
              className="shrink-0 flex items-center gap-1.5 p-1 rounded-lg bg-white border border-[#C9A227]/50 shadow-sm hover:scale-105 transition-transform"
            >
              <img
                src="/maps-qr.svg"
                alt="Scan for Location QR"
                className="w-10 h-10 sm:w-11 sm:h-11 object-contain rounded"
              />
              <div className="hidden sm:block text-[9px] font-sans font-bold text-[#7A1F2B] uppercase leading-tight pr-1">
                <span>Map</span>
                <span className="block text-[#2B2B2B]">QR</span>
              </div>
            </a>

          </div>

        </div>

        {/* ========================================================================= */}
        {/* 6. SUBTLE KASAVU (GOLD-AND-CREAM) BORDER STRIP ALONG BOTTOM EDGE          */}
        {/* ========================================================================= */}
        <div className="absolute bottom-0 left-0 right-0 h-4 sm:h-5 bg-[#FAF6EE] border-t border-[#C9A227] overflow-hidden pointer-events-none flex items-center">
          {/* Kasavu Gold Zari Weave Ribbon Pattern */}
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
          {/* Maroon Piping Line */}
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-[#7A1F2B]" />
        </div>

      </div>

      {/* QUICK ACTIONS UNDER CARD (WHEN SHOWN IN MODAL OR STANDALONE) */}
      {showActions && (
        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <a
            href={googleCalendarUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#7A1F2B] hover:bg-[#9E1B47] text-white text-xs sm:text-sm font-bold shadow-md hover:scale-105 transition-all"
          >
            <Calendar className="w-4 h-4" />
            <span>Add to Calendar</span>
          </a>

          <a
            href="https://maps.app.goo.gl/1GZLNi8eUNfY3Eu67"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border-2 border-[#C9A227] text-[#2B2B2B] hover:bg-[#FAF4DC] text-xs sm:text-sm font-bold shadow-sm hover:scale-105 transition-all"
          >
            <Navigation className="w-4 h-4 text-[#C9A227]" />
            <span>Directions to Sivagiri</span>
          </a>

          <a
            href="https://maps.google.com/?q=Harizon+Plaza+Alamcode+Attingal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#7A1F2B]/40 text-[#7A1F2B] hover:bg-wedding-pink-50 text-xs sm:text-sm font-bold shadow-sm hover:scale-105 transition-all"
          >
            <MapPin className="w-4 h-4 text-[#7A1F2B]" />
            <span>Reception Venue Map</span>
          </a>
        </div>
      )}

    </div>
  );
}
