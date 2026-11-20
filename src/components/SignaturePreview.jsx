import React from 'react';

export default function SignaturePreview({ name = '', isDark = true }) {
  const displayName = name.trim();

  return (
    <div className="w-full">
      <div className="flex items-center justify-between text-xs text-white/50 mb-1.5">
        <span>Signature preview</span>
      </div>

      <div className="min-h-[50px] pb-1.5 border-b border-dashed border-[#C9A24B]/50 flex items-end justify-between">
        {displayName ? (
          <span
            className="text-3xl sm:text-4xl text-[#F6E3B4] leading-none select-none font-bold guestbook-signature"
            style={{ fontFamily: "'Tangerine', cursive", letterSpacing: '0.02em' }}
          >
            {displayName}
          </span>
        ) : (
          <span className="text-sm italic text-white/40 select-none pb-1">
            Your handwritten signature will appear here as you type your name...
          </span>
        )}
      </div>
    </div>
  );
}
