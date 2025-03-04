const express = require('express');
const router = express.Router();

// Handle login requests
router.post('/', (req, res) => {
  const { username, password } = req.body;
  // Here you would typically check the credentials against a database
  if (username === 'admin' && password === 'password') {
    res.json({ message: 'Login successful' });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
