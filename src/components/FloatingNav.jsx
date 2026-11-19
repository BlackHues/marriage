import React from 'react';
import { Clock, Calendar, MapPin, MessageSquareHeart, MailOpen } from 'lucide-react';

export default function FloatingNav({ onReopenCard, onScrollTo }) {
  const navItems = [
    { id: 'countdown', label: 'Countdown', icon: Clock },
    { id: 'timeline', label: 'Timeline', icon: Calendar },
    { id: 'venues', label: 'Venues', icon: MapPin },
    { id: 'guestbook', label: 'Wishes', icon: MessageSquareHeart },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 w-[94%] max-w-md">
      <div className="bg-white/90 backdrop-blur-md border border-wedding-gold-300 rounded-full px-3 py-2 shadow-card-royal flex items-center justify-around">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onScrollTo(item.id)}
              className="flex flex-col items-center gap-0.5 px-2.5 py-1 rounded-xl text-neutral-600 hover:text-wedding-pink-600 hover:bg-wedding-pink-50 transition-all active:scale-95"
            >
              <Icon className="w-4 h-4 text-wedding-gold-600" />
              <span className="text-[10px] font-medium tracking-tight">{item.label}</span>
            </button>
          );
        })}

        {/* Replay Opening Button */}
        <button
          onClick={onReopenCard}
          className="flex flex-col items-center gap-0.5 px-2.5 py-1 rounded-xl text-wedding-pink-600 hover:bg-wedding-pink-50 transition-all active:scale-95 border-l border-neutral-200"
          title="Replay Wedding Card Opening"
        >
          <MailOpen className="w-4 h-4 text-wedding-pink-500 animate-pulse-slow" />
          <span className="text-[10px] font-semibold text-wedding-pink-600">Replay Card</span>
        </button>
      </div>
    </div>
  );
}
