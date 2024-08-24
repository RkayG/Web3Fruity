// Import necessary modules
const express = require('express');
const router = express.Router();
const TokenFarming = require('../models/TokenFarmingModel');
const syncTokenFarmsWithDatabase = require('../services/tokenfarmingService');
const cacheMiddleware = require('../middleware/cacheMiddleware');

// Route to sync farming tokens from Contentful
router.post('/sync-contentful-farm-tokens', async (req, res) => {
  try {
    await syncTokenFarmsWithDatabase();
    res.status(200).json({ message: 'Farming tokens synced successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Route to retrieve all farming tokens
router.get('/farm-tokens', cacheMiddleware(3000), async (req, res) => {
  try {
    let limit = parseInt(req.query.limit); // Parse 'limit' query parameter
    if (isNaN(limit)) {
      limit = 12; // Set a default limit if 'limit' query parameter is not provided or invalid
    }

    const tokens = await TokenFarming.find().sort({ createdAt: -1 }).limit(limit); // Use the limit in the MongoDB query
    console.log('farm-tokens fetched');
    res.json(tokens);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to retrieve a specific farming token by slug
router.get('/farm-tokens/:slug', cacheMiddleware(3000), async (req, res) => {
  const { slug } = req.params;
  try {
    const token = await TokenFarming.findOne({ slug: slug });
    if (token) {
      res.json(token);
    } else {
      res.status(404).send('farming token not found');
    }
  } catch (error) {
    console.error('Error fetching farming token  by slug:', error);
    res.status(500).send('Internal server error');
  }
});

// Route to retrieve a specific farming token by ID
router.get('/farm-tokens/:id', cacheMiddleware(3000), async (req, res) => {
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

// function to clear cache
const clearCache = (key) => {
  cache.del(key);
};

// Route to create a new farming token
router.post('/farm-tokens',  async (req, res) => {
  try {
    const token = await TokenFarming.create(req.body);
    console.log(token);
    clearCache('/farm-tokens'); // Clear the cache for the main listing
    res.status(201).json(token);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// Route to update a specific farming token by ID
router.patch('/farm-tokens/:id', async (req, res) => {
  try {
    const token = await TokenFarming.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!token) {
      return res.status(404).json({ message: 'Farming Token not found' });
    }
    clearCache('/farm-tokens'); // Clear the cache for the main listing
    clearCache(`/farm-tokens/${cryptoNews.id}`); // Clear the cache for this specific farm-token item
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
    clearCache('/farm-tokens'); // Clear the cache for the main listing
    clearCache(`/farm-tokens/${cryptoNews.id}`); // Clear the cache for this specific farm-token item
    res.json({ message: 'Farming Token deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
