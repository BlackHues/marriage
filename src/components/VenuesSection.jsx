import React from 'react';
import { MapPin, Navigation, ExternalLink, QrCode } from 'lucide-react';

export default function VenuesSection() {
  const venues = [
    {
      id: 'sivagiri',
      name: 'Sivagiri Sarada Mutt, Varkala',
      tag: 'Morning Reception & Wedding Muhurtham',
      time: 'From 9:30 AM to 2:00 PM',
      address: 'Sivagiri Mutt Road, Varkala, Thiruvananthapuram District, Kerala 695141',
      landmark: 'Famous spiritual pilgrimage center sanctified by Sree Narayana Gurudev',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Sivagiri+Sarada+Mutt+Varkala',
      directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Sivagiri+Sarada+Mutt+Varkala',
      badgeColor: 'border-wedding-gold-300 bg-wedding-gold-50 text-wedding-gold-800',
      qrText: 'Scan for Sivagiri Sarada Mutt'
    },
    {
      id: 'harizon',
      name: 'Harizon Plaza, Alamcode',
      tag: 'Grand Evening Reception & Dinner',
      time: 'From 4:30 PM Onwards',
      address: 'Harizon Plaza, Alamcode, Attingal, Thiruvananthapuram District, Kerala 695102',
      landmark: 'Located conveniently on the main road in Alamcode, Attingal with spacious parking',
      mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Harizon+Plaza+Alamcode+Attingal',
      directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Harizon+Plaza+Alamcode+Attingal',
      badgeColor: 'border-wedding-pink-300 bg-wedding-pink-50 text-wedding-pink-800',
      qrText: 'Scan for Harizon Plaza'
    }
  ];

  return (
    <section id="venues" className="py-12 px-4 sm:px-8 max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1500px] mx-auto w-full">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full bg-wedding-pink-100 border border-wedding-pink-300 text-wedding-pink-700 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
          <MapPin className="w-4 h-4 text-wedding-gold-600" />
          <span>Locations & Navigation</span>
        </div>
        <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-neutral-800 font-semibold">
          Wedding Venues
        </h3>
        <p className="font-serif italic text-base sm:text-lg text-neutral-600 mt-2 max-w-2xl mx-auto">
          Easy turn-by-turn navigation links and QR codes to help friends reach each venue effortlessly
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {venues.map((venue) => (
          <div
            key={venue.id}
            className="bg-white/95 rounded-3xl p-6 sm:p-7 border-2 border-wedding-gold-300 shadow-card-royal flex flex-col justify-between transition-transform hover:-translate-y-1 duration-300 relative overflow-hidden"
          >
            {/* Top golden accent line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-wedding-pink-400 via-wedding-gold-400 to-wedding-pink-400" />

            <div>
              <div className="flex items-start justify-between gap-2 mb-3">
                <span className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${venue.badgeColor}`}>
                  {venue.tag}
                </span>
              </div>

              <h4 className="font-serif text-xl sm:text-2xl font-bold text-neutral-900 leading-snug">
                {venue.name}
              </h4>
              <p className="text-xs font-semibold text-wedding-gold-700 font-sans mt-1">
                ⏰ {venue.time}
              </p>

              <div className="mt-4 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200/80 text-xs text-neutral-600 space-y-1.5">
                <p className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-wedding-pink-500 shrink-0 mt-0.5" />
                  <span>{venue.address}</span>
                </p>
                <p className="text-[11px] text-neutral-500 italic pl-6">
                  {venue.landmark}
                </p>
              </div>

              {/* QR Code Quick Scan / Tap Box */}
              <div className="mt-4 p-3 rounded-2xl bg-wedding-pink-50/60 border border-wedding-gold-200 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="w-12 h-12 rounded-lg bg-white border border-wedding-gold-300 p-1 flex items-center justify-center shadow-sm shrink-0">
                    <img 
                      src="/maps-qr.svg" 
                      alt="Google Maps QR Code" 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-bold text-neutral-900">Direct Map QR</p>
                    <p className="text-xs text-neutral-600 font-medium">{venue.qrText}</p>
                  </div>
                </div>
                <a
                  href={venue.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-wedding-pink-600 font-semibold hover:underline flex items-center gap-1"
                >
                  <span>Open</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* ACTION BUTTONS */}
            <div className="grid grid-cols-2 gap-3 mt-6 pt-4 border-t border-neutral-100">
              <a
                href={venue.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-wedding-gold-500 hover:bg-wedding-gold-600 text-white text-xs font-semibold shadow-sm transition-all text-center"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Directions</span>
              </a>

              <a
                href={venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-white border border-wedding-gold-400 hover:bg-wedding-gold-50 text-wedding-gold-800 text-xs font-semibold shadow-sm transition-all text-center"
              >
                <ExternalLink className="w-3.5 h-3.5 text-wedding-gold-600" />
                <span>Google Maps</span>
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}
