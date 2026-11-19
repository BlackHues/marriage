import React from 'react';
import { Clock, MapPin, Heart, Sparkles, Utensils, PartyPopper } from 'lucide-react';

export default function EventsTimeline() {
  const events = [
    {
      time: '09:30 AM',
      title: 'Morning Welcome & Guest Reception',
      venue: 'Sivagiri Sarada Mutt, Varkala',
      description: 'Warm welcome of families, close friends, and well-wishers with traditional Kerala hospitality and refreshments.',
      icon: Heart,
      accent: 'pink',
      badge: 'Arrival'
    },
    {
      time: '10:05 AM – 10:50 AM',
      title: 'Auspicious Wedding Muhurtham (താലികെട്ട്)',
      venue: 'Sivagiri Sarada Mutt, Varkala',
      description: 'The sacred wedding rites, exchange of floral garlands, and tying of the auspicious Thali amidst divine prayer chants.',
      icon: Sparkles,
      accent: 'gold',
      badge: 'Main Ceremony',
      highlight: true
    },
    {
      time: '11:30 AM Onwards',
      title: 'Traditional Wedding Sadhya (Grand Feast)',
      venue: 'Sivagiri Sarada Mutt Hall',
      description: 'Sumptuous traditional Kerala vegetarian Sadhya served on plantain leaves with classic payasams.',
      icon: Utensils,
      accent: 'pink',
      badge: 'Feast'
    },
    {
      time: '04:30 PM Onwards',
      title: 'Grand Evening Reception & Dinner',
      venue: 'Harizon Plaza, Alamcode',
      description: 'Joyous evening reception with music, laughter, photo sessions with the newlyweds, and celebratory dinner.',
      icon: PartyPopper,
      accent: 'gold',
      badge: 'Evening Celebration',
      highlight: true
    }
  ];

  return (
    <section id="timeline" className="py-12 px-4 sm:px-8 max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1500px] mx-auto w-full">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full bg-wedding-gold-100 border border-wedding-gold-300 text-wedding-gold-800 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
          <Clock className="w-4 h-4 text-wedding-gold-600" />
          <span>Order of Auspicious Events</span>
        </div>
        <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-neutral-800 font-semibold">
          Ceremony & Celebration Schedule
        </h3>
        <p className="font-serif italic text-base sm:text-lg text-neutral-600 mt-2 max-w-2xl mx-auto">
          Please join us throughout the day to shower your blessings on Abhirami & Ajeesh
        </p>
      </div>

      {/* TIMELINE LIST */}
      <div className="relative border-l-2 border-wedding-gold-300 ml-4 sm:ml-36 space-y-8 pb-4 max-w-4xl mx-auto">
        {events.map((event, index) => {
          const Icon = event.icon;
          return (
            <div key={index} className="relative pl-6 sm:pl-8 group">
              {/* Timeline marker icon */}
              <div
                className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-transform group-hover:scale-110 shadow-sm ${
                  event.highlight
                    ? 'bg-wedding-gold-500 border-white text-white shadow-gold-glow'
                    : 'bg-wedding-pink-100 border-wedding-pink-400 text-wedding-pink-600'
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>

              {/* Time display on the left for tablet/desktop */}
              <div className="hidden sm:block absolute -left-32 top-2.5 w-24 text-right">
                <span className="text-xs font-bold uppercase tracking-wider text-wedding-gold-700 font-sans block">
                  {event.time}
                </span>
              </div>

              {/* Event Details Card */}
              <div
                className={`p-5 rounded-2xl border transition-all duration-300 ${
                  event.highlight
                    ? 'bg-white/95 border-wedding-gold-400 shadow-card-royal'
                    : 'bg-white/75 border-neutral-200/90 hover:border-wedding-pink-300 hover:bg-white shadow-sm'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                        event.highlight
                          ? 'bg-wedding-gold-100 text-wedding-gold-800 border border-wedding-gold-300'
                          : 'bg-wedding-pink-100 text-wedding-pink-700 border border-wedding-pink-200'
                      }`}
                    >
                      {event.badge}
                    </span>
                    {/* Time for mobile */}
                    <span className="sm:hidden text-xs font-semibold text-wedding-gold-800">
                      • {event.time}
                    </span>
                  </div>
                </div>

                <h4 className="font-serif text-lg sm:text-xl font-bold text-neutral-800">
                  {event.title}
                </h4>

                <div className="flex items-center gap-1.5 text-xs text-neutral-600 mt-1 mb-2 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-wedding-pink-500 shrink-0" />
                  <span>{event.venue}</span>
                </div>

                <p className="text-xs sm:text-sm text-neutral-600 font-serif leading-relaxed">
                  {event.description}
                </p>
              </div>

            </div>
          );
        })}
      </div>
    </section>
  );
}
