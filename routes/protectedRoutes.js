const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');

// GET /protected/profile
router.get('/profile', authenticateToken, (req, res) => {
  return res.status(200).json({
    message: 'Profile data retrieved successfully',
    user: {
      id: req.user.id,
      email: req.user.email,
      created_at: req.user.created_at
    }
  });
});

// GET /protected/dashboard -> Reuses authenticateToken middleware
router.get('/dashboard', authenticateToken, (req, res) => {
  return res.status(200).json({
    message: `Welcome to your dashboard, ${req.user.email}!`,
    stats: { logins: 1, status: 'active' }
  });
});

module.exports = router;