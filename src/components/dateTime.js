/**
 * Format timestamp in proper Indian Standard Time (IST - Chennai / Kolkata)
 * Format: "20 Nov, 03:26 pm"
 */
export function formatIndianDateTime(dateInput) {
  if (!dateInput) return '';
  try {
    let str = String(dateInput).trim();
    // If SQLite DATETIME format (YYYY-MM-DD HH:MM:SS) without T/Z, append Z so parsed as UTC
    if (!str.includes('T') && !str.includes('Z') && str.includes(' ')) {
      str = str.replace(' ', 'T') + 'Z';
    }
    const d = new Date(str);
    if (isNaN(d.getTime())) return '';
    return new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).format(d);
  } catch (e) {
    return '';
  }
}

/**
 * Get current Indian Standard Time formatted string
 */
export function getCurrentIndianDateTime() {
  return formatIndianDateTime(new Date().toISOString());
}
