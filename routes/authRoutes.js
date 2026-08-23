const express = require('express');
const router = express.Router();
const supabase = require('../config/supabase');

// POST /auth/signup -> Mounted at /auth, so full route is POST /auth/signup
router.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  // 1. Input Validation
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  // 2. Call Supabase Auth SDK
  const { data, error } = await supabase.auth.signUp({ email, password });
  console.log('Supabase signUp response:', data, error); // Debugging line

  // 3. Handle errors (e.g. user already registered, password too weak)
  if (error) {
    return res.status(400).json({ error: error.message });
  }

  // 4. Return status 201 with user object
  return res.status(201).json(data.user);
});

// POST /auth/login -> Mounted at /auth, so full route is POST /auth/login
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  // 1. Input Validation
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  // 2. Authenticate with Supabase
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });

  // 3. Handle invalid credentials
  if (error) {
    return res.status(401).json({ error: 'Invalid login credentials' });
  }

  // 4. Return status 200 with access and refresh tokens
  return res.status(200).json({
    access_token: data.session.access_token,
    refresh_token: data.session.refresh_token
  });
});

module.exports = router;