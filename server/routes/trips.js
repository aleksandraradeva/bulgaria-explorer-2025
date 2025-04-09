const express = require('express');
const router = express.Router();
const Trip = require('../models/Trip');
const User = require('../models/User');

const jwt = require('jsonwebtoken');
const JWT_SECRET = '382159e47565ce0bf47d9f87d598a872b347bf898a5694279e959d1f7c537086';


// READ all trips
router.get('/', async (req, res) => {
  try {
    const trips = await Trip.find().sort({ createdAt: -1 });
    res.json(trips);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


//READ one trip
router.get('/:id/details', async (req, res) => {

  try {
    const trip = await Trip.findById(req.params.id);
    if (!trip) return res.status(404).json({ error: 'Trip not found' });
    res.json(trip);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});


// CREATE new trip
router.post('/create', async (req, res) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ error: 'No token provided' });
    }

    const token = authHeader.split(' ')[1]; 
    const decoded = jwt.verify(token, JWT_SECRET);

    const userId = decoded.userId;

    const newTrip = new Trip({
      ...req.body,
      author: userId, 
    });

    await newTrip.save();
    res.status(201).json(newTrip);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
  });


// UPDATE trip
router.put('/:id/edit', async (req, res) => {
    try {
      const updatedTrip = await Trip.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!updatedTrip) return res.status(404).json({ error: 'Trip not found' });
      res.json(updatedTrip);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  
  // DELETE: trip
  router.delete('/:id/delete', async (req, res) => {
    try {
      const deletedTrip = await Trip.findByIdAndDelete(req.params.id);
      if (!deletedTrip) return res.status(404).json({ error: 'Trip not found' });
      res.json({ message: 'Trip deleted' });
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  // GET MY TRIPS
  router.get('/mytrips', async (req, res) => {
    try {
      const authHeader = req.headers.authorization;
  
      if (!authHeader) {
        return res.status(401).json({ error: 'No token provided' });
      }
  
      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, JWT_SECRET);
      const userId = decoded.userId;
  
      const myTrips = await Trip.find({ author: userId }).sort({ createdAt: -1 });
  
      res.status(200).json(myTrips);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });

  
  // GET MY WISHLIST TRIPS
  router.get('/mywishlist', async (req, res) => {
    try {
      const authHeader = req.headers.authorization;
  
      if (!authHeader) {
        return res.status(401).json({ error: 'No token provided' });
      }
  
      const token = authHeader.split(' ')[1];
      const decoded = jwt.verify(token, JWT_SECRET);
      const userId = decoded.userId;
  
      
      const user = await User.findById(userId).populate('wishlist'); 
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      res.status(200).json(user.wishlist);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  });
  

  module.exports = router;