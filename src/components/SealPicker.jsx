import React from 'react';
import Icon from './Icon';

export const SEALS = [
  { id: 'love', label: 'Love', icon: 'love' },
  { id: 'union', label: 'Union', icon: 'union' },
  { id: 'flowers', label: 'Flowers', icon: 'flowers' },
  { id: 'celebration', label: 'Celebration', icon: 'celebration' },
  { id: 'blessings', label: 'Blessings', icon: 'blessings' },
  { id: 'peace', label: 'Peace', icon: 'peace' },
  { id: 'devotion', label: 'Devotion', icon: 'devotion' },
];

export default function SealPicker({ value = 'love', onChange }) {
  return (
    <fieldset className="border-0 p-0 m-0">
      <legend className="text-[17px] font-medium text-[var(--gb-ink)] mb-3 block">
        Choose a blessing seal
      </legend>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2.5 sm:gap-3" role="radiogroup" aria-label="Blessing seal choices">
        {SEALS.map((seal) => {
          const isSelected = value === seal.id;
          return (
            <label
              key={seal.id}
              className={`relative flex flex-col items-center justify-center p-3 rounded-2xl cursor-pointer transition-all duration-200 border text-center select-none gb-focus-visible ${
                isSelected
                  ? 'border-[var(--gb-maroon)] bg-[var(--gb-maroon)]/8 shadow-sm ring-1 ring-[var(--gb-maroon)]'
                  : 'border-[var(--gb-card-border)] bg-[var(--gb-card-bg)] hover:border-[var(--gb-gold)] hover:bg-[var(--gb-bg)]'
              }`}
            >
              <input
                type="radio"
                name="seal"
                value={seal.id}
                checked={isSelected}
                onChange={() => onChange(seal.id)}
                className="sr-only"
              />

              {/* Round badge above label */}
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 mb-2 ${
                  isSelected
                    ? 'bg-[var(--gb-maroon)] text-white shadow-xs'
                    : 'bg-[var(--gb-bg)] text-[var(--gb-maroon)] border border-[var(--gb-gold)]/40'
                }`}
              >
                <Icon name={seal.icon} className="w-5 h-5" />
              </div>

              {/* Sentence-case label */}
              <span
                className={`text-sm font-medium transition-colors ${
                  isSelected
                    ? 'text-[var(--gb-maroon)] font-semibold'
                    : 'text-[var(--gb-ink)]'
                }`}
              >
                {seal.label}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
