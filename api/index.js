import express from 'express';
import cors from 'cors';
import * as db from '../server/db.js';

const app = express();
app.use(cors());
app.use(express.json());

// Initialize SQLite database
try {
  db.initDb();
} catch (err) {
  console.warn('Database init warning in serverless:', err);
}

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
    const result = db.likeWish(id);
    res.json({ success: true, likes: result ? result.likes : 0 });
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

export default app;
