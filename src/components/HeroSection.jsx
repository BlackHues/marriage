import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Heart, BookOpen, Sparkles, Navigation, Phone } from 'lucide-react';

export default function HeroSection({ onOpenCardModal, onScrollToSection }) {
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
      {/* 1. TOP HERO BANNER (MATCHING REFERENCE THEME & SPLIT LAYOUT ON PC)        */}
      {/* ========================================================================= */}
      <div className="relative w-full min-h-[600px] md:min-h-[680px] lg:min-h-[760px] bg-gradient-to-r from-[#F6E6E1] via-[#FAF0ED] to-[#FDF5F2] border-b border-[#E8D7D3] overflow-hidden flex items-center">
        
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
        <div className="relative z-20 max-w-[1440px] 2xl:max-w-[1500px] w-full mx-auto px-4 sm:px-8 lg:px-14 py-10 sm:py-14 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* ------------------------------------------------------------- */}
            {/* LEFT SIDE: COUPLE ARTWORK SEAMLESSLY BLENDED (NO BOX / FRAME)  */}
            {/* ------------------------------------------------------------- */}
            <div className="lg:col-span-6 xl:col-span-5 flex justify-center lg:justify-end items-center">
              <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl flex items-center justify-center">
                
                {/* Soft Watercolor Halo behind Couple */}
                <div className="absolute -inset-8 bg-gradient-to-tr from-[#E8B8AE]/35 via-[#F7D8D0]/45 to-transparent rounded-full blur-3xl pointer-events-none" />

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
                    className="w-full h-auto max-h-[540px] sm:max-h-[640px] lg:max-h-[720px] object-cover object-top mx-auto"
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
              <div className="my-2 sm:my-3">
                <h1 className="font-serif italic text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-[6.5rem] text-[#7A1F2B] font-normal leading-[1.05] tracking-wide drop-shadow-sm select-none">
                  Abhirami
                </h1>
                
                <div className="font-serif italic text-2xl sm:text-3xl md:text-4xl text-[#A66E5E] my-1 sm:my-2 font-normal">
                  &
                </div>

                <h1 className="font-serif italic text-5xl sm:text-7xl md:text-8xl lg:text-[5.5rem] xl:text-[6.5rem] text-[#7A1F2B] font-normal leading-[1.05] tracking-wide drop-shadow-sm select-none">
                  Ajeesh
                </h1>
              </div>

              {/* Date in Clean Serif */}
              <p className="font-serif text-lg sm:text-xl md:text-2xl text-[#2B2B2B] font-semibold tracking-wide mt-4 mb-2">
                January 24, 2027
              </p>

              {/* Romantic Invitation Quote (Exactly Matching Reference Sentiment) */}
              <p className="font-serif italic text-sm sm:text-base md:text-lg text-[#523F3C] max-w-lg mx-auto leading-relaxed px-2 font-medium">
                "With hearts full of love, we invite you to join us as we begin our forever."
              </p>

              {/* COUNTING DOWN TO FOREVER (SECTION HEADER) */}
              <div id="countdown" className="mt-8 mb-3 scroll-mt-20">
                <span className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.25em] text-[#8C665D] font-bold block">
                  Counting Down To Forever
                </span>
              </div>

              {/* SLEEK INTEGRATED COUNTDOWN BOX (EXACTLY MATCHING REFERENCE TIMER) */}
              <div className="w-full max-w-sm sm:max-w-md bg-white/90 backdrop-blur-md rounded-2xl border border-[#DFC8C2] shadow-lg p-3 sm:p-5 my-2">
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
      {/* 2. INVITATION & CEREMONY DETAILS (BELOW TOP HERO BANNER)                   */}
      {/* ========================================================================= */}
      <div className="max-w-[1440px] 2xl:max-w-[1500px] mx-auto px-4 sm:px-8 lg:px-12 py-12 text-center">
        
        {/* Subtle Decorative Golden Divider */}
        <div className="mb-8 flex items-center justify-center gap-3">
          <span className="h-[1px] w-20 sm:w-36 bg-gradient-to-r from-transparent via-[#C9A227] to-[#C9A227]" />
          <Sparkles className="w-4 h-4 text-[#C9A227]" />
          <span className="h-[1px] w-20 sm:w-36 bg-gradient-to-l from-transparent via-[#C9A227] to-[#C9A227]" />
        </div>

        {/* Formal Invitation & Both Families */}
        <div className="mb-6 px-4 max-w-4xl mx-auto">
          <p className="text-base sm:text-lg md:text-xl text-neutral-800 font-serif italic mb-6 leading-relaxed max-w-2xl mx-auto">
            Solicit your gracious presence & blessings on the auspicious occasion of the wedding ceremony of
          </p>

          {/* BRIDE & GROOM DETAILS (EXACT SAME STYLE SIDE-BY-SIDE) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 max-w-4xl xl:max-w-5xl mx-auto my-4 text-center">
            
            {/* THE BRIDE CARD */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white/90 border-2 border-[#C9A227]/60 shadow-sm flex flex-col justify-between transition-transform hover:-translate-y-0.5">
              <div>
                <span className="inline-block text-xs font-sans uppercase tracking-[0.25em] text-[#7A1F2B] font-bold px-3.5 py-1 rounded-full bg-[#7A1F2B]/10 mb-3">
                  The Bride
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2B2B2B] leading-tight">
                  Abhirami S L
                </h3>
                <div className="mt-3.5 pt-3.5 border-t border-[#C9A227]/30 space-y-1">
                  <p className="text-sm sm:text-base font-serif font-semibold text-[#7A1F2B]">
                    D/o. Mr. K. Sanjayan & Mrs. Leena. R
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-700 font-serif">
                    Kunnuvila Veedu, Chathanpara, Thottakkadu P.O, Attingal
                  </p>
                  <p className="text-xs text-neutral-500 font-sans font-medium pt-1">
                    Mob: 9048728978 / 9048728981
                  </p>
                </div>
              </div>
            </div>

            {/* THE GROOM CARD */}
            <div className="p-6 sm:p-7 rounded-2xl bg-white/90 border-2 border-[#C9A227]/60 shadow-sm flex flex-col justify-between transition-transform hover:-translate-y-0.5">
              <div>
                <span className="inline-block text-xs font-sans uppercase tracking-[0.25em] text-[#C9A227] font-bold px-3.5 py-1 rounded-full bg-[#C9A227]/10 mb-3">
                  The Groom
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold text-[#2B2B2B] leading-tight">
                  Ajeesh R
                </h3>
                <div className="mt-3.5 pt-3.5 border-t border-[#C9A227]/30 space-y-1">
                  <p className="text-sm sm:text-base font-serif font-semibold text-[#7A1F2B]">
                    S/o. Mr. Reghunathan. S & Mrs. Ushakumari. S
                  </p>
                  <p className="text-xs sm:text-sm text-neutral-700 font-serif">
                    Thrayambakam, Parakkulam, Thottakkadu P.O
                  </p>
                  <p className="text-xs text-neutral-500 font-sans font-medium pt-1">
                    Kunnuvila Veedu & Family
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Date & Muhurtham Highlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl xl:max-w-5xl mx-auto my-6 text-left">
          
          {/* Date Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-wedding-gold-300 shadow-sm flex items-center gap-4 transition-transform hover:-translate-y-0.5">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-wedding-pink-100 border border-wedding-pink-300 flex flex-col items-center justify-center text-[#7A1F2B] shrink-0">
              <span className="text-xs uppercase font-bold leading-none">Jan</span>
              <span className="text-2xl sm:text-3xl font-bold leading-tight font-sans">24</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-[#7A1F2B] font-bold text-xs uppercase tracking-wider">
                <Calendar className="w-4 h-4" />
                <span>Auspicious Wedding Date</span>
              </div>
              <p className="font-serif text-neutral-900 font-bold text-lg sm:text-xl">
                Sunday, 24 January 2027
              </p>
              <p className="text-xs sm:text-sm text-neutral-600 font-serif font-medium">
                (10 Makaram 1202)
              </p>
            </div>
          </div>

          {/* Muhurtham Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border-2 border-wedding-gold-300 shadow-sm flex items-center gap-4 transition-transform hover:-translate-y-0.5">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-wedding-gold-100 border border-wedding-gold-300 flex flex-col items-center justify-center text-wedding-gold-800 shrink-0">
              <Clock className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-wedding-gold-700 font-bold text-xs uppercase tracking-wider">
                <span>Auspicious Muhurtham</span>
              </div>
              <p className="font-serif text-neutral-900 font-bold text-lg sm:text-xl">
                Between 10.05 am & 10.50 am
              </p>
              <p className="text-xs sm:text-sm text-neutral-600 font-serif font-medium">
                Morning Reception at 9.30 am
              </p>
            </div>
          </div>

        </div>

        {/* Venues Summary Cards */}
        <div className="my-6 max-w-4xl xl:max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
          {/* Ceremony Venue */}
          <div className="p-5 rounded-2xl bg-white border-2 border-wedding-gold-300 shadow-sm flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-wedding-pink-100 text-[#7A1F2B] flex items-center justify-center shrink-0 mt-0.5">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#7A1F2B] block">
                1. Wedding Ceremony & Muhurtham
              </span>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-neutral-900 mt-0.5">
                Sivagiri Sarada Mutt, Varkala
              </h4>
              <p className="text-xs sm:text-sm text-neutral-700 font-serif mt-1">
                Morning Reception at 9:30 AM • Muhurtham 10:05 AM – 10:50 AM
              </p>
            </div>
          </div>

          {/* Evening Reception Dedicated Box (Highlighted) */}
          <div className="p-5 rounded-2xl bg-gradient-to-r from-[#FAF4DC] via-white to-[#FAF4DC] border-2 border-[#C9A227] shadow-sm flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-wedding-gold-200 text-[#7A1F2B] flex items-center justify-center shrink-0 mt-0.5">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#7A1F2B] block">
                2. Evening Reception & Dinner
              </span>
              <h4 className="font-serif text-lg sm:text-xl font-bold text-neutral-900 mt-0.5">
                Harizon Plaza, Alamcode
              </h4>
              <p className="text-xs sm:text-sm text-[#2B2B2B] font-serif font-semibold mt-1">
                From 4:30 PM Onwards • With Family & Friends
              </p>
            </div>
          </div>
        </div>

        {/* Best Compliments */}
        <p className="text-xs sm:text-sm text-neutral-600 font-serif italic my-4">
          With best compliments from: <strong className="font-semibold text-neutral-800">Hayzen, Adithi, Adithya & Relatives</strong>
        </p>

        {/* Action Buttons to Explore Website */}
        <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
          <button
            onClick={() => onScrollToSection('guestbook')}
            className="flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-wedding-pink-500 to-wedding-pink-600 text-white font-bold shadow-md hover:shadow-pink-glow hover:scale-105 transition-all text-sm sm:text-base cursor-pointer"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>Send Your Wishes</span>
          </button>

          <button
            onClick={() => onScrollToSection('timeline')}
            className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-white border-2 border-wedding-gold-400 text-wedding-gold-800 font-bold shadow-sm hover:bg-wedding-gold-50 hover:scale-105 transition-all text-sm sm:text-base cursor-pointer"
          >
            <Clock className="w-4 h-4 text-wedding-gold-600" />
            <span>Ceremony Timeline</span>
          </button>

          <button
            onClick={onOpenCardModal}
            className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-wedding-ivory border border-neutral-300 text-neutral-800 font-bold shadow-sm hover:bg-white hover:border-wedding-gold-400 hover:scale-105 transition-all text-sm sm:text-base cursor-pointer"
          >
            <BookOpen className="w-4 h-4 text-wedding-gold-600" />
            <span>View Invitation Card (4:5 & Print)</span>
          </button>
        </div>

      </div>

    </section>
  );
}
