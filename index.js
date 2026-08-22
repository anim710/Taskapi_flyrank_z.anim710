require('dotenv').config();
const express = require('express');
const supabase = require('./config/supabase');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running and connected to Supabase on port ${PORT}`);
});