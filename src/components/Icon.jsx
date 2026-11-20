import React from 'react';

/**
 * Consistent SVG Line Icons for the Guestbook
 * Style: strokeWidth 1.6, rounded caps & corners
 */
export default function Icon({ name, className = "w-5 h-5", filled = false, ...props }) {
  const commonProps = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.6",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className,
    "aria-hidden": "true",
    ...props
  };

  switch (name) {
    // 1. Love (Heart)
    case 'love':
    case 'heart':
      return (
        <svg {...commonProps} fill={filled ? "currentColor" : "none"}>
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      );

    // 2. Union (Two interlocking rings)
    case 'union':
      return (
        <svg {...commonProps}>
          <circle cx="8.5" cy="13" r="5" />
          <circle cx="15.5" cy="11" r="5" />
          <path d="M12 4.5l1.5-1.5" />
          <path d="M15 3.5l-1 1" />
          <path d="M13.5 1.5l.5 2" />
        </svg>
      );

    // 3. Flowers (Botanical blossom)
    case 'flowers':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="2.5" />
          <path d="M12 4.5a3 3 0 0 1 3 3v.5a3 3 0 0 1-3 3 3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3z" />
          <path d="M19.5 12a3 3 0 0 1-3 3h-.5a3 3 0 0 1-3-3 3 3 0 0 1 3-3h.5a3 3 0 0 1 3 3z" />
          <path d="M12 19.5a3 3 0 0 1-3-3v-.5a3 3 0 0 1 3-3 3 3 0 0 1 3 3v.5a3 3 0 0 1-3 3z" />
          <path d="M4.5 12a3 3 0 0 1 3-3h.5a3 3 0 0 1 3 3 3 3 0 0 1-3 3h-.5a3 3 0 0 1-3-3z" />
        </svg>
      );

    // 4. Celebration (Two champagne flutes clinking)
    case 'celebration':
      return (
        <svg {...commonProps}>
          <path d="M6 3h4l1 6.5a2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1-2.5-2.5L6 3z" />
          <path d="M8.5 12v6M6 18h5" />
          <path d="M14 3h4l-1 6.5a2.5 2.5 0 0 1-2.5 2.5 2.5 2.5 0 0 1-2.5-2.5L14 3z" />
          <path d="M15.5 12v6M13 18h5" />
          <path d="M12 3v1.5" />
          <path d="M12 7h.01" />
        </svg>
      );

    // 5. Blessings (Sparkles / Celestial stars)
    case 'blessings':
      return (
        <svg {...commonProps}>
          <path d="M12 3c0 4.2-1.8 6-6 6 4.2 0 6 1.8 6 6 0-4.2 1.8-6 6-6-4.2 0-6-1.8-6-6z" />
          <path d="M18.5 16.5c0 2-.8 2.8-2.8 2.8 2 0 2.8.8 2.8 2.8 0-2 .8-2.8 2.8-2.8-2 0-2.8-.8-2.8-2.8z" />
          <path d="M5.5 4.5c0 1.2-.5 1.7-1.7 1.7 1.2 0 1.7.5 1.7 1.7 0-1.2.5-1.7 1.7-1.7-1.2 0-1.7-.5-1.7-1.7z" />
        </svg>
      );

    // 6. Peace (Olive leaf sprig)
    case 'peace':
      return (
        <svg {...commonProps}>
          <path d="M3 21c3-6 8.5-11 18-14-3 6.5-8 12-18 14z" />
          <path d="M9 15c-1-3 0-6 3-8" />
          <path d="M14 10c0-3 2-5 5-6" />
          <path d="M8 18c0-3 2-5 5-5" />
        </svg>
      );

    // 7. Devotion (Lotus bloom)
    case 'devotion':
      return (
        <svg {...commonProps}>
          <path d="M12 4.5c1.6 3 2.8 6.5 2.8 9.5a2.8 2.8 0 0 1-5.6 0c0-3 1.2-6.5 2.8-9.5z" />
          <path d="M12 14c2.5-1.5 5.5-2 8-1-1 3-3.5 5.5-6.5 6" />
          <path d="M12 14c-2.5-1.5-5.5-2-8-1 1 3 3.5 5.5 6.5 6" />
          <path d="M5 19c3.5 1.5 10.5 1.5 14 0" />
        </svg>
      );

    // Auxiliary UI icons
    case 'paper-plane':
      return (
        <svg {...commonProps}>
          <path d="M22 2L11 13" />
          <path d="M22 2L15 22L11 13L2 9L22 2Z" />
        </svg>
      );

    case 'check':
      return (
        <svg {...commonProps}>
          <polyline points="20 6 9 17 4 12" />
        </svg>
      );

    case 'refresh':
      return (
        <svg {...commonProps}>
          <path d="M23 4v6h-6" />
          <path d="M1 20v-6h6" />
          <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
        </svg>
      );

    case 'calendar':
      return (
        <svg {...commonProps}>
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      );

    case 'clock':
    case 'time':
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
      );

    default:
      return (
        <svg {...commonProps}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 8v4M12 16h.01" />
        </svg>
      );
  }
}
