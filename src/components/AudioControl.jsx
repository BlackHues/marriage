import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { weddingAudio } from '../utils/audio';

export default function AudioControl({ autoStart = false }) {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Subscribe to real audio player state changes
    const unsubscribe = weddingAudio.subscribe((state) => {
      setIsPlaying(state.isPlaying);
    });

    if (autoStart) {
      weddingAudio.play().catch(() => {});
    }

    return () => unsubscribe();
  }, [autoStart]);

  const togglePlay = (e) => {
    e.stopPropagation();
    weddingAudio.toggle();
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <button
        onClick={togglePlay}
        aria-label={isPlaying ? 'Mute wedding music' : 'Play wedding music'}
        className={`flex items-center gap-2 px-3.5 py-2 rounded-full shadow-lg transition-all duration-300 backdrop-blur-md border ${
          isPlaying
            ? 'bg-wedding-pink-100/90 text-wedding-pink-700 border-wedding-gold-400 shadow-gold-glow hover:bg-wedding-pink-200/90'
            : 'bg-white/90 text-neutral-600 border-wedding-gold-200 hover:bg-wedding-pink-50'
        }`}
      >
        {isPlaying ? (
          <>
            <div className="flex items-end gap-0.5 h-3.5 w-3.5" aria-hidden="true">
              <span className="w-1 bg-wedding-pink-600 rounded-full animate-bounce h-full"></span>
              <span className="w-1 bg-wedding-gold-500 rounded-full animate-bounce h-2" style={{ animationDelay: '0.15s' }}></span>
              <span className="w-1 bg-wedding-pink-500 rounded-full animate-bounce h-3" style={{ animationDelay: '0.3s' }}></span>
            </div>
            <Volume2 className="w-4 h-4 text-wedding-gold-600" />
            <span className="text-xs font-semibold hidden sm:inline text-wedding-gold-900">Playing BGM</span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-neutral-400" />
            <span className="text-xs font-medium hidden sm:inline text-neutral-500">Play Music</span>
          </>
        )}
      </button>
    </div>
  );
}
