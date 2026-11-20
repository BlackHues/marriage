import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import db from './db.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Initialize SQLite database
db.initDb();

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.get('/api/wishes', (req, res) => {
  try {
    const wishes = db.getAllWishes();
    res.json({ success: true, data: wishes });
  } catch (err) {
    console.error('Error fetching wishes:', err);
    res.status(500).json({ success: false, error: 'Failed to retrieve wishes' });
  }
});

app.post('/api/wishes', (req, res) => {
  try {
    const { name, relation, message, emoji } = req.body;
    if (!name || !message) {
      return res.status(400).json({ success: false, error: 'Name and message are required' });
    }
    const newWish = db.addWish({ name, relation, message, emoji });
    res.status(201).json({ success: true, data: newWish });
  } catch (err) {
    console.error('Error creating wish:', err);
    res.status(500).json({ success: false, error: err.message || 'Failed to save wish' });
  }
});

app.post('/api/wishes/:id/like', (req, res) => {
  try {
    const { id } = req.params;
    const { userToken } = req.body || {};
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '';
    const result = db.likeWish(id, userToken, ip);
    res.json(result);
  } catch (err) {
    console.error('Error liking wish:', err);
    res.status(500).json({ success: false, error: 'Failed to update like' });
  }
});

app.get('/api/stats', (req, res) => {
  try {
    const stats = db.getStats();
    res.json({
      success: true,
      data: {
        ...stats,
        weddingDate: '2027-01-24T10:05:00+05:30',
        couple: 'Abhirami S L & Ajeesh R',
        venue: 'Sivagiri Sarada Mutt, Varkala'
      }
    });
  } catch (err) {
    console.error('Error getting stats:', err);
    res.status(500).json({ success: false, error: 'Failed to get stats' });
  }
});

// Serve static frontend in production (dist directory)
const distPath = path.join(__dirname, '..', 'dist');
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath, {
    setHeaders: (res, filePath) => {
      if (filePath.endsWith('.html')) {
        res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
      }
    }
  }));
  app.get('*', (req, res) => {
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    res.sendFile(path.join(distPath, 'index.html'));
  });
}

// Start Server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`✨ Wedding Website Server running on http://localhost:${PORT}`);
});
