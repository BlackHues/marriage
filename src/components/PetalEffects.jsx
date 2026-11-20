import React, { useMemo } from 'react';

export default function PetalEffects() {
  // Max 8 petals, slower and subtler, floating behind content
  const petals = useMemo(() => {
    return Array.from({ length: 8 }, (_, i) => ({
      id: i,
      left: `${(i * 12 + 6 + (i * 7) % 15) % 95}%`,
      animationDuration: `${14 + (i % 4) * 2.5}s`,
      animationDelay: `${(i * 1.8)}s`,
      size: 13 + (i % 3) * 4,
      rotateStart: `${(i * 45) % 360}deg`,
      type: i % 2 === 0 ? 'rose' : 'blush'
    }));
  }, []);

  return (
    <div className="petals-container fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="absolute opacity-40 animate-fall pointer-events-none"
          style={{
            left: petal.left,
            top: '-30px',
            animation: `fallAndSway ${petal.animationDuration} ease-in-out infinite`,
            animationDelay: petal.animationDelay,
          }}
        >
          {/* Natural Rose Petal SVG (No Star Sparkles) */}
          <svg
            width={petal.size}
            height={petal.size * 1.3}
            viewBox="0 0 30 40"
            fill="none"
            style={{ transform: `rotate(${petal.rotateStart})` }}
          >
            <path
              d="M15 0 C25 8, 30 22, 22 34 C16 42, 6 36, 2 28 C-2 18, 5 6, 15 0 Z"
              fill={petal.type === 'rose' ? "url(#rosePetalGrad)" : "url(#blushPetalGrad)"}
            />
            <defs>
              <linearGradient id="rosePetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FBCFE8" stopOpacity="0.75" />
                <stop offset="60%" stopColor="#F47293" stopOpacity="0.65" />
                <stop offset="100%" stopColor="#E84A73" stopOpacity="0.5" />
              </linearGradient>
              <linearGradient id="blushPetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFF0F5" stopOpacity="0.8" />
                <stop offset="50%" stopColor="#FDE2E4" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#FAD2E1" stopOpacity="0.55" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      ))}

      <style>{`
        @keyframes fallAndSway {
          0% {
            transform: translate3d(0, -10px, 0) rotate(0deg);
            opacity: 0;
          }
          15% {
            opacity: 0.55;
          }
          50% {
            transform: translate3d(25px, 50vh, 0) rotate(180deg);
          }
          85% {
            opacity: 0.45;
          }
          100% {
            transform: translate3d(-15px, 105vh, 0) rotate(360deg);
            opacity: 0;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-fall {
            animation: none !important;
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
}
