import React from 'react';
import { Phone, Users, Home, Heart, Sparkles } from 'lucide-react';

export default function FamilySection() {
  return (
    <section className="py-12 px-4 sm:px-8 max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1500px] mx-auto w-full">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-1.5 px-5 py-1.5 rounded-full bg-wedding-gold-100 border border-wedding-gold-300 text-wedding-gold-800 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-3">
          <Users className="w-4 h-4 text-wedding-gold-600" />
          <span>With Gracious Blessings</span>
        </div>
        <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-neutral-800 font-semibold">
          The Families
        </h3>
        <p className="font-serif italic text-base sm:text-lg text-neutral-600 mt-2 max-w-2xl mx-auto">
          Warmly inviting you to share in our family's most joyous milestone
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        {/* BRIDE'S FAMILY */}
        <div className="bg-white/90 rounded-3xl p-6 sm:p-7 border-2 border-wedding-pink-200 shadow-md relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-24 h-24 bg-wedding-pink-100/40 rounded-bl-full pointer-events-none" />

          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-wedding-pink-100 text-wedding-pink-700 border border-wedding-pink-200">
              Bride's Parents
            </span>

            <h4 className="font-serif text-2xl font-bold text-neutral-800 mt-3">
              K. Sanjayan & Leena. R
            </h4>

            <div className="mt-4 space-y-2 text-xs sm:text-sm text-neutral-600">
              <div className="flex items-start gap-2.5">
                <Home className="w-4 h-4 text-wedding-pink-500 shrink-0 mt-0.5" />
                <span>
                  Kunnuvila Veedu, Chathanpara, Thottakkadu P.O, Attingal.
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-wedding-pink-500 shrink-0" />
                <span className="font-semibold text-neutral-800">+91 90487 28978</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-100">
            <a
              href="tel:9048728978"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-wedding-pink-50 border border-wedding-pink-300 hover:bg-wedding-pink-100 text-wedding-pink-700 text-xs sm:text-sm font-semibold transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Bride's Family (9048728978)</span>
            </a>
          </div>
        </div>

        {/* GROOM'S FAMILY */}
        <div className="bg-white/90 rounded-3xl p-6 sm:p-7 border-2 border-wedding-gold-200 shadow-md relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-24 h-24 bg-wedding-gold-100/40 rounded-bl-full pointer-events-none" />

          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-wedding-gold-100 text-wedding-gold-800 border border-wedding-gold-200">
              Groom's Parents
            </span>

            <h4 className="font-serif text-2xl font-bold text-neutral-800 mt-3">
              Mr. Reghunathan. S & Mrs. Ushakumari. S
            </h4>

            <div className="mt-4 space-y-2 text-xs sm:text-sm text-neutral-600">
              <div className="flex items-start gap-2.5">
                <Home className="w-4 h-4 text-wedding-gold-600 shrink-0 mt-0.5" />
                <span>
                  Thrayambakam, Parakkulam, Thottakkadu P.O
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-neutral-100">
            <div className="py-2.5 px-3 rounded-xl bg-wedding-gold-50/70 border border-wedding-gold-200 text-center text-xs text-wedding-gold-800 font-medium">
              Awaiting your gracious presence & blessings
            </div>
          </div>
        </div>
      </div>

      {/* WITH BEST COMPLIMENTS */}
      <div className="mt-8 p-6 rounded-3xl bg-gradient-to-r from-wedding-pink-50 via-white to-wedding-gold-50 border border-wedding-gold-300 text-center shadow-sm">
        <p className="text-xs font-serif italic text-neutral-500 uppercase tracking-widest">
          With Best Compliments From
        </p>
        <p className="font-serif text-lg sm:text-xl font-bold text-wedding-gold-900 mt-1">
          Hayzen, Adithi, Adithya & Relatives
        </p>
        <div className="flex items-center justify-center gap-1.5 mt-2 text-wedding-pink-500">
          <Heart className="w-3.5 h-3.5 fill-current" />
          <Heart className="w-3.5 h-3.5 fill-current" />
          <Heart className="w-3.5 h-3.5 fill-current" />
        </div>
      </div>
    </section>
  );
}
