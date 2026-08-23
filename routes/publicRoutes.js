const express = require('express');
const router = express.Router();

/**
 * @swagger
 * /public/info:
 *   get:
 *     summary: Publicly accessible information
 *     tags: [Public]
 *     responses:
 *       200:
 *         description: Welcome message
 */
router.get('/info', (req, res) => {
  return res.status(200).json({ message: 'Welcome stranger! This info is public.' });
});

module.exports = router;