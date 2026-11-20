import { DatabaseSync } from 'node:sqlite';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DB_PATH = process.env.VERCEL
  ? '/tmp/wedding_wishes.db'
  : path.join(__dirname, '..', 'wedding_wishes.db');
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

    CREATE TABLE IF NOT EXISTS wish_likes (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      wish_id INTEGER NOT NULL,
      user_token TEXT NOT NULL,
      ip TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
      UNIQUE(wish_id, user_token)
    );
    CREATE INDEX IF NOT EXISTS idx_wish_likes_lookup ON wish_likes(wish_id, user_token);
  `);
}

export function clearDb() {
  db.exec(`
    DELETE FROM wishes;
    DELETE FROM sqlite_sequence WHERE name='wishes';
  `);
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

export function likeWish(id, userToken, ip) {
  const wishId = Number(id);
  const token = (userToken || '').trim() || (ip || 'anonymous');

  // Check if this user has already given love to this wish
  const checkStmt = db.prepare('SELECT id FROM wish_likes WHERE wish_id = ? AND user_token = ?');
  const existing = checkStmt.get(wishId, token);

  if (existing) {
    // Already liked by this user! Do not increment again.
    const getStmt = db.prepare('SELECT likes FROM wishes WHERE id = ?');
    const row = getStmt.get(wishId);
    return { success: false, alreadyLiked: true, likes: row ? row.likes : 0 };
  }

  // Record this like in wish_likes
  try {
    const insertStmt = db.prepare('INSERT INTO wish_likes (wish_id, user_token, ip) VALUES (?, ?, ?)');
    insertStmt.run(wishId, token, ip || '');
  } catch (err) {
    // If unique constraint triggers concurrently
    const getStmt = db.prepare('SELECT likes FROM wishes WHERE id = ?');
    const row = getStmt.get(wishId);
    return { success: false, alreadyLiked: true, likes: row ? row.likes : 0 };
  }

  // Increment wish likes
  const stmt = db.prepare('UPDATE wishes SET likes = likes + 1 WHERE id = ?');
  stmt.run(wishId);

  const getStmt = db.prepare('SELECT likes FROM wishes WHERE id = ?');
  const updated = getStmt.get(wishId);
  return { success: true, alreadyLiked: false, likes: updated ? updated.likes : 0 };
}

export function getStats() {
  const countStmt = db.prepare('SELECT COUNT(*) as totalWishes, COALESCE(SUM(likes), 0) as totalLikes FROM wishes');
  return countStmt.get();
}

export default {
  initDb,
  clearDb,
  getAllWishes,
  addWish,
  likeWish,
  getStats
};
