import React, { useState, useEffect } from 'react';
import { Calendar, Download, Check, Sparkles } from 'lucide-react';

export default function CountdownTimer() {
  // Target: Jan 24, 2027 10:05 AM IST
  const targetTime = new Date('2027-01-24T10:05:00+05:30').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isCompleted: false
  });

  const [downloaded, setDownloaded] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isCompleted: true
        });
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

  // Google Calendar Link generator
  const getGoogleCalendarUrl = () => {
    const title = encodeURIComponent("Wedding Ceremony: Abhirami & Ajeesh");
    const details = encodeURIComponent(
      "Auspicious Wedding Ceremony of Abhirami S L with Ajeesh R.\n\n" +
      "Muhurtham: 10:05 am - 10:50 am\n" +
      "Morning Reception: 9:30 am\n" +
      "Venue: Sivagiri Sarada Mutt, Varkala\n\n" +
      "Evening Reception: 4:30 pm onwards at Harizon Plaza, Alamcode\n" +
      "Contact: 9048728978"
    );
    const location = encodeURIComponent("Sivagiri Sarada Mutt, Varkala, Kerala");
    // Start: 2027-01-24 10:05 AM IST = 20270124T043500Z
    // End: 2027-01-24 15:00 PM IST = 20270124T093000Z
    const dates = "20270124T043500Z/20270124T153000Z";
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${details}&location=${location}&dates=${dates}`;
  };

  // Download .ics file for Apple Calendar / Outlook
  const downloadIcsFile = () => {
    const icsContent = 
`BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Abhirami & Ajeesh Wedding//EN
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:Wedding: Abhirami S L & Ajeesh R
DESCRIPTION:Auspicious Wedding Ceremony of Abhirami with Ajeesh.\\nMorning Reception: 9:30 AM\\nMuhurtham: 10:05 AM - 10:50 AM at Sivagiri Sarada Mutt, Varkala.\\nEvening Reception: 4:30 PM at Harizon Plaza, Alamcode.
LOCATION:Sivagiri Sarada Mutt, Varkala, Kerala
DTSTART:20270124T043500Z
DTEND:20270124T153000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Abhirami-Ajeesh-Wedding.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  const timerUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <section id="countdown" className="py-12 px-4 sm:px-8 max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1500px] mx-auto w-full">
      <div className="bg-gradient-to-b from-white/95 via-wedding-pink-50/70 to-white/95 rounded-3xl p-6 sm:p-12 border-2 border-wedding-gold-300 shadow-card-royal text-center relative overflow-hidden">
        
        {/* Subtle decorative background watermarks */}
        <div className="absolute -top-10 -right-10 w-60 h-60 bg-wedding-pink-200/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-60 h-60 bg-wedding-gold-200/30 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-5 py-1.5 rounded-full bg-wedding-pink-100 border border-wedding-pink-200 text-wedding-pink-700 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4 text-wedding-gold-600" />
            <span>Counting Every Precious Moment</span>
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-neutral-800 font-semibold mb-3">
            Countdown to The Sacred Muhurtham
          </h3>
          <p className="font-serif italic text-base sm:text-lg text-neutral-600 mb-10 max-w-xl mx-auto">
            "Two souls, one heart, walking together into a forever journey of love and joy."
          </p>

          {/* TIMER BLOCKS (SPACIOUS FULL WIDTH GRID ON PC) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            {timerUnits.map((unit, idx) => (
              <div
                key={idx}
                className="relative bg-white rounded-3xl p-5 sm:p-8 border-2 border-wedding-gold-300 shadow-lg flex flex-col items-center justify-center transition-transform hover:-translate-y-1.5 hover:shadow-gold-glow duration-300"
              >
                {/* Top golden notch */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1.5 rounded-full bg-wedding-gold-400 opacity-60" />

                <div className="font-sans text-4xl sm:text-6xl md:text-7xl font-bold text-neutral-800 tracking-tight my-2">
                  {String(unit.value).padStart(2, '0')}
                </div>
                <div className="text-xs sm:text-sm font-bold uppercase tracking-widest text-wedding-pink-600 font-sans">
                  {unit.label}
                </div>
              </div>
            ))}
          </div>

          {/* Timezone reference notice */}
          <p className="text-[11px] text-neutral-400 mt-4 font-serif">
            Time calculated towards 10:05 AM IST on Sunday, 24th January 2027
          </p>

          {/* ADD TO CALENDAR ACTIONS */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={getGoogleCalendarUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-wedding-gold-400 text-neutral-800 text-xs sm:text-sm font-medium hover:bg-wedding-gold-50 shadow-sm hover:shadow transition-all"
            >
              <Calendar className="w-4 h-4 text-wedding-pink-500" />
              <span>Add to Google Calendar</span>
            </a>

            <button
              onClick={downloadIcsFile}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-neutral-300 text-neutral-700 text-xs sm:text-sm font-medium hover:bg-neutral-50 shadow-sm hover:shadow transition-all"
            >
              {downloaded ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Calendar File (.ics) Saved!</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-wedding-gold-600" />
                  <span>Download Calendar (.ics)</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
