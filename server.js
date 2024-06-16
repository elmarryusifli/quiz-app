require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Your personal access token
const PERSONAL_ACCESS_TOKEN = process.env.PERSONAL_ACCESS_TOKEN;

app.use(bodyParser.json());

// Middleware to check the token
function authenticateToken(req, res, next) {
  const token = req.headers['authorization'];
  if (token === PERSONAL_ACCESS_TOKEN) {
    next();
  } else {
    res.sendStatus(403); // Forbidden
  }
}

// Login endpoint
app.post('/login', (req, res) => {
  const { token } = req.body;
  if (token === PERSONAL_ACCESS_TOKEN) {
    res.json({ message: 'Authenticated', token });
  } else {
    res.status(403).json({ message: 'Forbidden' });
  }
});

// Protected route
app.get('/protected', authenticateToken, (req, res) => {
  res.json({ message: 'This is a protected route' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
