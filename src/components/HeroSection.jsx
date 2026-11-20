import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Heart, 
  Sparkles, 
  Crown, 
  SunMedium, 
  Landmark, 
  UtensilsCrossed, 
  ArrowLeft,
  ArrowRight, 
  Flower2 
} from 'lucide-react';

export default function HeroSection({ onOpenCardModal, onScrollToSection, bridePhoto, groomPhoto }) {
  // Target: Jan 24, 2027 10:05 AM IST
  const targetTime = new Date('2027-01-24T10:05:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true });
      } else {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds, isCompleted: false });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetTime]);

  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    'Wedding: Abhirami & Ajeesh 💍'
  )}&dates=20270124T043500Z/20270124T153000Z&details=${encodeURIComponent(
    'Auspicious Wedding Ceremony of Abhirami S L with Ajeesh R.\n\nMuhurtham: 10:05 am - 10:50 am\nMorning Reception: 9:30 am\nVenue: Sivagiri Sarada Mutt, Varkala\n\nEvening Reception: 4:30 pm onwards at Harizon Plaza, Alamcode\nContact: 9048728981'
  )}&location=${encodeURIComponent('Sivagiri Sarada Mutt, Varkala, Kerala')}`;

  return (
    <section className="relative w-full overflow-hidden">
      
      {/* ========================================================================= */}
      {/* 1. TOP HERO BANNER (FULL VIEWPORT HEIGHT: 100vh / 100dvh)                 */}
      {/* ========================================================================= */}
      <div className="relative w-full min-h-screen min-h-[100dvh] bg-gradient-to-r from-[#F6E6E1] via-[#FAF0ED] to-[#FDF5F2] border-b border-[#E8D7D3] overflow-hidden flex flex-col justify-center items-center">
        
        {/* Soft Watercolor Washes & Atmospheric Cloud Textures */}
        <div 
          className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply"
          style={{
            backgroundImage: `radial-gradient(ellipse at 25% 40%, #EFCFC7 0%, transparent 60%), radial-gradient(ellipse at 75% 60%, #F5DDD6 0%, transparent 65%)`
          }}
        />

        {/* DELICATE WATERCOLOR BOTANICALS IN CORNERS (EXACTLY LIKE REFERENCE) */}
        {/* Top-Left Watercolor Floral Sprig */}
        <div className="absolute top-0 left-0 w-44 sm:w-60 md:w-72 h-44 sm:h-60 md:h-72 pointer-events-none z-10 opacity-85">
          <svg viewBox="0 0 240 240" fill="none" className="w-full h-full">
            <defs>
              <linearGradient id="blushPetal1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#DF9387" />
                <stop offset="60%" stopColor="#EBB5AB" />
                <stop offset="100%" stopColor="#F9E2DD" />
              </linearGradient>
              <linearGradient id="leafTerracotta" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#A87A6E" />
                <stop offset="100%" stopColor="#CDA59A" />
              </linearGradient>
            </defs>
            {/* Elegant botanical branches */}
            <path d="M-20 -20 Q40 60 70 140" stroke="#9A7064" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M-10 10 Q60 50 140 70" stroke="#9A7064" strokeWidth="1.2" strokeLinecap="round" />
            
            {/* Watercolor Leaves */}
            <path d="M25 45 C45 35, 65 50, 55 65 C40 65, 20 55, 25 45 Z" fill="url(#leafTerracotta)" opacity="0.85" />
            <path d="M60 70 C85 60, 105 80, 90 95 C75 95, 50 85, 60 70 Z" fill="url(#leafTerracotta)" opacity="0.8" />
            <path d="M50 25 C70 10, 90 25, 80 40 C65 40, 45 30, 50 25 Z" fill="url(#leafTerracotta)" opacity="0.75" />
            <path d="M85 45 C110 35, 125 55, 110 70 C95 70, 75 60, 85 45 Z" fill="url(#leafTerracotta)" opacity="0.8" />
            <path d="M30 95 C45 85, 65 100, 55 115 C40 115, 25 105, 30 95 Z" fill="url(#leafTerracotta)" opacity="0.75" />
            <path d="M65 130 C85 120, 100 135, 90 150 C75 150, 55 140, 65 130 Z" fill="url(#leafTerracotta)" opacity="0.7" />

            {/* Watercolor Blossom Flower */}
            <g transform="translate(42, 68)">
              <circle cx="0" cy="0" r="16" fill="url(#blushPetal1)" opacity="0.9" />
              <circle cx="-6" cy="-6" r="13" fill="url(#blushPetal1)" opacity="0.85" />
              <circle cx="6" cy="-6" r="13" fill="url(#blushPetal1)" opacity="0.85" />
              <circle cx="7" cy="7" r="13" fill="url(#blushPetal1)" opacity="0.85" />
              <circle cx="-7" cy="7" r="13" fill="url(#blushPetal1)" opacity="0.85" />
              <circle cx="0" cy="0" r="5" fill="#7A3F33" opacity="0.7" />
              <circle cx="0" cy="0" r="2.5" fill="#C9A227" />
            </g>
          </svg>
        </div>

        {/* Top-Right Watercolor Leafy Sprig */}
        <div className="absolute top-0 right-0 w-44 sm:w-60 md:w-72 h-44 sm:h-60 md:h-72 pointer-events-none z-10 opacity-80 scale-x-[-1]">
          <svg viewBox="0 0 240 240" fill="none" className="w-full h-full">
            <path d="M-20 -20 Q50 60 90 150" stroke="#9A7064" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M-10 10 Q70 45 160 65" stroke="#9A7064" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M30 45 C55 35, 75 50, 65 65 C45 65, 25 55, 30 45 Z" fill="url(#leafTerracotta)" opacity="0.85" />
            <path d="M70 70 C95 60, 115 80, 100 95 C80 95, 60 85, 70 70 Z" fill="url(#leafTerracotta)" opacity="0.8" />
            <path d="M60 25 C85 10, 105 25, 90 40 C75 40, 55 30, 60 25 Z" fill="url(#leafTerracotta)" opacity="0.75" />
            <path d="M100 45 C125 35, 140 55, 125 70 C105 70, 90 60, 100 45 Z" fill="url(#leafTerracotta)" opacity="0.8" />
            <path d="M40 100 C60 90, 75 105, 65 120 C50 120, 35 110, 40 100 Z" fill="url(#leafTerracotta)" opacity="0.7" />
          </svg>
        </div>

        {/* Bottom-Left Watercolor Sprig */}
        <div className="absolute bottom-0 left-0 w-32 sm:w-44 h-32 sm:h-44 pointer-events-none z-10 opacity-60 scale-y-[-1]">
          <svg viewBox="0 0 160 160" fill="none" className="w-full h-full">
            <path d="M-10 -10 Q35 40 60 100" stroke="#9A7064" strokeWidth="1.2" />
            <path d="M20 30 C38 22, 52 35, 45 45 C32 45, 18 38, 20 30 Z" fill="url(#leafTerracotta)" opacity="0.8" />
            <path d="M45 50 C65 42, 80 55, 70 65 C55 65, 40 58, 45 50 Z" fill="url(#leafTerracotta)" opacity="0.75" />
          </svg>
        </div>

        {/* 2-COLUMN FULL-WIDTH RESPONSIVE CONTAINER (1200-1500px ON PC) */}
        <div className="relative z-20 max-w-[1440px] 2xl:max-w-[1500px] w-full mx-auto px-4 sm:px-8 lg:px-14 py-6 sm:py-8 my-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* ------------------------------------------------------------- */}
            {/* LEFT SIDE: COUPLE ARTWORK SEAMLESSLY BLENDED (NO BOX / FRAME)  */}
            {/* ------------------------------------------------------------- */}
            <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl flex items-center justify-center">
                
                {/* Soft Romantic Ambient Halo behind Couple */}
                <div className="absolute -inset-10 bg-gradient-to-tr from-[#E8B8AE]/40 via-[#F7D8D0]/50 to-transparent rounded-full blur-3xl pointer-events-none" />

                {/* Royal Kerala Stage Mandap Arch Outline (Behind Couple) */}
                <div className="absolute -inset-3 sm:-inset-5 border border-[#C9A227]/35 rounded-t-[140px] pointer-events-none" />
                <div className="absolute -inset-1.5 sm:-inset-2.5 border border-[#E5C158]/25 rounded-t-[130px] pointer-events-none" />

                {/* Hanging Kerala Brass Lamp (Thookkuvilakku) on Left */}
                <div className="absolute -top-6 -left-3 sm:-left-6 w-10 sm:w-14 pointer-events-none z-20 opacity-90">
                  <svg viewBox="0 0 60 160" fill="none" className="w-full h-auto drop-shadow-sm">
                    {/* Golden Chain */}
                    <line x1="30" y1="0" x2="30" y2="75" stroke="#C9A227" strokeWidth="1.5" strokeDasharray="3 2" />
                    {/* Lamp Crown */}
                    <polygon points="30,75 22,85 38,85" fill="#C9A227" />
                    {/* Lamp Bowl (Agal) */}
                    <ellipse cx="30" cy="94" rx="16" ry="5" fill="#D4AF37" />
                    <path d="M14 94 Q30 108 46 94 Z" fill="#B8860B" />
                    {/* Glowing Wick Flame */}
                    <path d="M30 87 Q33 81 30 74 Q27 81 30 87 Z" fill="#FFB703" />
                    <circle cx="30" cy="81" r="2.5" fill="#FFE8A3" />
                    {/* Bottom Drop Bell */}
                    <circle cx="30" cy="112" r="3.5" fill="#C9A227" />
                    {/* Gentle Warm Glow */}
                    <circle cx="30" cy="80" r="12" fill="#FFB703" opacity="0.35" filter="blur(4px)" />
                  </svg>
                </div>

                {/* Cascading Jasmine (Mulla Poo) & Floral Drapes (Top Right) */}
                <div className="absolute -top-4 -right-2 sm:-right-4 w-16 sm:w-20 pointer-events-none z-20 opacity-85">
                  <svg viewBox="0 0 80 120" fill="none" className="w-full h-auto">
                    {/* Jasmine Strands */}
                    <path d="M40 0 Q45 40 50 90" stroke="#FFFDF9" strokeWidth="3" strokeDasharray="5 4" strokeLinecap="round" />
                    <path d="M55 0 Q58 35 62 80" stroke="#FAF4DC" strokeWidth="2.5" strokeDasharray="4 3" strokeLinecap="round" />
                    {/* Delicate Pink Rose Accent */}
                    <circle cx="48" cy="25" r="7" fill="#F47293" opacity="0.85" />
                    <circle cx="48" cy="25" r="4" fill="#FBCFE8" />
                    <circle cx="56" cy="50" r="6" fill="#F47293" opacity="0.8" />
                  </svg>
                </div>

                {/* Borderless Feathered Couple Image (Blends 100% Seamlessly with Page) */}
                <div 
                  className="relative w-full transition-transform duration-700 hover:scale-[1.01]"
                  style={{
                    maskImage: 'radial-gradient(ellipse 92% 92% at 50% 50%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.85) 76%, rgba(0,0,0,0.35) 88%, transparent 100%)',
                    WebkitMaskImage: 'radial-gradient(ellipse 92% 92% at 50% 50%, rgba(0,0,0,1) 60%, rgba(0,0,0,0.85) 76%, rgba(0,0,0,0.35) 88%, transparent 100%)',
                  }}
                >
                  <img
                    src="/couple.jpg"
                    alt="Abhirami & Ajeesh"
                    className="w-full h-auto max-h-[460px] sm:max-h-[520px] md:max-h-[580px] lg:max-h-[66vh] object-cover object-top mx-auto"
                  />

                  {/* Soft bottom edge gradient melt into page */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#F6E6E1] via-[#F6E6E1]/60 to-transparent pointer-events-none" />
                </div>

              </div>
            </div>

            {/* ------------------------------------------------------------- */}
            {/* RIGHT SIDE: GRAND NAMES, QUOTE & INTEGRATED COUNTDOWN TIMER    */}
            {/* ------------------------------------------------------------- */}
            <div className="lg:col-span-6 xl:col-span-7 text-center flex flex-col items-center justify-center px-2 sm:px-6">
              
              {/* Couple Names in Luxurious Italic Serif Calligraphy (Like Reference) */}
              <div className="my-1 sm:my-2">
                <h1 className="font-serif italic text-4xl sm:text-6xl md:text-7xl lg:text-[4.8rem] xl:text-[5.6rem] text-[#7A1F2B] font-normal leading-[1.05] tracking-wide drop-shadow-sm select-none">
                  Abhirami
                </h1>
                
                <div className="font-serif italic text-xl sm:text-2xl md:text-3xl text-[#A66E5E] my-0.5 sm:my-1 font-normal">
                  &
                </div>

                <h1 className="font-serif italic text-4xl sm:text-6xl md:text-7xl lg:text-[4.8rem] xl:text-[5.6rem] text-[#7A1F2B] font-normal leading-[1.05] tracking-wide drop-shadow-sm select-none">
                  Ajeesh
                </h1>
              </div>

              {/* Date in Clean Serif */}
              <p className="font-serif text-base sm:text-lg md:text-xl text-[#2B2B2B] font-semibold tracking-wide mt-2 mb-1">
                January 24, 2027
              </p>

              {/* Romantic Invitation Quote (Exactly Matching Reference Sentiment) */}
              <p className="font-serif italic text-xs sm:text-sm md:text-base text-[#523F3C] max-w-lg mx-auto leading-relaxed px-2 font-medium">
                "With hearts full of love, we invite you to join us as we begin our forever."
              </p>

              {/* COUNTING DOWN TO FOREVER (SECTION HEADER) */}
              <div id="countdown" className="mt-4 sm:mt-5 mb-1.5 scroll-mt-20">
                <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#8C665D] font-bold block">
                  Counting Down To Forever
                </span>
              </div>

              {/* SLEEK INTEGRATED COUNTDOWN BOX (EXACTLY MATCHING REFERENCE TIMER) */}
              <div className="w-full max-w-sm sm:max-w-md bg-white/90 backdrop-blur-md rounded-2xl border border-[#DFC8C2] shadow-lg p-3 sm:p-4 my-1">
                <div className="grid grid-cols-4 divide-x divide-[#DFC8C2]">
                  
                  {/* Days */}
                  <div className="flex flex-col items-center px-2 py-1">
                    <span className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[#7A1F2B] leading-none">
                      {String(timeLeft.days).padStart(2, '0')}
                    </span>
                    <span className="font-sans text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-[#6B5A56] mt-2">
                      Days
                    </span>
                  </div>

                  {/* Hours */}
                  <div className="flex flex-col items-center px-2 py-1">
                    <span className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[#7A1F2B] leading-none">
                      {String(timeLeft.hours).padStart(2, '0')}
                    </span>
                    <span className="font-sans text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-[#6B5A56] mt-2">
                      Hours
                    </span>
                  </div>

                  {/* Minutes */}
                  <div className="flex flex-col items-center px-2 py-1">
                    <span className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[#7A1F2B] leading-none">
                      {String(timeLeft.minutes).padStart(2, '0')}
                    </span>
                    <span className="font-sans text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-[#6B5A56] mt-2">
                      Minutes
                    </span>
                  </div>

                  {/* Seconds */}
                  <div className="flex flex-col items-center px-2 py-1">
                    <span className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold text-[#7A1F2B] leading-none">
                      {String(timeLeft.seconds).padStart(2, '0')}
                    </span>
                    <span className="font-sans text-[9px] sm:text-[10px] uppercase font-bold tracking-widest text-[#6B5A56] mt-2">
                      Seconds
                    </span>
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>

      </div>

      {/* ========================================================================= */}
      {/* 2. WEDDING INVITATION SECTION (PREMIUM ROYAL KERALA REDESIGN)             */}
      {/* ========================================================================= */}
      <div 
        id="invitation-details" 
        className="wedding-invite-theme relative z-10 max-w-[1440px] 2xl:max-w-[1500px] w-full mx-auto px-4 sm:px-8 lg:px-14 py-14 sm:py-16 text-center scroll-mt-6"
      >
        {/* Scoped CSS Variables and Prefers-Reduced-Motion Animations */}
        <style>{`
          .wedding-invite-theme {
            --color-maroon: #7A1F3D;
            --color-maroon-dark: #631730;
            --color-gold: #C9A24B;
            --color-gold-light: #E8D399;
            --color-charcoal: #2B2B2B;
            --color-muted: #6B6B6B;
            --font-heading: 'Cormorant Garamond', 'Playfair Display', Georgia, serif;
            --font-body: 'Inter', 'Montserrat', system-ui, sans-serif;
          }
          @keyframes cardFadeUp {
            from {
              opacity: 0;
              transform: translateY(14px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          @media (prefers-reduced-motion: no-preference) {
            .card-fade-up {
              animation: cardFadeUp 0.5s ease-out both;
            }
          }
          @media (prefers-reduced-motion: reduce) {
            .card-fade-up {
              opacity: 1 !important;
              transform: none !important;
              animation: none !important;
            }
          }
        `}</style>
        
        {/* Subtle Decorative Golden Header Divider with Central Lotus Motif */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <span className="h-[1px] w-20 sm:w-36 bg-gradient-to-r from-transparent via-[#C9A24B] to-[#C9A24B]" />
          <svg width="26" height="22" viewBox="0 0 28 24" fill="none" className="text-[#C9A24B] shrink-0" aria-hidden="true">
            <path d="M14 2C14 2 10.5 8.5 10.5 13C10.5 15.5 12 17.5 14 17.5C16 17.5 17.5 15.5 17.5 13C17.5 8.5 14 2 14 2Z" fill="#C9A24B" />
            <path d="M14 7.5C14 7.5 8 10 7 14.5C6.5 17 8.5 19 11 18.5C12.5 18 13.5 16 14 14.5" stroke="#C9A24B" strokeWidth="1.2" strokeLinecap="round" />
            <path d="M14 7.5C14 7.5 20 10 21 14.5C21.5 17 19.5 19 17 18.5C15.5 18 14.5 16 14 14.5" stroke="#C9A24B" strokeWidth="1.2" strokeLinecap="round" />
            <circle cx="14" cy="20.5" r="1.5" fill="#7A1F3D" />
          </svg>
          <span className="h-[1px] w-20 sm:w-36 bg-gradient-to-l from-transparent via-[#C9A24B] to-[#C9A24B]" />
        </div>

        {/* Formal Invitation Heading & Subtitle */}
        <div className="mb-8 px-2 max-w-2xl mx-auto">
          <h2 className="text-[11px] sm:text-[12px] font-sans uppercase tracking-[0.2em] text-[#7A1F3D] font-semibold block mb-2">
            Wedding Invitation
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#2B2B2B] font-serif italic leading-relaxed">
            Solicit your gracious presence &amp; blessings on the auspicious occasion of the wedding ceremony of
          </p>
        </div>

        {/* ===================================================================== */}
        {/* ROW: THE BRIDE & THE GROOM (SAME ROW WITH CONTENTS INSIDE PICTURE)    */}
        {/* ===================================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch mb-9 sm:mb-10 text-left">
          
          {/* ========================================== */}
          {/* 1. THE BRIDE CARD (CONTENTS INSIDE PIC)    */}
          {/* ========================================== */}
          <div 
            className="card-fade-up relative z-10 w-full min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] rounded-3xl overflow-hidden border border-[#C9A24B]/40 shadow-[0_12px_40px_rgba(122,31,61,0.12)] flex flex-col justify-between p-4 sm:p-6 lg:p-7 group transition-all duration-300 hover:shadow-2xl hover:border-[#C9A24B]"
            style={{ animationDelay: '0ms' }}
          >
            {/* Background Picture */}
            <img 
              src={bridePhoto || "/bride-editorial.jpg"} 
              alt="The Bride - Abhirami S L" 
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 pointer-events-none"
            />
            
            {/* Multi-stop Cinematic Scrim Over Picture */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/45 pointer-events-none" />
            <div className="absolute inset-0 bg-[#2B0E14]/15 mix-blend-color pointer-events-none" />

            {/* Top Index Over Picture */}
            <div className="relative z-10 flex items-center justify-end">
              <span className="font-serif italic text-3xl sm:text-4xl text-white/90 drop-shadow-md select-none font-light">
                01.
              </span>
            </div>

            {/* Bottom Frosted Glass Card Containing Bride Details */}
            <div className="relative z-10 w-full bg-[#FAF6EE]/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 lg:p-7 border border-[#C9A24B]/45 shadow-xl transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
              {/* Corner Watermark */}
              <svg viewBox="0 0 100 100" fill="none" className="w-24 h-24 absolute -bottom-3 -right-3 pointer-events-none opacity-[0.06] text-[#7A1F3D]" aria-hidden="true">
                <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1" />
                <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 3" />
                <circle cx="100" cy="100" r="20" stroke="currentColor" strokeWidth="1" />
                <path d="M100 20 C70 40 40 70 20 100" stroke="currentColor" strokeWidth="1.2" />
                <path d="M100 40 C80 55 55 80 40 100" stroke="currentColor" strokeWidth="1" />
              </svg>

              <div className="relative z-10">
                {/* Bride Name */}
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold text-[#2B2B2B] leading-tight tracking-wide mb-0.5">
                  Abhirami S L
                </h3>
                <p className="font-serif italic text-xs sm:text-sm text-[#7A1F3D] font-medium mb-3">
                  Bride
                </p>

                {/* Clear Hierarchy: Parents > Address > Phone */}
                <div className="pt-3 border-t border-[#C9A24B]/35 space-y-2.5">
                  {/* Parents Line */}
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C9A24B] font-semibold block mb-0.5">
                      Parents
                    </span>
                    <p className="text-[13px] sm:text-[14px] font-sans font-medium text-[#7A1F3D] leading-[1.6]">
                      D/o. Mr. K. Sanjayan &amp; Mrs. Leena. R
                    </p>
                  </div>

                  {/* Address Line */}
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C9A24B] font-semibold block mb-0.5">
                      Residence
                    </span>
                    <p className="text-[13px] sm:text-[14px] font-sans text-[#595959] leading-[1.6] flex items-start gap-1.5">
                      <MapPin className="w-4 h-4 text-[#C9A24B] shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span>Kunnuvila Veedu, Chathanpara, Thottakkadu P.O, Attingal</span>
                    </p>
                  </div>

                  {/* Phone Line */}
                  <div className="pt-0.5">
                    <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C9A24B] font-semibold block mb-0.5">
                      Contact
                    </span>
                    <p className="text-[13px] sm:text-[14px] font-sans text-[#2B2B2B] font-medium leading-[1.6] flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#C9A24B] shrink-0" strokeWidth={1.5} />
                      <span>
                        Mob: <a href="tel:9048728978" className="hover:text-[#7A1F3D] underline-offset-2 hover:underline">9048728978</a> / <a href="tel:9048728981" className="hover:text-[#7A1F3D] underline-offset-2 hover:underline">9048728981</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================== */}
          {/* 2. THE GROOM CARD (CONTENTS INSIDE PIC)    */}
          {/* ========================================== */}
          <div 
            className="card-fade-up relative z-10 w-full min-h-[580px] sm:min-h-[620px] lg:min-h-[660px] rounded-3xl overflow-hidden border border-[#C9A24B]/40 shadow-[0_12px_40px_rgba(122,31,61,0.12)] flex flex-col justify-between p-4 sm:p-6 lg:p-7 group transition-all duration-300 hover:shadow-2xl hover:border-[#C9A24B]"
            style={{ animationDelay: '100ms' }}
          >
            {/* Background Picture */}
            <img 
              src={groomPhoto || "/groom-editorial.jpg"} 
              alt="The Groom - Ajeesh R" 
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105 pointer-events-none"
            />
            
            {/* Multi-stop Cinematic Scrim Over Picture */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/45 pointer-events-none" />
            <div className="absolute inset-0 bg-[#2B0E14]/15 mix-blend-color pointer-events-none" />

            {/* Top Index Over Picture */}
            <div className="relative z-10 flex items-center justify-end">
              <span className="font-serif italic text-3xl sm:text-4xl text-white/90 drop-shadow-md select-none font-light">
                02.
              </span>
            </div>

            {/* Bottom Frosted Glass Card Containing Groom Details */}
            <div className="relative z-10 w-full bg-[#FAF6EE]/95 backdrop-blur-md rounded-2xl p-5 sm:p-6 lg:p-7 border border-[#C9A24B]/45 shadow-xl transition-all duration-300 group-hover:-translate-y-1 overflow-hidden">
              {/* Corner Watermark */}
              <svg viewBox="0 0 100 100" fill="none" className="w-24 h-24 absolute -bottom-3 -right-3 pointer-events-none opacity-[0.06] text-[#7A1F3D]" aria-hidden="true">
                <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1" />
                <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 3" />
                <circle cx="100" cy="100" r="20" stroke="currentColor" strokeWidth="1" />
                <path d="M100 20 C70 40 40 70 20 100" stroke="currentColor" strokeWidth="1.2" />
                <path d="M100 40 C80 55 55 80 40 100" stroke="currentColor" strokeWidth="1" />
              </svg>

              <div className="relative z-10">
                {/* Groom Name */}
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] font-semibold text-[#2B2B2B] leading-tight tracking-wide mb-0.5">
                  Ajeesh R
                </h3>
                <p className="font-serif italic text-xs sm:text-sm text-[#7A1F3D] font-medium mb-3">
                  Groom
                </p>

                {/* Clear Hierarchy: Parents > Address > Phone */}
                <div className="pt-3 border-t border-[#C9A24B]/35 space-y-2.5">
                  {/* Parents Line */}
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C9A24B] font-semibold block mb-0.5">
                      Parents
                    </span>
                    <p className="text-[13px] sm:text-[14px] font-sans font-medium text-[#7A1F3D] leading-[1.6]">
                      S/o. Mr. Reghunathan. S &amp; Mrs. Ushakumari. S
                    </p>
                  </div>

                  {/* Address Line */}
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C9A24B] font-semibold block mb-0.5">
                      Residence
                    </span>
                    <p className="text-[13px] sm:text-[14px] font-sans text-[#595959] leading-[1.6] flex items-start gap-1.5">
                      <MapPin className="w-4 h-4 text-[#C9A24B] shrink-0 mt-0.5" strokeWidth={1.5} />
                      <span>Thrayambakam, Parakkulam, Thottakkadu P.O</span>
                    </p>
                  </div>

                  {/* Phone Line */}
                  <div className="pt-0.5">
                    <span className="text-[10px] font-sans uppercase tracking-[0.2em] text-[#C9A24B] font-semibold block mb-0.5">
                      Contact
                    </span>
                    <p className="text-[13px] sm:text-[14px] font-sans text-[#2B2B2B] font-medium leading-[1.6] flex items-center gap-1.5">
                      <Phone className="w-3.5 h-3.5 text-[#C9A24B] shrink-0" strokeWidth={1.5} />
                      <span>
                        Mob: <a href="tel:9745585098" className="hover:text-[#7A1F3D] underline-offset-2 hover:underline">9745585098</a> / <a href="tel:8921867169" className="hover:text-[#7A1F3D] underline-offset-2 hover:underline">8921867169</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* ===================================================================== */}
        {/* WEDDING VENUES & CELEBRATIONS (PERFECTLY ALIGNED SPLIT SHOWCASE)     */}
        {/* ===================================================================== */}
        <div id="venues" className="my-10 sm:my-14 scroll-mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7 items-stretch">

            {/* LEFT FEATURED HERO CARD (lg:col-span-5) */}
            <div 
              className="lg:col-span-5 card-fade-up relative z-10 rounded-3xl overflow-hidden bg-gradient-to-br from-[#2D0A14] via-[#4A1521] to-[#1A050A] p-6 sm:p-7 lg:p-8 text-left flex flex-col justify-between shadow-[0_12px_40px_rgba(122,31,61,0.22)] border border-[#C9A24B]/40 group h-full"
              style={{ animationDelay: '150ms' }}
            >
              {/* Background atmospheric image texture / subtle overlay */}
              <div 
                className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none bg-cover bg-center transition-transform duration-1000 group-hover:scale-105"
                style={{ backgroundImage: `url('/venue-ceremony.jpg')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A050A]/95 via-[#2D0A14]/75 to-[#1A050A]/90 pointer-events-none" />

              {/* Traditional Kerala Kasavu Gold Ribbon Border along Top & Bottom */}
              <div 
                className="absolute top-0 left-0 right-0 h-1.5 border-b border-[#C9A24B]/50 pointer-events-none z-10"
                style={{
                  backgroundImage: `
                    linear-gradient(to bottom, #C9A24B 1px, transparent 1px, transparent 2px, #E5C158 2px, #E5C158 4px, transparent 4px),
                    repeating-linear-gradient(45deg, #C9A24B 0, #C9A24B 2px, transparent 2px, transparent 6px)
                  `,
                  backgroundSize: '100% 4px, 6px 6px'
                }}
              />
              <div 
                className="absolute bottom-0 left-0 right-0 h-1.5 border-t border-[#C9A24B]/50 pointer-events-none z-10"
                style={{
                  backgroundImage: `
                    linear-gradient(to bottom, #C9A24B 1px, transparent 1px, transparent 2px, #E5C158 2px, #E5C158 4px, transparent 4px),
                    repeating-linear-gradient(45deg, #C9A24B 0, #C9A24B 2px, transparent 2px, transparent 6px)
                  `,
                  backgroundSize: '100% 4px, 6px 6px'
                }}
              />

              {/* Decorative Corner Watermark */}
              <svg viewBox="0 0 100 100" fill="none" className="w-32 h-32 absolute -bottom-4 -right-4 pointer-events-none opacity-10 text-[#C9A24B]" aria-hidden="true">
                <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
                <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1" />
                <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 3" />
                <circle cx="100" cy="100" r="20" stroke="currentColor" strokeWidth="1" />
                <path d="M100 20 C70 40 40 70 20 100" stroke="currentColor" strokeWidth="1.2" />
                <path d="M100 40 C80 55 55 80 40 100" stroke="currentColor" strokeWidth="1" />
              </svg>

              {/* Top Section: Eyebrow + Main Title */}
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="w-5 h-px bg-[#C9A24B]" />
                  <span className="text-[11px] sm:text-[12px] font-sans uppercase tracking-[0.25em] text-[#E5C158] font-semibold">
                    Celebrate Our Wedding
                  </span>
                </div>
                
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.5rem] font-semibold text-white leading-[1.2] tracking-wide mb-3">
                  Two Sacred Venues, <br className="hidden sm:inline" />
                  <span className="text-[#F6E3B4] italic font-normal">One Auspicious Celebration</span>
                </h3>

                <p className="font-serif italic text-sm sm:text-[15px] text-white/80 leading-relaxed max-w-md">
                  Solicit your gracious presence &amp; blessings on the auspicious occasion of our wedding ceremony and evening reception.
                </p>
              </div>

              {/* Bottom Section: Auspicious Date & Muhurtham Glass Badge */}
              <div className="relative z-10 mt-6 pt-5 border-t border-[#C9A24B]/30">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-4.5 border border-[#C9A24B]/40 shadow-inner">
                  <div className="flex items-center gap-2 text-[10.5px] uppercase tracking-[0.2em] text-[#E5C158] font-semibold mb-1">
                    <Calendar className="w-3.5 h-3.5 text-[#C9A24B]" strokeWidth={1.5} />
                    <span>Auspicious Wedding Day</span>
                  </div>
                  <h4 className="font-serif text-2xl sm:text-[1.65rem] font-semibold text-white tracking-wide">
                    Sunday, 24 January 2027
                  </h4>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[13px] font-sans text-white/85 mt-2">
                    <span className="text-white/70">10 Makaram 1202</span>
                    <span className="text-[#C9A24B]" aria-hidden="true">•</span>
                    <span className="inline-flex items-center gap-1.5 text-[#F6E3B4] font-medium">
                      <SunMedium className="w-3.5 h-3.5 text-[#C9A24B]" strokeWidth={1.5} />
                      <span>Muhurtham: <strong className="text-white font-semibold">10:05 AM – 10:50 AM</strong></span>
                    </span>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT VENUE CARDS: CONJOINED CHECKERBOARD RECTANGLES (lg:col-span-7) */}
            <div 
              className="lg:col-span-7 card-fade-up relative z-10 rounded-3xl overflow-hidden border border-[#C9A24B]/40 shadow-[0_12px_40px_rgba(122,31,61,0.12)] bg-gradient-to-b from-white to-[#FAF6EE] h-full"
              style={{ animationDelay: '250ms' }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 h-full divide-y md:divide-y-0 md:divide-x divide-[#C9A24B]/35">

                {/* LEFT CONJOINED RECTANGLE: WEDDING CEREMONY (IMAGE TOP, DETAILS BOTTOM) */}
                <div className="flex flex-col h-full justify-between">
                  {/* Top: Ceremony Photo */}
                  <div className="relative w-full h-52 sm:h-56 md:h-1/2 md:basis-1/2 overflow-hidden bg-neutral-100 group border-b border-[#C9A24B]/30">
                    <img 
                      src="/venue-ceremony.jpg" 
                      alt="Wedding Ceremony - Sivagiri Sarada Mutt, Varkala" 
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Bottom: Ceremony Details */}
                  <div className="p-5 sm:p-6 lg:p-7 flex-1 md:basis-1/2 flex flex-col justify-between text-left bg-gradient-to-b from-[#FFFDF9] to-[#FAF6EE]">
                    <div>
                      {/* Gold Accent Dash */}
                      <div className="w-8 h-0.5 bg-[#C9A24B] mb-2.5" />

                      {/* Editorial Category Label */}
                      <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#7A1F3D] font-semibold block mb-1">
                        Wedding Ceremony
                      </span>
                      
                      {/* Venue Title */}
                      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#2B2B2B] leading-tight mb-3.5">
                        Sivagiri Sarada Mutt, Varkala
                      </h3>

                      {/* Details */}
                      <div className="space-y-2.5 text-[13px] font-sans">
                        <div className="flex items-start gap-2.5 text-[#7A1F3D]">
                          <SunMedium className="w-4 h-4 text-[#C9A24B] shrink-0 mt-0.5" strokeWidth={1.5} />
                          <div>
                            <span className="text-[10px] font-sans uppercase tracking-wider text-[#C9A24B] font-semibold block">Auspicious Muhurtham</span>
                            <span className="text-[14px] font-semibold text-[#7A1F3D] whitespace-nowrap">10:05 AM – 10:50 AM</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2.5 text-[#2B2B2B]">
                          <Clock className="w-4 h-4 text-[#C9A24B] shrink-0 mt-0.5" strokeWidth={1.5} />
                          <div>
                            <span className="text-[10px] font-sans uppercase tracking-wider text-[#C9A24B] font-semibold block">Morning Reception</span>
                            <span className="text-[13px] text-[#2B2B2B] font-medium">From 9:30 AM Onwards</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Google Maps Button */}
                    <div className="mt-5 pt-3.5 border-t border-[#C9A24B]/20">
                      <a
                        href="https://maps.app.goo.gl/1GZLNi8eUNfY3Eu67"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Sivagiri Sarada Mutt, Varkala on Google Maps and get directions"
                        className="w-full min-h-[42px] px-4 py-2 rounded-full border border-[#C9A24B] text-[#7A1F3D] bg-white hover:bg-[#7A1F3D] hover:border-[#7A1F3D] hover:text-white transition-all duration-200 inline-flex items-center justify-between shadow-xs group/btn"
                      >
                        <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-sans font-semibold tracking-wide">
                          <MapPin className="w-3.5 h-3.5 text-[#C9A24B] group-hover/btn:text-white transition-colors" strokeWidth={1.5} />
                          <span>Google Maps &amp; Directions</span>
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 shrink-0 group-hover/btn:translate-x-0.5 transition-transform" strokeWidth={1.5} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* RIGHT CONJOINED RECTANGLE: EVENING RECEPTION (REVERSED: DETAILS TOP, IMAGE BOTTOM) */}
                <div className="flex flex-col h-full justify-between">
                  {/* Top: Reception Details (REVERSED ON DESKTOP) */}
                  <div className="order-2 md:order-1 p-5 sm:p-6 lg:p-7 flex-1 md:basis-1/2 flex flex-col justify-between text-left bg-gradient-to-b from-[#FFFDF9] to-[#FAF6EE] border-t md:border-t-0 md:border-b border-[#C9A24B]/30">
                    <div>
                      {/* Gold Accent Dash */}
                      <div className="w-8 h-0.5 bg-[#C9A24B] mb-2.5" />

                      {/* Editorial Category Label */}
                      <span className="text-[11px] font-sans uppercase tracking-[0.2em] text-[#7A1F3D] font-semibold block mb-1">
                        Evening Reception
                      </span>
                      
                      {/* Venue Title */}
                      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#2B2B2B] leading-tight mb-3.5">
                        Harizon Plaza, Alamcode
                      </h3>

                      {/* Details */}
                      <div className="space-y-2.5 text-[13px] font-sans">
                        <div className="flex items-start gap-2.5 text-[#7A1F3D]">
                          <Clock className="w-4 h-4 text-[#C9A24B] shrink-0 mt-0.5" strokeWidth={1.5} />
                          <div>
                            <span className="text-[10px] font-sans uppercase tracking-wider text-[#C9A24B] font-semibold block">Reception &amp; Dinner</span>
                            <span className="text-[14px] font-semibold text-[#7A1F3D] whitespace-nowrap">4:30 PM Onwards</span>
                          </div>
                        </div>
                        <div className="flex items-start gap-2.5 text-[#2B2B2B]">
                          <Sparkles className="w-4 h-4 text-[#C9A24B] shrink-0 mt-0.5" strokeWidth={1.5} />
                          <div>
                            <span className="text-[10px] font-sans uppercase tracking-wider text-[#C9A24B] font-semibold block">Celebration</span>
                            <span className="text-[13px] text-[#2B2B2B] font-medium">With Family, Relatives &amp; Friends</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Google Maps Button */}
                    <div className="mt-5 pt-3.5 border-t border-[#C9A24B]/20">
                      <a
                        href="https://maps.google.com/?q=Harizon+Plaza+Alamcode+Attingal"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="View Harizon Plaza, Alamcode on Google Maps and get directions"
                        className="w-full min-h-[42px] px-4 py-2 rounded-full border border-[#C9A24B] text-[#7A1F3D] bg-white hover:bg-[#7A1F3D] hover:border-[#7A1F3D] hover:text-white transition-all duration-200 inline-flex items-center justify-between shadow-xs group/btn"
                      >
                        <span className="inline-flex items-center gap-2 text-[12px] sm:text-[13px] font-sans font-semibold tracking-wide">
                          <MapPin className="w-3.5 h-3.5 text-[#C9A24B] group-hover/btn:text-white transition-colors" strokeWidth={1.5} />
                          <span>Google Maps &amp; Directions</span>
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 shrink-0 group-hover/btn:translate-x-0.5 transition-transform" strokeWidth={1.5} />
                      </a>
                    </div>
                  </div>

                  {/* Bottom: Reception Photo (REVERSED ON DESKTOP) */}
                  <div className="order-1 md:order-2 relative w-full h-52 sm:h-56 md:h-1/2 md:basis-1/2 overflow-hidden bg-neutral-100 group border-b md:border-b-0 border-[#C9A24B]/30">
                    <img 
                      src="/venue-reception.jpg" 
                      alt="Evening Reception - Harizon Plaza, Alamcode" 
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-transparent pointer-events-none" />
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>

        {/* ===================================================================== */}
        {/* FULL STRIP: REGAL ROYAL MAROON & GOLD FAMILY COMPLIMENTS BANNER       */}
        {/* ===================================================================== */}
        <div className="mt-12 sm:mt-16 w-full">
          <div className="card-fade-up relative z-10 w-full rounded-2xl sm:rounded-3xl bg-gradient-to-r from-[#24060E] via-[#481220] to-[#24060E] border border-[#C9A24B]/50 shadow-[0_14px_45px_rgba(72,18,32,0.28)] p-6 sm:p-9 md:p-10 text-center overflow-hidden group">
            
            {/* Background Atmosphere Texture & Soft Golden Shimmer */}
            <div 
              className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay bg-cover bg-center"
              style={{ backgroundImage: `url('/venue-reception.jpg')` }}
            />
            <div className="absolute inset-0 bg-radial-at-c from-white/10 via-transparent to-black/30 pointer-events-none" />

            {/* Traditional Kerala Kasavu Gold Ribbon Border along Top & Bottom */}
            <div 
              className="absolute top-0 left-0 right-0 h-1.5 border-b border-[#C9A24B]/60 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(to bottom, #C9A24B 1px, transparent 1px, transparent 2px, #E5C158 2px, #E5C158 4px, transparent 4px),
                  repeating-linear-gradient(45deg, #C9A24B 0, #C9A24B 2px, transparent 2px, transparent 6px)
                `,
                backgroundSize: '100% 4px, 6px 6px'
              }}
            />
            <div 
              className="absolute bottom-0 left-0 right-0 h-1.5 border-t border-[#C9A24B]/60 pointer-events-none"
              style={{
                backgroundImage: `
                  linear-gradient(to bottom, #C9A24B 1px, transparent 1px, transparent 2px, #E5C158 2px, #E5C158 4px, transparent 4px),
                  repeating-linear-gradient(45deg, #C9A24B 0, #C9A24B 2px, transparent 2px, transparent 6px)
                `,
                backgroundSize: '100% 4px, 6px 6px'
              }}
            />

            {/* Corner Filigree Watermarks */}
            <svg viewBox="0 0 100 100" fill="none" className="w-28 h-28 absolute -top-4 -left-4 pointer-events-none opacity-10 text-[#E5C158]" aria-hidden="true">
              <circle cx="0" cy="0" r="80" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
              <circle cx="0" cy="0" r="60" stroke="currentColor" strokeWidth="1" />
              <circle cx="0" cy="0" r="40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 3" />
              <circle cx="0" cy="0" r="20" stroke="currentColor" strokeWidth="1" />
            </svg>
            <svg viewBox="0 0 100 100" fill="none" className="w-28 h-28 absolute -bottom-4 -right-4 pointer-events-none opacity-10 text-[#E5C158]" aria-hidden="true">
              <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
              <circle cx="100" cy="100" r="60" stroke="currentColor" strokeWidth="1" />
              <circle cx="100" cy="100" r="40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 3" />
              <circle cx="100" cy="100" r="20" stroke="currentColor" strokeWidth="1" />
            </svg>

            <div className="relative z-10 flex flex-col items-center">
              {/* Header Label (Clean text without enclosing border/pill) */}
              <div className="inline-flex items-center gap-2 text-[11px] sm:text-[12px] font-sans uppercase tracking-[0.25em] font-semibold text-[#F6E3B4] mb-3">
                <span className="w-5 h-px bg-[#E5C158]/60" />
                <Sparkles className="w-3.5 h-3.5 text-[#E5C158]" strokeWidth={1.5} />
                <span>With Best Compliments &amp; Blessings</span>
                <Sparkles className="w-3.5 h-3.5 text-[#E5C158]" strokeWidth={1.5} />
                <span className="w-5 h-px bg-[#E5C158]/60" />
              </div>

              {/* Prominent & Majestic Names in Gold-White Typography */}
              <h4 className="font-serif text-2xl sm:text-4xl md:text-5xl font-semibold text-[#FFFDF9] tracking-wide my-2 drop-shadow-md">
                Hayzen, Adithi, Adithya &amp; Relatives
              </h4>

              {/* Decorative Golden Divider with Heart Center */}
              <div className="my-3 flex items-center justify-center gap-3 w-full max-w-sm">
                <span className="h-px flex-1 bg-gradient-to-r from-transparent via-[#C9A24B] to-[#C9A24B]" />
                <Heart className="w-4 h-4 text-[#E5C158] fill-[#E5C158]/20 shrink-0" strokeWidth={1.5} />
                <span className="h-px flex-1 bg-gradient-to-l from-transparent via-[#C9A24B] to-[#C9A24B]" />
              </div>

              {/* Heartfelt Blessing Line in Warm Rose-Gold */}
              <p className="font-serif italic text-sm sm:text-base md:text-lg text-[#F6E3B4]/90 max-w-2xl mx-auto leading-relaxed font-normal">
                "Wishing Abhirami &amp; Ajeesh a lifetime filled with boundless love, everlasting joy, and cherished togetherness."
              </p>
            </div>
          </div>
        </div>
</div>

    </section>
  );
}
