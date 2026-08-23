const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');

// GET /protected/profile -> Protected by authenticateToken middleware
router.get('/profile', authenticateToken, (req, res) => {
  // Returns user metadata attached by middleware
  return res.status(200).json({
    message: 'Profile data retrieved successfully',
    user: {
      id: req.user.id,
      email: req.user.email,
      created_at: req.user.created_at
    }
  });
});

module.exports = router;