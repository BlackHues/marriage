import React, { useState, useEffect, useRef } from 'react';
import Icon from './Icon';
import SignaturePreview from './SignaturePreview';
import { formatIndianDateTime, getCurrentIndianDateTime } from './dateTime';

const RELATION_OPTIONS = [
  "Bride's friend",
  "Groom's friend",
  "Bride's family",
  "Groom's family",
  "Colleague",
  "Neighbour",
  "Other"
];

const QUICK_STARTS = [
  {
    label: "Wishing you love",
    text: "Wishing you both a lifetime of love, laughter, and endless joy together. Congratulations on your beautiful wedding!"
  },
  {
    label: "Blessings",
    text: "May your marriage be blessed with divine grace, peace, prosperity, and unwavering happiness in every step of your journey."
  },
  {
    label: "A memory",
    text: "So overjoyed to celebrate this auspicious milestone with you both. Here is to making countless more unforgettable memories together!"
  }
];

export default function BlessingForm({
  coupleNames = "Abhirami & Ajeesh",
  weddingDate = "Sunday, 24 January 2027",
  onSubmit
}) {
  const [name, setName] = useState('');
  const [relation, setRelation] = useState("Bride's friend");
  const [message, setMessage] = useState('');
  const [currentTimeIST, setCurrentTimeIST] = useState(getCurrentIndianDateTime());

  // Keep IST clock live
  useEffect(() => {
    setCurrentTimeIST(getCurrentIndianDateTime());
    const timer = setInterval(() => {
      setCurrentTimeIST(getCurrentIndianDateTime());
    }, 10000);
    return () => clearInterval(timer);
  }, []);

  // Validation state
  const [nameError, setNameError] = useState('');
  const [messageError, setMessageError] = useState('');

  // Confirmation state
  const [submittedNote, setSubmittedNote] = useState(null);

  // Field refs
  const nameInputRef = useRef(null);
  const messageInputRef = useRef(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
    if (nameError) setNameError('');
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    if (messageError) setMessageError('');
  };

  const handleQuickStart = (sampleText) => {
    setMessage(sampleText);
    if (messageError) setMessageError('');
    messageInputRef.current?.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const trimmedName = name.trim();
    const trimmedMessage = message.trim();

    let hasError = false;

    if (!trimmedName) {
      setNameError('Please enter your full name');
      nameInputRef.current?.focus();
      hasError = true;
    }

    if (!trimmedMessage) {
      setMessageError('Please write a blessing message');
      if (!hasError) {
        messageInputRef.current?.focus();
      }
      hasError = true;
    }

    if (hasError) return;

    const newNote = {
      name: trimmedName,
      relation,
      message: trimmedMessage,
      created_at: new Date().toISOString()
    };

    if (onSubmit) {
      onSubmit(newNote);
    }

    setSubmittedNote(newNote);
  };

  const handleResetForm = () => {
    setName('');
    setRelation("Bride's friend");
    setMessage('');
    setNameError('');
    setMessageError('');
    setSubmittedNote(null);
    setTimeout(() => {
      nameInputRef.current?.focus();
    }, 50);
  };

  // Confirmation Card State (In matching Royal Dark Theme)
  if (submittedNote) {
    return (
      <div className="w-full my-6">
        <div className="w-full p-8 sm:p-12 text-center relative overflow-hidden animate-fade-in bg-gradient-to-b from-[#24060E] via-[#1A050B] to-[#120207] border border-[#C9A24B]/40 shadow-[0_16px_50px_rgba(36,6,14,0.35)] rounded-3xl text-white">
          {/* Traditional Kasavu Gold Ribbon Accent */}
          <div
            className="absolute top-0 left-0 right-0 h-1.5 border-b border-[#C9A24B]/60 pointer-events-none"
            style={{
              backgroundImage: `linear-gradient(to right, #C9A24B, #E5C158, #C9A24B)`
            }}
          />

          {/* Round blush heart check badge */}
          <div className="w-16 h-16 rounded-full bg-[#7A1F3D] text-white flex items-center justify-center mx-auto mb-5 shadow-lg border border-[#C9A24B]/50">
            <Icon name="check" className="w-8 h-8 text-[#F6E3B4]" />
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl text-white font-normal mb-2 tracking-wide">
            Blessing sent
          </h3>

          <p className="text-[16px] sm:text-[17px] text-white/70 mb-8 max-w-xl mx-auto">
            Thank you for sharing your love with {coupleNames}! Your note is now pinned to the blessing wall.
          </p>

          {/* Quote preview card */}
          <div className="max-w-2xl mx-auto p-6 sm:p-7 rounded-2xl bg-white/5 border border-[#C9A24B]/40 shadow-inner mb-8 text-left backdrop-blur-sm">
            <p
              className="text-2xl sm:text-3xl text-[#FFFDF9] leading-relaxed italic mb-4 font-bold"
              style={{ fontFamily: "'Tangerine', 'Gayathri', 'Noto Serif Malayalam', cursive, sans-serif" }}
            >
              &ldquo;{submittedNote.message}&rdquo;
            </p>
            <div className="flex items-center justify-between border-t border-[#C9A24B]/30 pt-3 gap-2">
              <div className="flex flex-col">
                <span className="text-xs text-[#F4A6B8] font-medium">
                  {submittedNote.relation}
                </span>
                <span className="text-[11px] text-[#F6E3B4]/70 font-mono flex items-center gap-1 mt-0.5">
                  <Icon name="clock" className="w-3 h-3 text-[#F6E3B4]/70" />
                  <span>{formatIndianDateTime(submittedNote.created_at)} (Chennai &bull; IST)</span>
                </span>
              </div>
              <span
                className="text-3xl sm:text-4xl text-[#F6E3B4] leading-none font-bold"
                style={{ fontFamily: "'Tangerine', cursive", letterSpacing: '0.02em' }}
              >
                {submittedNote.name}
              </span>
            </div>
          </div>

          {/* Reset button */}
          <button
            type="button"
            onClick={handleResetForm}
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#7A1F3D] hover:bg-[#8F2548] text-white text-[15px] sm:text-[16px] font-medium tracking-wide shadow-lg hover:shadow-xl transition-all cursor-pointer gb-focus-visible"
          >
            <Icon name="refresh" className="w-4 h-4" />
            <span>Write another blessing</span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full my-6">
      <div className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-b from-[#24060E] via-[#1A050B] to-[#120207] border border-[#C9A24B]/40 shadow-[0_16px_50px_rgba(36,6,14,0.35)] p-6 sm:p-10 lg:p-12 text-white">
        
        {/* Subtle Background Atmosphere Glow */}
        <div className="absolute inset-0 bg-radial-at-t from-[#7A1F3D]/25 via-transparent to-transparent pointer-events-none" />

        {/* Traditional Kerala Kasavu Gold Ribbon Border along Top & Bottom */}
        <div
          className="absolute top-0 left-0 right-0 h-1.5 border-b border-[#C9A24B]/60 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, #C9A24B 1px, transparent 1px, transparent 2px, #E5C158 2px, #E5C158 4px, transparent 4px),
              repeating-linear-gradient(45deg, #C9A24B 0, #C9A24B 2px, transparent 2px, transparent 6px)
            `,
            backgroundSize: '100% 4px, 6px 6px'
          }}
        />
        <div
          className="absolute bottom-0 left-0 right-0 h-1.5 border-t border-[#C9A24B]/60 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to bottom, #C9A24B 1px, transparent 1px, transparent 2px, #E5C158 2px, #E5C158 4px, transparent 4px),
              repeating-linear-gradient(45deg, #C9A24B 0, #C9A24B 2px, transparent 2px, transparent 6px)
            `,
            backgroundSize: '100% 4px, 6px 6px'
          }}
        />

        {/* =================================================================== */}
        {/* CENTERED HEADER: HEART ICON, TITLE, COUPLE NAMES, DATE & STAR       */}
        {/* =================================================================== */}
        <div className="relative z-10 text-center mb-8 sm:mb-10">
          {/* Outline Heart Icon in soft blush */}
          <div className="flex justify-center mb-3">
            <Icon name="love" className="w-5 h-5 text-[#F4A6B8]" />
          </div>

          {/* Title */}
          <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl text-white font-normal tracking-normal leading-tight">
            Write a wedding blessing
          </h3>

          {/* Subtitle in soft blush cursive script & date */}
          <p
            className="text-xl sm:text-2xl text-[#F4A6B8] mt-1.5 font-bold"
            style={{ fontFamily: "'Tangerine', 'Mrs Saint Delafield', cursive" }}
          >
            {coupleNames}
          </p>
          <p className="text-xs sm:text-sm text-white/60 tracking-wider mt-0.5 font-sans">
            {weddingDate}
          </p>

          {/* Star Accent */}
          <div className="flex justify-center mt-3">
            <span className="text-xs text-[#E5C158]/90 select-none">★</span>
          </div>
        </div>

        {/* =================================================================== */}
        {/* 2-COLUMN MINIMALIST FORM                                            */}
        {/* =================================================================== */}
        <form onSubmit={handleSubmit} noValidate className="relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* --------------------------------------------------------------- */}
            {/* LEFT COLUMN: Full Name, Relationship & Signature Preview        */}
            {/* --------------------------------------------------------------- */}
            <div className="lg:col-span-6 space-y-7 flex flex-col justify-between">
              
              {/* Full Name */}
              <div>
                <label htmlFor="gb-name" className="block text-[15px] sm:text-[16px] font-medium text-white mb-1.5">
                  Your full name <span className="text-[#F4A6B8]" aria-hidden="true">*</span>
                </label>
                <input
                  id="gb-name"
                  ref={nameInputRef}
                  type="text"
                  maxLength={80}
                  required
                  value={name}
                  onChange={handleNameChange}
                  placeholder="e.g. Ananya Nair"
                  aria-invalid={!!nameError}
                  aria-describedby={nameError ? 'gb-name-error' : undefined}
                  className={`w-full px-0 py-2.5 bg-transparent border-0 border-b text-[17px] sm:text-[18px] transition-colors text-white placeholder:text-white/35 outline-none rounded-none ${
                    nameError
                      ? 'border-b-red-400'
                      : 'border-b-white/25 focus:border-b-[#E5C158] hover:border-b-white/40'
                  }`}
                />
                {nameError && (
                  <p id="gb-name-error" role="alert" className="text-red-400 text-sm mt-1.5 font-medium">
                    {nameError}
                  </p>
                )}
              </div>

              {/* Relationship select */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label htmlFor="gb-relation" className="text-[15px] sm:text-[16px] font-medium text-white">
                    How do you know the couple?
                  </label>
                  <span className="text-xs text-white/50 font-normal">optional</span>
                </div>
                <div className="relative">
                  <select
                    id="gb-relation"
                    value={relation}
                    onChange={(e) => setRelation(e.target.value)}
                    className="w-full px-0 py-2.5 bg-transparent border-0 border-b border-b-white/25 hover:border-b-white/40 focus:border-b-[#E5C158] text-[17px] sm:text-[18px] transition-colors text-white outline-none rounded-none appearance-none cursor-pointer pr-8"
                  >
                    {RELATION_OPTIONS.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#24060E] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                  <div className="absolute right-1 top-1/2 -translate-y-1/2 pointer-events-none text-white/70">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20" aria-hidden="true">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Signature Live Preview */}
              <SignaturePreview name={name} />

              {/* Inline Minimalist Posting Timestamp Row */}
              <div className="flex items-center justify-between pt-2 text-xs text-white/60">
                <div className="flex items-center gap-2">
                  <Icon name="clock" className="w-3.5 h-3.5 text-white/50 shrink-0" />
                  <div>
                    <span className="text-[11px] text-white/50 block">Posting time, Chennai (IST)</span>
                    <span className="text-xs sm:text-[13px] font-mono text-white/90 font-medium">
                      {currentTimeIST}
                    </span>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-emerald-500/15 text-emerald-300 border border-emerald-500/25">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                  <span>Live</span>
                </span>
              </div>

            </div>

            {/* --------------------------------------------------------------- */}
            {/* RIGHT COLUMN: Blessing Message, Quick-Starts & Submit Button    */}
            {/* --------------------------------------------------------------- */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label htmlFor="gb-message" className="text-[15px] sm:text-[16px] font-medium text-white">
                    Your blessing message <span className="text-[#F4A6B8]" aria-hidden="true">*</span>
                  </label>
                  <span className="text-xs text-white/50 font-mono">
                    {message.length} / 800
                  </span>
                </div>

                <textarea
                  id="gb-message"
                  ref={messageInputRef}
                  rows={5}
                  maxLength={800}
                  required
                  value={message}
                  onChange={handleMessageChange}
                  placeholder="Write your heartfelt blessings, prayers, or loving memories for the couple..."
                  aria-invalid={!!messageError}
                  aria-describedby={messageError ? 'gb-message-error' : undefined}
                  className={`w-full px-0 py-2 bg-transparent border-0 border-b text-[17px] sm:text-[18px] transition-colors text-white placeholder:text-white/35 outline-none rounded-none resize-y italic ${
                    messageError
                      ? 'border-b-red-400'
                      : 'border-b-white/25 focus:border-b-[#E5C158] hover:border-b-white/40'
                  }`}
                  style={{ fontFamily: "'Tangerine', 'Gayathri', 'Noto Serif Malayalam', cursive, sans-serif", fontSize: '28px', lineHeight: '1.4', fontWeight: 700 }}
                />

                {messageError && (
                  <p id="gb-message-error" role="alert" className="text-red-400 text-sm mt-1.5 font-medium">
                    {messageError}
                  </p>
                )}

                {/* Quick-start message chips */}
                <div className="mt-4 flex items-center gap-2 flex-wrap">
                  <span className="text-xs text-white/60 font-medium mr-1">
                    Quick start:
                  </span>
                  {QUICK_STARTS.map((qs) => (
                    <button
                      type="button"
                      key={qs.label}
                      onClick={() => handleQuickStart(qs.text)}
                      className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-white/5 hover:bg-white/10 text-white/90 border border-white/15 hover:border-[#E5C158]/60 transition-all cursor-pointer gb-focus-visible shadow-xs"
                    >
                      {qs.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bottom Action Row */}
              <div className="pt-6 border-t border-white/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                  Your blessing will be posted on the wall for everyone to cherish.
                </p>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-[#7A1F3D] hover:bg-[#8F2548] active:scale-95 text-white text-[15px] sm:text-[16px] font-medium tracking-wide shadow-lg hover:shadow-xl transition-all cursor-pointer shrink-0 gb-focus-visible"
                >
                  <Icon name="paper-plane" className="w-4 h-4" />
                  <span>Send blessing</span>
                </button>
              </div>

            </div>

          </div>
        </form>

      </div>
    </div>
  );
}
