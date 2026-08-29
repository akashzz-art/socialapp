const express = require('express');
const fetch = require('node-fetch');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/joke', async (req, res) => {
  try {
    const response = await fetch('https://official-joke-api.appspot.com/random_joke');
    if (!response.ok) return res.status(502).json({ error: 'Bad response from joke provider' });
    const data = await response.json();
    res.json({ id: data.id, type: data.type, setup: data.setup, punchline: data.punchline });
  } catch (err) {
    console.error('Error fetching joke:', err);
    res.status(500).json({ error: 'Failed to fetch joke' });
  }
});

// Health check
app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.listen(PORT, () => {
  console.log(`Joke generator running on http://localhost:${PORT}`);
});
