import React from 'react';
import StickyNote from './StickyNote';
import Icon from './Icon';

export default function BlessingWall({
  notes = [],
  onToggleHeart,
  likedMap = {},
  totalWishes,
  totalHearts
}) {
  const wishesCount = typeof totalWishes === 'number' ? totalWishes : notes.length;
  const heartsCount = typeof totalHearts === 'number' ? totalHearts : notes.reduce((s, n) => s + (n.likes || 0), 0);

  return (
    <section className="mt-16 sm:mt-20 w-full" aria-labelledby="blessing-wall-heading">
      {/* Wall Header */}
      <div className="text-center mb-10 max-w-2xl mx-auto">
        <h3
          id="blessing-wall-heading"
          className="guestbook-heading text-3xl sm:text-4xl text-[var(--gb-ink)] font-semibold tracking-tight"
        >
          The blessing wall
        </h3>
        <p className="text-[17px] text-[var(--gb-muted)] mt-2">
          Notes from friends and family. Tap the heart to send love back.
        </p>

        {/* Pill showing wishes shared & hearts received */}
        <div className="inline-flex items-center gap-3.5 px-5 py-2 mt-4 rounded-full bg-white border border-[var(--gb-card-border)] shadow-xs text-sm text-[var(--gb-ink)]">
          <span className="font-medium">
            <strong className="text-[var(--gb-maroon)] font-bold mr-1">{wishesCount}</strong>
            {wishesCount === 1 ? 'wish shared' : 'wishes shared'}
          </span>
          <span className="w-1 h-1 rounded-full bg-[var(--gb-gold)]" aria-hidden="true" />
          <span className="font-medium inline-flex items-center gap-1.5">
            <Icon name="heart" filled={true} className="w-3.5 h-3.5 text-[var(--gb-maroon)]" />
            <span>
              <strong className="text-[var(--gb-maroon)] font-bold mr-1">{heartsCount}</strong>
              {heartsCount === 1 ? 'heart received' : 'hearts received'}
            </span>
          </span>
        </div>
      </div>

      {/* Wall Grid */}
      {notes.length === 0 ? (
        <div className="max-w-md mx-auto p-10 rounded-2xl bg-[var(--gb-card-bg)] border border-dashed border-[var(--gb-gold)] text-center shadow-xs">
          <p className="text-2xl text-[var(--gb-muted)] font-bold" style={{ fontFamily: "'Tangerine', 'Gayathri', 'Noto Serif Malayalam', cursive, sans-serif" }}>
            The wall is waiting for the first blessing. Share your love above!
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-7 sm:gap-8 pt-4 w-full">
          {notes.map((note, index) => (
            <StickyNote
              key={note.id || `${note.name}-${index}`}
              note={note}
              index={index}
              isLiked={!!likedMap[note.id]}
              onToggleHeart={onToggleHeart}
            />
          ))}
        </div>
      )}
    </section>
  );
}
