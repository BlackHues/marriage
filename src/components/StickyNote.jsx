import React from 'react';
import Icon from './Icon';
import { formatIndianDateTime } from './dateTime';

// 6 vibrant, authentic colorful sticky note themes: yellow, pink, green, blue, peach, lavender
const COLORFUL_THEMES = [
  {
    id: 'yellow',
    bg: 'bg-[#FFF275]', // Warm Sunny Yellow
    border: 'border-[#FDD835]/70',
    tape: 'rgba(255, 238, 88, 0.85)',
    tag: 'bg-amber-950/10 text-amber-900 border-amber-900/20',
  },
  {
    id: 'pink',
    bg: 'bg-[#FBCFE8]', // Blossom Rose Pink
    border: 'border-[#F472B6]/70',
    tape: 'rgba(249, 168, 212, 0.85)',
    tag: 'bg-pink-950/10 text-pink-900 border-pink-900/20',
  },
  {
    id: 'green',
    bg: 'bg-[#BBF7D0]', // Fresh Mint Green
    border: 'border-[#4ADE80]/70',
    tape: 'rgba(187, 247, 208, 0.85)',
    tag: 'bg-emerald-950/10 text-emerald-900 border-emerald-900/20',
  },
  {
    id: 'blue',
    bg: 'bg-[#BAE6FD]', // Clear Sky Blue
    border: 'border-[#38BDF8]/70',
    tape: 'rgba(186, 230, 253, 0.85)',
    tag: 'bg-sky-950/10 text-sky-900 border-sky-900/20',
  },
  {
    id: 'peach',
    bg: 'bg-[#FED7AA]', // Warm Apricot Peach
    border: 'border-[#FB923C]/70',
    tape: 'rgba(254, 215, 170, 0.85)',
    tag: 'bg-orange-950/10 text-orange-900 border-orange-900/20',
  },
  {
    id: 'lavender',
    bg: 'bg-[#DDD6FE]', // Sweet Lilac / Lavender
    border: 'border-[#A78BFA]/70',
    tape: 'rgba(221, 214, 254, 0.85)',
    tag: 'bg-purple-950/10 text-purple-900 border-purple-900/20',
  },
];

// Tilts between -2 and +2 degrees
const TILTS = [
  '-rotate-[1.5deg]',
  'rotate-[1.8deg]',
  '-rotate-[1deg]',
  'rotate-[1.4deg]',
  '-rotate-[2deg]',
  'rotate-[1deg]',
];

export default function StickyNote({
  note,
  index = 0,
  onToggleHeart,
  isLiked = false
}) {
  const theme = COLORFUL_THEMES[index % COLORFUL_THEMES.length];
  const tiltClass = TILTS[index % TILTS.length];
  const formattedTime = formatIndianDateTime(note.created_at || note.date);

  return (
    <article
      className={`relative flex flex-col justify-between p-6 sm:p-7 rounded-sm shadow-[0_4px_16px_rgba(43,24,16,0.07)] transition-all duration-300 transform ${tiltClass} hover:rotate-0 hover:scale-[1.03] hover:shadow-[0_16px_36px_rgba(43,24,16,0.13)] hover:z-20 border ${theme.bg} ${theme.border} ${
        note.isNew ? 'ring-2 ring-[var(--gb-gold)] border-[var(--gb-gold)] shadow-lg' : ''
      }`}
    >
      {/* Tape strip at the top */}
      <div
        className="absolute -top-3.5 left-1/2 -translate-x-1/2 w-24 h-6 pointer-events-none rounded-[1px] opacity-90 shadow-xs border-y border-white/70"
        style={{
          background: theme.tape,
          backdropFilter: 'blur(3px)',
        }}
      >
        {/* Subtle center pin mark */}
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--gb-gold)] mx-auto mt-2 opacity-60" />
      </div>

      {/* Top row: Relationship badge & Indian Standard Time timestamp */}
      <div className="flex items-center justify-between mb-3 pt-1 gap-2">
        {note.relation ? (
          <span
            className={`text-xs font-semibold tracking-wide px-2.5 py-0.5 rounded-full border shadow-2xs ${theme.tag}`}
            style={{ fontFamily: "'Gayathri', 'Rubik', sans-serif" }}
          >
            {note.relation}
          </span>
        ) : (
          <span
            className={`text-xs font-semibold tracking-wide px-2.5 py-0.5 rounded-full border shadow-2xs ${theme.tag}`}
            style={{ fontFamily: "'Gayathri', 'Rubik', sans-serif" }}
          >
            Well-wisher
          </span>
        )}

        {formattedTime && (
          <time
            dateTime={note.created_at}
            title={`${formattedTime} (IST - Chennai)`}
            className="text-[11px] sm:text-xs text-neutral-700/80 font-mono tracking-tight flex items-center gap-1.5 shrink-0 bg-transparent font-medium"
          >
            <Icon name="clock" className="w-3.5 h-3.5 text-neutral-700/70" />
            <span>{formattedTime}</span>
          </time>
        )}
      </div>

      {/* Message in handwritten Tangerine & Malayalam Gayathri font */}
      <div className="flex-1 my-2">
        <p
          className="text-[26px] sm:text-[28px] leading-[1.3] text-[#1E1E1E] tracking-wide font-bold select-text guestbook-note-text"
          style={{ fontFamily: "'Tangerine', 'Gayathri', 'Noto Serif Malayalam', cursive, sans-serif" }}
        >
          &ldquo;{note.message}&rdquo;
        </p>
      </div>

      {/* Bottom row: Signature in Tangerine & heart toggle button */}
      <div className="mt-4 pt-3 border-t border-black/10 flex items-end justify-between gap-3">
        {/* Heart love button: strictly one love per user */}
        <button
          type="button"
          onClick={() => onToggleHeart(note.id)}
          disabled={isLiked}
          aria-pressed={isLiked}
          title={isLiked ? "You've sent your love to this blessing ❤️" : "Send love to this blessing"}
          aria-label={isLiked ? `You've sent love to ${note.name}'s blessing` : `Send love to ${note.name}'s blessing`}
          className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all gb-focus-visible ${
            isLiked
              ? 'bg-[var(--gb-maroon)]/15 text-[var(--gb-maroon)] font-semibold shadow-xs cursor-default'
              : 'text-neutral-700 hover:text-[var(--gb-maroon)] hover:bg-black/5 cursor-pointer active:scale-95'
          }`}
        >
          <Icon
            name="heart"
            filled={isLiked}
            className={`w-4 h-4 transition-transform ${
              isLiked ? 'text-[var(--gb-maroon)] scale-110' : 'text-neutral-500'
            }`}
          />
          <span className="font-sans text-xs font-bold">{note.likes || 0}</span>
          {isLiked && (
            <span className="text-[10px] text-[var(--gb-maroon)] font-semibold ml-0.5 tracking-tight">Loved</span>
          )}
        </button>

        {/* Signature (Tangerine in royal maroon, legible and bold) */}
        <div className="text-right flex-1 min-w-0 pl-2">
          <span
            className="text-[28px] sm:text-[32px] text-[var(--gb-maroon)] leading-none block drop-shadow-xs font-bold guestbook-signature"
            style={{ fontFamily: "'Tangerine', cursive", letterSpacing: '0.02em' }}
          >
            {note.name}
          </span>
        </div>
      </div>
    </article>
  );
}
