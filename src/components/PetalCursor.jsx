import React, { useEffect, useRef } from 'react';

/**
 * PetalCursor
 * - Custom high-definition rose petal SVG cursor (default & hover states)
 * - Interactive drifting petal trail following mouse movement
 * - Gentle petal bloom burst on click
 * - Zero-CPU when idle, auto-disabled on mobile / touch & reduced-motion
 */
export default function PetalCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Only run on devices with a fine pointer (mouse / trackpad) and hover capability
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!hasFinePointer || prefersReducedMotion) {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId = null;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle pool
    const particles = [];
    const maxParticles = 40;
    let lastMousePos = { x: -100, y: -100 };
    let lastSpawnTime = 0;

    // Petal color palettes (Kerala royal blush, rose & golden amber)
    const PETAL_COLORS = [
      { top: '#FFE2E8', mid: '#F47293', bot: '#BE185D' },
      { top: '#FFF0F5', mid: '#FB7185', bot: '#E11D48' },
      { top: '#FFF5EB', mid: '#FDBA74', bot: '#E29578' },
      { top: '#FCE7F3', mid: '#EC4899', bot: '#9D174D' },
      { top: '#FFFDF0', mid: '#FBBF24', bot: '#D97706' },
    ];

    const createPetal = (x, y, isBurst = false) => {
      const color = PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)];
      const angle = isBurst ? Math.random() * Math.PI * 2 : Math.random() * Math.PI * 2;
      const speed = isBurst ? Math.random() * 2.5 + 1.2 : Math.random() * 0.8 + 0.3;

      return {
        x: x + (Math.random() - 0.5) * 8,
        y: y + (Math.random() - 0.5) * 8,
        vx: isBurst ? Math.cos(angle) * speed : (Math.random() - 0.5) * 0.9,
        vy: isBurst ? Math.sin(angle) * speed - 0.5 : Math.random() * 0.9 + 0.5,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.08,
        size: isBurst ? Math.random() * 7 + 6 : Math.random() * 7 + 7,
        alpha: 1,
        decay: isBurst ? Math.random() * 0.02 + 0.018 : Math.random() * 0.025 + 0.02,
        color,
        wobble: Math.random() * Math.PI * 2,
        wobbleSpeed: Math.random() * 0.05 + 0.02,
      };
    };

    const drawPetal = (p) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rotation);
      ctx.globalAlpha = Math.max(0, p.alpha);

      // Create petal gradient
      const half = p.size;
      const grad = ctx.createLinearGradient(-half * 0.5, -half, half * 0.5, half);
      grad.addColorStop(0, p.color.top);
      grad.addColorStop(0.5, p.color.mid);
      grad.addColorStop(1, p.color.bot);

      ctx.fillStyle = grad;
      ctx.beginPath();
      // Natural teardrop / curved rose petal shape
      ctx.moveTo(0, -half);
      ctx.bezierCurveTo(half * 0.75, -half * 0.4, half * 0.85, half * 0.7, 0, half * 1.1);
      ctx.bezierCurveTo(-half * 0.85, half * 0.7, -half * 0.75, -half * 0.4, 0, -half);
      ctx.closePath();
      ctx.fill();

      // Subtle delicate petal vein highlight
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)';
      ctx.lineWidth = 0.6;
      ctx.beginPath();
      ctx.moveTo(0, -half * 0.8);
      ctx.lineTo(0, half * 0.6);
      ctx.stroke();

      ctx.restore();
    };

    let isRunning = false;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.wobble += p.wobbleSpeed;
        p.x += p.vx + Math.sin(p.wobble) * 0.4;
        p.y += p.vy;
        p.rotation += p.rotSpeed;
        p.alpha -= p.decay;

        if (p.alpha <= 0 || p.y > height + 20) {
          particles.splice(i, 1);
        } else {
          drawPetal(p);
        }
      }

      if (particles.length > 0) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        isRunning = false;
      }
    };

    const startAnimation = () => {
      if (!isRunning) {
        isRunning = true;
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    const handleMouseMove = (e) => {
      const now = performance.now();
      const dist = Math.hypot(e.clientX - lastMousePos.x, e.clientY - lastMousePos.y);

      // Only spawn petal trail when mouse moves meaningfully and not too frequently
      if (dist > 18 && now - lastSpawnTime > 45) {
        if (particles.length < maxParticles) {
          particles.push(createPetal(e.clientX, e.clientY));
        }
        lastSpawnTime = now;
        lastMousePos = { x: e.clientX, y: e.clientY };
        startAnimation();
      }
    };

    const handleClick = (e) => {
      // Gentle bloom burst of 6 petals
      for (let i = 0; i < 7; i++) {
        particles.push(createPetal(e.clientX, e.clientY, true));
      }
      startAnimation();
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('click', handleClick, { passive: true });

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <>
      {/* Interactive trailing petal canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9999] overflow-hidden"
        aria-hidden="true"
      />

      {/* SVG Rose Petal Cursor Styles */}
      <style>{`
        /* Custom Rose Petal Pointer for Desktop Browsers */
        @media (hover: hover) and (pointer: fine) {
          /* Default Petal Pointer (Delicate Rose Petal with Gold Accent) */
          html, body, button, a, [role="button"], label, select, summary {
            cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='28' viewBox='0 0 28 28'%3E%3Cdefs%3E%3ClinearGradient id='p' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23FFE4E9'/%3E%3Cstop offset='40%25' stop-color='%23F47293'/%3E%3Cstop offset='85%25' stop-color='%23E11D48'/%3E%3Cstop offset='100%25' stop-color='%23881337'/%3E%3C/linearGradient%3E%3Cfilter id='s' x='-20%25' y='-20%25' width='150%25' height='150%25'%3E%3CfeDropShadow dx='0.8' dy='1.5' stdDeviation='1.2' flood-color='%234C0519' flood-opacity='0.4'/%3E%3C/filter%3E%3C/defs%3E%3Cpath d='M3 3 C11 1, 21 5, 23 14 C24 19, 19 24, 12 23 C5 22, 1 15, 3 3 Z' fill='url(%23p)' stroke='%23C9A24B' stroke-width='1.2' filter='url(%23s)'/%3E%3Cpath d='M4 4 C9 9, 14 14, 17 19' stroke='%23FFF' stroke-width='0.7' stroke-linecap='round' opacity='0.55'/%3E%3Ccircle cx='3' cy='3' r='1.4' fill='%23FDE68A' stroke='%2392400E' stroke-width='0.5'/%3E%3C/svg%3E") 3 3, auto !important;
          }

          /* Interactive / Clickable Hover State (Blooming Golden Sparkle Petal) */
          a:hover, button:hover, [role="button"]:hover, select:hover, label:hover, .cursor-pointer:hover {
            cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3E%3Cdefs%3E%3ClinearGradient id='ph' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23FFFDF0'/%3E%3Cstop offset='35%25' stop-color='%23FB7185'/%3E%3Cstop offset='80%25' stop-color='%23BE123C'/%3E%3Cstop offset='100%25' stop-color='%234C0519'/%3E%3C/linearGradient%3E%3Cfilter id='sh' x='-20%25' y='-20%25' width='150%25' height='150%25'%3E%3CfeDropShadow dx='0.8' dy='1.8' stdDeviation='1.8' flood-color='%23C9A24B' flood-opacity='0.65'/%3E%3C/filter%3E%3C/defs%3E%3Cpath d='M3 3 C13 0, 24 4, 26 15 C27 21, 21 27, 13 25 C5 23, 0 15, 3 3 Z' fill='url(%23ph)' stroke='%23F59E0B' stroke-width='1.5' filter='url(%23sh)'/%3E%3Cpath d='M4 4 C10 10, 15 16, 19 21' stroke='%23FFF' stroke-width='0.9' stroke-linecap='round' opacity='0.75'/%3E%3Ccircle cx='3' cy='3' r='2' fill='%23FBBF24' stroke='%2378350F' stroke-width='0.6'/%3E%3C/svg%3E") 3 3, pointer !important;
          }

          /* Keep standard text caret for text inputs & textareas for best UX */
          input[type="text"], input[type="email"], input[type="password"], input[type="number"], textarea, [contenteditable="true"] {
            cursor: text !important;
          }
        }
      `}</style>
    </>
  );
}
