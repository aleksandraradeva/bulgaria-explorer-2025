const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
// const userRoutes = require('./routes/userRoutes');

const app = express();
const PORT = 3000;

// MongoDB Connect
mongoose.connect('mongodb://127.0.0.1:27017/bulgaria')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
// app.use('/api/users', userRoutes);

// Server Start
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));