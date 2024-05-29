const express = require('express');
const router = express.Router();
const Featured = require('../models/FeaturedModel');
const syncFeaturedWithDatabase = require('../services/featuredService');

// Route to sync featured banners from Contentful
router.post('/sync-contentful-featured', async (req, res) => {
  try {
    await syncFeaturedWithDatabase();
    res.status(200).json({ message: 'Featured banners synced successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route for fetching all featured banners
router.get('/featured', async (req, res) => {
  try {
    const featured = await Featured.find();
    console.log(featured);
    res.json(featured);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route for adding a new featured banner
router.post('/featured', async (req, res) => {
  try {
    const featured = await Featured.create(req.body)
    res.status(201).json(featured);
} catch (error) {
  res.status(400).json({ message: error.message });
}
});

// Route for retrieving a specific featured banner
router.get('/featured/:id', getFeatured, (req, res) => {
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

// Route for updating an existing featured banner
router.patch('/featured/:id', getFeatured, async (req, res) => {
  try {
    const featured = await Featured.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!featured) {
      return res.status(404).json({ message: 'Featured banner not found' });
    }
    res.json(featured);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route for deleting an existing featured banner
router.delete('/featured/:id', getFeatured, async (req, res) => {
  try {
    await res.featured.remove();
    res.json({ message: 'Featured banner deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
