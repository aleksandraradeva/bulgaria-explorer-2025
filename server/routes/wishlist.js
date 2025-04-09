const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Trip = require('../models/Trip');
const jwt = require('jsonwebtoken');

const JWT_SECRET = '382159e47565ce0bf47d9f87d598a872b347bf898a5694279e959d1f7c537086';

const verifyToken = (req) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new Error('No token provided');
  }

  const token = authHeader.split(' ')[1];
  const decoded = jwt.verify(token, JWT_SECRET);
  return decoded.userId;
};

// Add trip to wishlist
router.post('/:tripId/add', async (req, res) => {
  try {
    const userId = verifyToken(req);
    const { tripId } = req.params;

    const user = await User.findById(userId);

    if (!user.wishlist.includes(tripId)) {
      user.wishlist.push(tripId);
      await user.save();
    }

    res.json({ message: 'Trip added to wishlist' });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});

// Trip von der Wishlist entfernen
router.post('/:tripId/remove', async (req, res) => {
  try {
    const userId = verifyToken(req);
    const { tripId } = req.params;

    const user = await User.findById(userId);

    user.wishlist = user.wishlist.filter(
      (id) => id.toString() !== tripId
    );
    await user.save();

    res.json({ message: 'Trip removed from wishlist' });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});


// Wishlist eines Users abrufen
router.get('/', async (req, res) => {
  try {
    const userId = verifyToken(req);

    const user = await User.findById(userId).populate('wishlist');
    res.json(user.wishlist);
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});

module.exports = router;