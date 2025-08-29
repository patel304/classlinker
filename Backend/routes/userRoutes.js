import express from 'express';
import db from '../config/db.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const result = await db.execute("SELECT * FROM users"); // 👈 use db.execute
    res.json(result.rows);
  } catch (err) {
    console.error("Oracle Error:", err);
    res.status(500).json({ error: "DB error" });
  }
});

export default router;
