const express = require('express');
const router = express.Router();
const Airdrop = require('../models/AirdropModel');
const syncAirdropsWithDatabase = require('../services/airdropService');
const NodeCache = require('node-cache');

// Initialize the cache with a TTL (Time to Live) of 30 days
const cache = new NodeCache({ stdTTL: 2592000 });

// Route to sync airdrops from Contentful
router.post('/sync-contentful-airdrops', async (req, res) => {
  try {
    await syncAirdropsWithDatabase();
    cache.flushAll();  // Clear cache when syncing to ensure fresh data
    res.status(200).json({ message: 'Airdrops synced successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to create a new airdrop
router.post('/airdrops', async (req, res) => {
  try {
    const airdrop = await Airdrop.create(req.body);
    cache.flushAll(); // Clear cache when new airdrop is added
    res.status(201).json(airdrop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to retrieve all airdrops
router.get('/airdrops', async (req, res) => {
  try {
    let limit = parseInt(req.query.limit) || 12;
    let page = parseInt(req.query.page) || 1;

    const cacheKey = `airdrops_${limit}_${page}`;
    let cachedData = cache.get(cacheKey);

    if (cachedData) {
      console.log('Serving from cache');
      return res.json(cachedData);
    }

    const airdrops = await Airdrop.find()
      .sort({ createdAt: -1 })
      .limit(limit)
      .skip((page - 1) * limit);
    
    const totalAirdrops = await Airdrop.countDocuments();
    const totalPages = Math.ceil(totalAirdrops / limit);

    const responseData = { airdrops, totalPages };
    cache.set(cacheKey, responseData); // Cache the data

    res.json(responseData);
    console.log('All airdrops page 1 fetched');
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to retrieve a specific airdrop by slug
router.get('/airdrops/:slug', async (req, res) => {
  const { slug } = req.params;

  const cacheKey = `airdrop_${slug}`;
  let cachedData = cache.get(cacheKey);

  if (cachedData) {
    console.log('Serving airdrop from cache with slug');
    return res.json(cachedData);
  }

  try {
    const airdrop = await Airdrop.findOne({ slug: slug });
    if (airdrop) {
      cache.set(cacheKey, airdrop); // Cache the data
      res.json(airdrop);
      console.log('Airdrop fetched with slug');
    } else {
      res.status(404).send('Airdrop not found');
    }
  } catch (error) {
    console.error('Error fetching airdrop by slug:', error);
    res.status(500).send('Internal server error');
  }
});

// Route to retrieve a specific airdrop by ID
router.get('/airdrops/:id', async (req, res) => {
  const cacheKey = `airdrop_${req.params.id}`;
  let cachedData = cache.get(cacheKey);

  if (cachedData) {
    console.log('Serving airdrop from cache with ID');
    return res.json(cachedData);
  }

  try {
    const airdrop = await Airdrop.findById(req.params.id);
    if (!airdrop) {
      return res.status(404).json({ message: 'Airdrop not found' });
    }
    cache.set(cacheKey, airdrop); // Cache the data
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
    cache.del(`airdrop_${req.params.id}`); // Invalidate the cache for this ID
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
    cache.del(`airdrop_${req.params.id}`); // Invalidate the cache for this ID
    res.json({ message: 'Airdrop deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
