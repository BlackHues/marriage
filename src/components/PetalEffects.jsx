import React, { useMemo } from 'react';

export default function PetalEffects() {
  // Generate random petals with varying sizes, speeds, and delays
  const petals = useMemo(() => {
    return Array.from({ length: 18 }, (_, i) => ({
      id: i,
      left: `${(i * 5.5 + Math.random() * 4) % 100}%`,
      animationDuration: `${7 + (i % 6) * 1.5}s`,
      animationDelay: `${(i % 5) * 1.2}s`,
      size: 14 + (i % 4) * 5,
      rotateStart: `${(i * 35) % 360}deg`,
      type: i % 3 === 0 ? 'gold' : 'pink'
    }));
  }, []);

  return (
    <div className="petals-container" aria-hidden="true">
      {petals.map((petal) => (
        <span
          key={petal.id}
          className="absolute opacity-65 animate-fall"
          style={{
            left: petal.left,
            top: '-40px',
            animation: `fallAndSway ${petal.animationDuration} ease-in-out infinite`,
            animationDelay: petal.animationDelay,
          }}
        >
          {petal.type === 'pink' ? (
            // Pink rose petal SVG
            <svg
              width={petal.size}
              height={petal.size * 1.3}
              viewBox="0 0 30 40"
              fill="none"
              style={{ transform: `rotate(${petal.rotateStart})` }}
            >
              <path
                d="M15 0 C25 8, 30 22, 22 34 C16 42, 6 36, 2 28 C-2 18, 5 6, 15 0 Z"
                fill="url(#pinkPetalGrad)"
              />
              <defs>
                <linearGradient id="pinkPetalGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FBCFE8" stopOpacity="0.9" />
                  <stop offset="60%" stopColor="#F47293" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#E84A73" stopOpacity="0.6" />
                </linearGradient>
              </defs>
            </svg>
          ) : (
            // Golden Sparkle Petal SVG
            <svg
              width={petal.size * 0.9}
              height={petal.size * 0.9}
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z"
                fill="url(#goldStarGrad)"
                opacity="0.75"
              />
              <defs>
                <linearGradient id="goldStarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF4D0" />
                  <stop offset="50%" stopColor="#D4AF37" />
                  <stop offset="100%" stopColor="#B8860B" />
                </linearGradient>
              </defs>
            </svg>
          )}
        </span>
      ))}

      <style>{`
        @keyframes fallAndSway {
          0% {
            transform: translate3d(0, -10px, 0) rotate(0deg);
            opacity: 0;
          }
          15% {
            opacity: 0.8;
          }
          50% {
            transform: translate3d(35px, 50vh, 0) rotate(180deg);
          }
          85% {
            opacity: 0.7;
          }
          100% {
            transform: translate3d(-20px, 105vh, 0) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
