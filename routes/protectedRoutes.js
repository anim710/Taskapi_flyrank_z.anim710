const express = require('express');
const router = express.Router();
const authenticateToken = require('../middleware/authMiddleware');

/**
 * @swagger
 * /protected/profile:
 *   get:
 *     summary: Get profile of authenticated user
 *     tags: [Protected]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: User profile retrieved
 *       401:
 *         description: Unauthorized
 */
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

/**
 * @swagger
 * /protected/dashboard:
 *   get:
 *     summary: Access authenticated dashboard
 *     tags: [Protected]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Dashboard data
 *       401:
 *         description: Unauthorized
 */
router.get('/dashboard', authenticateToken, (req, res) => {
  return res.status(200).json({
    message: `Welcome to your dashboard, ${req.user.email}!`,
    stats: { logins: 1, status: 'active' }
  });
});

module.exports = router;