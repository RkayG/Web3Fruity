// Import necessary modules
const express = require('express');
const router = express.Router();
const Airdrop = require('../models/AirdropModel');

// Route to create a new airdrop
router.post('/airdrops', async (req, res) => {
  try {
    const airdrop = await Airdrop.create(req.body);
    console.log(airdrop);
    res.status(201).json(airdrop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to retrieve all airdrops
router.get('/airdrops', async (req, res) => {
  try {
    const airdrops = await Airdrop.find();
    res.json(airdrops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to retrieve a specific airdrop by ID
router.get('/airdrops/:id', async (req, res) => {
  try {
    const airdrop = await Airdrop.findById(req.params.id);
    if (!airdrop) {
      return res.status(404).json({ message: 'Airdrop not found' });
    }
    res.json(airdrop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to update a specific airdrop by ID
router.patch('/airdrops/:id', async (req, res) => {
  try {
    const airdrop = await Airdrop.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!airdrop) {
      return res.status(404).json({ message: 'Airdrop not found' });
    }
    res.json(airdrop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to delete a specific airdrop by ID
router.delete('/airdrops/:id', async (req, res) => {
  try {
    const airdrop = await Airdrop.findByIdAndDelete(req.params.id);
    if (!airdrop) {
      return res.status(404).json({ message: 'Airdrop not found' });
    }
    res.json({ message: 'Airdrop deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
