const express = require('express');
const router = express.Router();

// GET /protected/profile -> Protected gate (Stage 2: Returns 401 if no token)
router.get('/profile', async (req, res) => {
  const authHeader = req.headers.authorization;

  // Reject if missing Authorization header or Bearer prefix
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Access token required' });
  }

  // Temporary Stage 2 placeholder before full JWT verification in Stage 3
  return res.status(200).json({ message: 'Token detected (Unverified for Stage 2)' });
});

module.exports = router;