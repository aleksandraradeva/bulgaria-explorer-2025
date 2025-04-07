const express = require('express');
const router = express.Router();
const Trip = require('../models/Trip');


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
      const newTrip = new Trip(req.body);
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
  
  module.exports = router;