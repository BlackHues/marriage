import React, { useState, useEffect } from 'react';
import { Clock, MapPin, MessageSquareHeart, MailOpen, Volume2, VolumeX } from 'lucide-react';
import { weddingAudio } from '../utils/audio';

export default function FloatingNav({ onReopenCard, onScrollTo }) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const unsubscribe = weddingAudio.subscribe((state) => {
      setIsPlaying(state.isPlaying);
    });
    return () => unsubscribe();
  }, []);

  const handleToggleMusic = (e) => {
    e.stopPropagation();
    weddingAudio.toggle();
  };

  const navItems = [
    { id: 'countdown', label: 'Countdown', icon: Clock },
    { id: 'venues', label: 'Venues', icon: MapPin },
    { id: 'guestbook', label: 'Wishes', icon: MessageSquareHeart },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-lg">
      <div className="bg-white/95 backdrop-blur-md border border-[#C9A227]/40 rounded-full px-3 py-1.5 shadow-card-royal flex items-center justify-between gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onScrollTo(item.id)}
              className="flex flex-col items-center gap-0.5 px-2 sm:px-3 py-1 rounded-xl text-neutral-600 hover:text-[#7A1F2B] hover:bg-[#FAF6EE] transition-all active:scale-95"
            >
              <Icon className="w-4 h-4 text-[#C9A227]" />
              <span className="text-[10px] font-medium tracking-tight">{item.label}</span>
            </button>
          );
        })}

        {/* MUSIC TOGGLE BUTTON WITH EQUALIZER ANIMATION */}
        <button
          onClick={handleToggleMusic}
          className={`flex flex-col items-center gap-0.5 px-2.5 sm:px-3 py-1 rounded-xl transition-all active:scale-95 border ${
            isPlaying
              ? 'bg-[#FAF6EE] text-[#7A1F2B] border-[#C9A227] shadow-sm'
              : 'text-neutral-500 hover:text-[#7A1F2B] hover:bg-[#FAF6EE] border-transparent'
          }`}
          title={isPlaying ? 'Mute Wedding Music' : 'Turn Music On'}
        >
          <div className="flex items-center gap-1 h-4">
            {isPlaying ? (
              <>
                <Volume2 className="w-4 h-4 text-[#7A1F2B]" />
                <div className="flex items-end gap-0.5 h-3" aria-hidden="true">
                  <span className="w-0.5 bg-[#7A1F2B] rounded-full animate-bounce h-full"></span>
                  <span className="w-0.5 bg-[#C9A227] rounded-full animate-bounce h-2" style={{ animationDelay: '0.15s' }}></span>
                  <span className="w-0.5 bg-[#7A1F2B] rounded-full animate-bounce h-2.5" style={{ animationDelay: '0.3s' }}></span>
                </div>
              </>
            ) : (
              <VolumeX className="w-4 h-4 text-neutral-400" />
            )}
          </div>
          <span className={`text-[10px] font-semibold tracking-tight ${isPlaying ? 'text-[#7A1F2B]' : 'text-neutral-500'}`}>
            {isPlaying ? 'Music ON' : 'Music OFF'}
          </span>
        </button>

        {/* REPLAY OPENING CARD */}
        <button
          onClick={onReopenCard}
          className="flex flex-col items-center gap-0.5 px-2.5 sm:px-3 py-1 rounded-xl text-[#7A1F2B] hover:bg-[#FAF6EE] transition-all active:scale-95 border-l border-neutral-200"
          title="Replay Wedding Card Opening"
        >
          <MailOpen className="w-4 h-4 text-[#7A1F2B] animate-pulse-slow" />
          <span className="text-[10px] font-semibold text-[#7A1F2B]">Replay</span>
        </button>
      </div>
    </div>
  );
}
