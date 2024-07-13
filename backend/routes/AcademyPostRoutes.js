// Routes for Academy posts

// Import necessary modules
const express = require('express');
const router = express.Router();
const AcademyPost = require('../models/AcademyPostModel');
const syncAcademyPostsWithDatabase = require('../services/AcademyPostService');

// Route to sync academy posts with Contentful
router.post('/sync-contentful-academy-posts', async (req, res) => {
  try {
    await syncAcademyPostsWithDatabase();
    res.status(201).json({ message: 'Academy posts synced successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to create a new  Academy Post
router.post('/academy', async (req, res) => {
  try {
    const academyPost = await AcademyPost.create(req.body);
    //console.log(academyPost);
    res.status(201).json(academyPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to retrieve all Academy Posts
router.get('/academy', async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 12;
    const page = parseInt(req.query.page) || 1;
    const skip = (page - 1) * limit;
    
    const academyPost = await AcademyPost.find().skip(skip).limit(limit);
    res.json(academyPost);
    console.log('article fetched')
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to retrieve a specific Academy Post by slug
router.get('/academy/:slug', async (req, res) => {
  const { slug } = req.params;
  try {
    const academyPost = await AcademyPost.findOne({ slug: slug });
    if (academyPost) {
      res.json(academyPost);
    } else {
      res.status(404).send('Article not found');
    }
  } catch (error) {
    console.error('Error fetching article by slug:', error);
    res.status(500).send('Internal server error');
  }
});

// Route to update a specific Academy post by ID
router.patch('/academy/:id', async (req, res) => {
  try {
    const academyPost = await AcademyPost.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!academyPost) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json(academyPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to delete a specific Academy post by ID
router.delete('/academy/:id', async (req, res) => {
  try {
    const academyPost = await AcademyPost.findByIdAndDelete(req.params.id);
    if (!academyPost) {
      return res.status(404).json({ message: 'Article not found' });
    }
    res.json({ message: 'Article deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
  
module.exports = router;