const express = require('express');
const router = express.Router();
const supabase = require('../config/supabase');
const authenticateToken = require('../middleware/authMiddleware');

// Existing POST /auth/signup ...
// Existing POST /auth/login ...

// POST /auth/logout -> Invalidates session in Supabase
router.post('/logout', authenticateToken, async (req, res) => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  // Returns 204 No Content on successful logout
  return res.status(204).send();
});

module.exports = router;