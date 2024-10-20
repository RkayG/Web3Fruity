const express = require('express');
const router = express.Router();
const Featured = require('../models/FeaturedModel');
const syncFeaturedWithDatabase = require('../services/featuredService');
const { cache, cacheMiddleware } = require('../middleware/cacheMiddleware');

// Route to sync featured banners from Contentful
router.post('/sync-contentful-featured', async (req, res) => {
  try {
    await syncFeaturedWithDatabase();
    cache.flushAll();
    res.status(200).json({ message: 'Featured banners synced successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route for fetching all featured banners
router.get('/featured', cacheMiddleware(2592000), async (req, res) => {
  try {
    const featured = await Featured.find().sort({ createdAt: -1 });
    console.log('featured events fetched');
    res.json(featured);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route for retrieving a specific featured banner
router.get('/featured/:id', cacheMiddleware(2592000),  getFeatured, (req, res) => {
  res.json(res.featured);
});

// Middleware function to retrieve a specific featured banner
async function getFeatured(req, res, next) {
  try {
    const featured = await Featured.findById(req.params.id);
    if (featured == null) {
      return res.status(404).json({ message: 'Featured banner not found' });
    }
    res.featured = featured;
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// function to clear cache
const clearCache = (key) => {
  cache.del(key);
};

// Route for adding a new featured banner
router.post('/featured', async (req, res) => {
  try {
    const featured = await Featured.create(req.body)
    clearCache('/featured'); // Clear the cache for the main listing
    res.status(201).json(featured);
} catch (error) {
  res.status(400).json({ message: error.message });
}
});


// Route for updating an existing featured banner
router.patch('/featured/:id', getFeatured, async (req, res) => {
  try {
    const featured = await Featured.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!featured) {
      return res.status(404).json({ message: 'Featured banner not found' });
    }
    clearCache('/featured'); // Clear the cache for the main listing
    clearCache(`/crypto-news/${featured.id}`); // Clear the cache for this specific featured item
    res.json(featured);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route for deleting an existing featured banner
router.delete('/featured/:id', getFeatured, async (req, res) => {
  try {
    await res.featured.remove();
    clearCache('/featured'); // Clear the cache for the main listing
    clearCache(`/crypto-news/${featured.id}`); // Clear the cache for this specific featured item
    res.json({ message: 'Featured banner deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
