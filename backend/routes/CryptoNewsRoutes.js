// Routes for Crypto News

// Import necessary modules
const express = require('express');
const router = express.Router();
const CryptoNews = require('../models/CryptoNewsModel');
const syncNewsWithDatabase = require('../services/CryptoNewsService');

// Route to sync crypto news with Contentful
router.post('/sync-contentful-news', async (req, res) => {
  try {
    await syncNewsWithDatabase();
    res.status(201).json({ message: 'Crypto News synced successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to create a new Crypto News
router.post('/crypto-news', async (req, res) => {
  try {
    const cryptoNews = await CryptoNews.create(req.body);
    //console.log(cryptoNews);
    res.status(201).json(cryptoNews);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to retrieve all Crypto News
router.get('/crypto-news', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 12;
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * limit;
    
    const cryptoNews = await CryptoNews.find().skip(skip).limit(limit);
    res.json(cryptoNews);
    console.log('news fetched')
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to retrieve a specific Crypto News by slug
router.get('/crypto-news/:slug', async (req, res) => {
  const { slug } = req.params;
  try {
    const cryptoNews = await CryptoNews.findOne({ slug: slug });
    if (cryptoNews) {
      res.json(cryptoNews);
    } else {
      res.status(404).send('Crypto News not found');
    }
  } catch (error) {
    console.error('Error fetching crypto news by slug:', error);
    res.status(500).send('Internal server error');
  }
});

// Route to update a specific crypto news by ID
router.patch('/crypto-news/:id', async (req, res) => {
  try {
    const cryptoNews = await CryptoNews.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!cryptoNews) {
      return res.status(404).json({ message: 'Crypto News not found' });
    }
    res.json(cryptoNews);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to delete a specific crypto news by ID
router.delete('/crypto-news/:id', async (req, res) => {
  try {
    const cryptoNews = await CryptoNews.findByIdAndDelete(req.params.id);
    if (!cryptoNews) {
      return res.status(404).json({ message: 'Crypto News not found' });
    }
    res.json({ message: 'Crypto News deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
  
module.exports = router;