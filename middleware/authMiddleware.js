const supabase = require('../config/supabase');

const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;

  // 1. Check for Authorization header and Bearer format
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Access token required' });
  }

  const token = authHeader.split(' ')[1];

  // 2. Verify token with Supabase Auth SDK
  const { data: { user }, error } = await supabase.auth.getUser(token);

  // 3. Reject if invalid or expired token
  if (error || !user) {
    return res.status(401).json({ error: 'Invalid or expired token' });
  }

  // 4. Attach verified user to request object and proceed
  req.user = user;
  next();
};

module.exports = authenticateToken;