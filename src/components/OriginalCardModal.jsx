import React, { useState } from 'react';
import { X, Download, Calendar, ExternalLink, Image, Heart } from 'lucide-react';
import KeralaWeddingCard from './KeralaWeddingCard';

export default function OriginalCardModal({ isOpen, onClose }) {
  const [activeTab, setActiveTab] = useState('digital'); // 'digital' or 'printed'

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md animate-fade-in overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border-2 border-wedding-gold-300 overflow-hidden flex flex-col my-auto max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="p-4 bg-gradient-to-r from-wedding-pink-100 via-white to-wedding-gold-100 border-b border-wedding-gold-300 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-[#7A1F2B] text-[#E5C158] flex items-center justify-center">
              <Heart className="w-4 h-4 fill-[#E5C158]" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-base sm:text-lg text-[#2B2B2B]">
                Wedding Invitation Card
              </h4>
              <p className="text-xs text-neutral-600 font-serif">
                Abhirami S L & Ajeesh R • Sunday, 24 Jan 2027
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="w-8 h-8 rounded-full bg-white/90 hover:bg-white text-neutral-700 flex items-center justify-center shadow-sm border border-neutral-200 transition-transform active:scale-90"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-neutral-200 bg-neutral-50 px-4 pt-2 gap-2">
          <button
            onClick={() => setActiveTab('digital')}
            className={`px-4 py-2 text-xs sm:text-sm font-serif font-bold border-b-2 transition-all ${
              activeTab === 'digital'
                ? 'border-[#7A1F2B] text-[#7A1F2B] bg-white rounded-t-lg shadow-sm'
                : 'border-transparent text-neutral-600 hover:text-neutral-900'
            }`}
          >
            Digital Invitation (4:5)
          </button>
          <button
            onClick={() => setActiveTab('printed')}
            className={`px-4 py-2 text-xs sm:text-sm font-serif font-bold border-b-2 transition-all ${
              activeTab === 'printed'
                ? 'border-[#7A1F2B] text-[#7A1F2B] bg-white rounded-t-lg shadow-sm'
                : 'border-transparent text-neutral-600 hover:text-neutral-900'
            }`}
          >
            📜 Original Printed Card
          </button>
        </div>

        {/* Card Body Display */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-[#FAF6EE]/50 flex items-center justify-center">
          {activeTab === 'digital' ? (
            <div className="w-full max-w-lg">
              <KeralaWeddingCard showActions={true} />
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <img
                src="/wedding-invitation.jpg"
                alt="Original Printed Wedding Invitation of Abhirami & Ajeesh"
                className="max-h-[65vh] w-auto object-contain rounded-xl shadow-lg border border-white"
              />
              <span className="text-xs text-neutral-500 font-serif italic mt-2">
                Printed by Snow White Attingal
              </span>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-3 sm:p-4 bg-white border-t border-neutral-200 flex items-center justify-between flex-wrap gap-2">
          <span className="text-xs text-neutral-600 font-serif italic">
            {activeTab === 'digital' ? 'Screenshot or save this digital card' : 'Original physical print copy'}
          </span>

          <div className="flex items-center gap-2">
            {activeTab === 'printed' && (
              <a
                href="/wedding-invitation.jpg"
                download="Abhirami-Ajeesh-Wedding-Invitation.jpg"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-wedding-gold-500 hover:bg-wedding-gold-600 text-white text-xs font-semibold shadow-sm transition-all"
              >
                <Download className="w-4 h-4" />
                <span>Download Print Copy</span>
              </a>
            )}
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-700 text-xs font-semibold transition-all"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
