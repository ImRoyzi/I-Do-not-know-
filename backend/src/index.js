const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

const funMessages = [
  '✨ Your app is officially in sparkle mode.',
  '🌈 A tiny bit of magic is already live.',
  '🚀 This starter is ready for your next big idea.',
  '🎉 The vibe is strong and the future looks bright.',
];

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Backend is running' });
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from the backend!' });
});

app.get('/api/fun', (req, res) => {
  const message = funMessages[Math.floor(Math.random() * funMessages.length)];
  res.json({ message, emoji: '✨' });
});

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
