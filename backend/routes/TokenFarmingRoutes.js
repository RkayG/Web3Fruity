// Import necessary modules
const express = require('express');
const router = express.Router();
const TokenFarming = require('../models/TokenFarmingModel');

// Route to create a new farming token
router.post('/farm-tokens', async (req, res) => {
  try {
    const token = await TokenFarming.create(req.body);
    console.log(token);
    res.status(201).json(token);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to retrieve all farming tokens
router.get('/farm-tokens', async (req, res) => {
  try {
    let limit = parseInt(req.query.limit); // Parse 'limit' query parameter
    if (isNaN(limit)) {
      limit = 12; // Set a default limit if 'limit' query parameter is not provided or invalid
    }

    const tokens = await TokenFarming.find().limit(limit); // Use the limit in the MongoDB query
    console.log(tokens);
    res.json(tokens);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Route to retrieve a specific farming token by ID
router.get('/farm-tokens/:id', async (req, res) => {
  try {
    const token = await TokenFarming.findById(req.params.id);
    if (!token) {
      return res.status(404).json({ message: 'Farming Token not found' });
    }
    res.json(token);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to update a specific farming token by ID
router.patch('/farm-tokens/:id', async (req, res) => {
  try {
    const token = await TokenFarming.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!token) {
      return res.status(404).json({ message: 'Farming Token not found' });
    }
    res.json(token);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to delete a specific farming token by ID
router.delete('/farm-tokens/:id', async (req, res) => {
  try {
    const token = await TokenFarming.findByIdAndDelete(req.params.id);
    if (!token) {
      return res.status(404).json({ message: 'Farning Token not found' });
    }
    res.json({ message: 'Farming Token deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
