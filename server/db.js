import { DatabaseSync } from 'node:sqlite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DB_PATH = path.join(__dirname, '..', 'wedding_wishes.db');
const db = new DatabaseSync(DB_PATH);

// Initialize tables
export function initDb() {
  db.exec(`
    CREATE TABLE IF NOT EXISTS wishes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      relation TEXT NOT NULL DEFAULT 'Well-wisher',
      message TEXT NOT NULL,
      emoji TEXT NOT NULL DEFAULT '💖',
      likes INTEGER NOT NULL DEFAULT 0,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    );
    CREATE INDEX IF NOT EXISTS idx_wishes_created ON wishes(created_at DESC);
  `);

  // Check if we should seed default blessing wishes
  const countStmt = db.prepare('SELECT COUNT(*) as count FROM wishes');
  const result = countStmt.get();
  if (result && result.count === 0) {
    const seedStmt = db.prepare(`
      INSERT INTO wishes (name, relation, message, emoji, likes, created_at)
      VALUES (?, ?, ?, ?, ?, datetime('now', ?))
    `);

    const seeds = [
      {
        name: 'Hayzen & Adithi',
        relation: 'Family',
        message: 'Wishing dear Abhirami chechi & Ajeesh ettan an eternal lifetime of love, laughter, and endless happiness! So thrilled for you both! ✨💍❤️',
        emoji: '💐',
        likes: 12,
        offset: '-2 hours'
      },
      {
        name: 'Adithya',
        relation: 'Family',
        message: 'Heartiest congratulations to the most gorgeous couple! May your journey ahead be blessed with boundless joy and prosperity. 🌸🥂',
        emoji: '✨',
        likes: 8,
        offset: '-1 hour'
      },
      {
        name: 'K. Sanjayan & Leena. R',
        relation: 'Bride\'s Parents',
        message: 'With all our heart and blessings for our beloved daughter Abhirami and dearest Ajeesh as they begin this divine chapter together. May Lord Gurudev bless you always.',
        emoji: '🙏',
        likes: 24,
        offset: '-30 minutes'
      }
    ];

    for (const item of seeds) {
      seedStmt.run(item.name, item.relation, item.message, item.emoji, item.likes, item.offset);
    }
    console.log('✅ Initial wedding blessings seeded into SQLite database.');
  }
}

export function getAllWishes() {
  const stmt = db.prepare('SELECT * FROM wishes ORDER BY id DESC');
  return stmt.all();
}

export function addWish({ name, relation, message, emoji }) {
  const cleanName = (name || '').trim().slice(0, 100);
  const cleanRelation = (relation || 'Well-wisher').trim().slice(0, 50);
  const cleanMessage = (message || '').trim().slice(0, 1000);
  const cleanEmoji = (emoji || '💖').trim().slice(0, 10);

  if (!cleanName || !cleanMessage) {
    throw new Error('Name and message are required.');
  }

  const stmt = db.prepare(`
    INSERT INTO wishes (name, relation, message, emoji, likes, created_at)
    VALUES (?, ?, ?, ?, 0, CURRENT_TIMESTAMP)
  `);
  const info = stmt.run(cleanName, cleanRelation, cleanMessage, cleanEmoji);
  
  const getStmt = db.prepare('SELECT * FROM wishes WHERE id = ?');
  return getStmt.get(info.lastInsertRowid);
}

export function likeWish(id) {
  const stmt = db.prepare('UPDATE wishes SET likes = likes + 1 WHERE id = ?');
  stmt.run(Number(id));
  const getStmt = db.prepare('SELECT likes FROM wishes WHERE id = ?');
  return getStmt.get(Number(id));
}

export function getStats() {
  const countStmt = db.prepare('SELECT COUNT(*) as totalWishes, COALESCE(SUM(likes), 0) as totalLikes FROM wishes');
  return countStmt.get();
}

export default {
  initDb,
  getAllWishes,
  addWish,
  likeWish,
  getStats
};
