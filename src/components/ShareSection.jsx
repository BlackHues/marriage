import React, { useState } from 'react';
import { Share2, Copy, Check, MessageCircle, Heart } from 'lucide-react';

export default function ShareSection() {
  const [copied, setCopied] = useState(false);

  const shareText = 
    `💍 Wedding Invitation: Abhirami S L & Ajeesh R 🌸\n\n` +
    `Together with our families, we solicit your gracious presence & blessings on our wedding ceremony.\n\n` +
    `📅 Sunday, 24 January 2027 (10 Makaram 1202)\n` +
    `📍 Wedding Muhurtham: 10:05 AM – 10:50 AM at Sivagiri Sarada Mutt, Varkala\n` +
    `🎉 Evening Reception: 4:30 PM Onwards at Harizon Plaza, Alamcode\n\n` +
    `Tap to open our wedding invitation, get Google Maps directions & send your blessings:`;

  const handleCopy = () => {
    const url = window.location.href;
    navigator.clipboard.writeText(`${shareText}\n${url}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleWhatsApp = () => {
    const url = window.location.href;
    const whatsappUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(`${shareText}\n${url}`)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section className="py-12 px-4 sm:px-8 max-w-7xl xl:max-w-[1440px] 2xl:max-w-[1500px] mx-auto w-full">
      <div className="bg-gradient-to-r from-wedding-pink-100/90 via-wedding-ivory to-wedding-gold-100/90 rounded-3xl p-8 sm:p-12 border-2 border-wedding-gold-300 shadow-card-royal text-center relative overflow-hidden">
        
        <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-white border border-wedding-gold-300 text-wedding-gold-800 text-xs font-semibold uppercase tracking-wider mb-2">
          <Share2 className="w-3.5 h-3.5 text-wedding-gold-600" />
          <span>Spread The Joy</span>
        </div>

        <h3 className="font-serif text-2xl sm:text-3xl text-neutral-800 font-bold mb-2">
          Share With Friends & Family
        </h3>
        <p className="font-serif italic text-sm text-neutral-600 max-w-md mx-auto mb-6">
          Send this wedding countdown & digital invitation directly to friends so everyone can save the date!
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* WhatsApp Share Button */}
          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white" />
            <span>Share on WhatsApp</span>
          </button>

          {/* Copy Link Button */}
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-wedding-gold-400 text-neutral-800 hover:bg-wedding-gold-50 font-semibold text-xs sm:text-sm shadow-sm transition-all hover:scale-105 active:scale-95"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-700">Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-wedding-gold-600" />
                <span>Copy Invitation Link</span>
              </>
            )}
          </button>
        </div>

      </div>
    </section>
  );
}
