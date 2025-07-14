// backend/server.js

const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Dummy route
app.get('/api/status', (req, res) => {
  res.json({ message: 'Backend is running!' });
});

// Registration route
app.post('/api/register', (req, res) => {
  const { nom, email, password } = req.body;
  console.log('New registration:', { nom, email, password });
  res.send('Inscription réussie (simulée)!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
