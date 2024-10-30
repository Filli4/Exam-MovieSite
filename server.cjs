const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the dist directory (after Vite build)
app.use(express.static(path.join(__dirname, 'dist')));

// Handle React routing, return all requests to the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(5173, () => {
  console.log('Server is running on http://localhost:5173/');
});
