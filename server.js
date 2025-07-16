const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve built frontend files from bibliosync-frontend/dist
app.use(express.static(path.join(__dirname, 'bibliosync-frontend', 'dist')));

// Catch-all route for SPA (for React Router)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'bibliosync-frontend', 'dist', 'index.html'));
});

// API routes
app.get('/api/status', (req, res) => {
  res.json({ message: 'Backend is running!' });
});

app.post('/api/register', (req, res) => {
  const { nom, email, password } = req.body;
  console.log('New registration:', { nom, email, password });
  res.send('Inscription réussie (simulée)!');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
