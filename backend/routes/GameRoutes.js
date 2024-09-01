// Routes for Play-to-Earn games

// Import necessary modules
const express = require('express');
const router = express.Router();
const Game = require('../models/GameModel');
const syncGamesWithDatabase = require('../services/gameService');
const { cache, cacheMiddleware } = require('../middleware/cacheMiddleware');

// Route to sync games with Contentful
router.post('/sync-contentful-games', async (req, res) => {
  try {
    await syncGamesWithDatabase();
    res.status(201).json({ message: 'Games synced successfully' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


// Route to retrieve all games
router.get('/games', cacheMiddleware(2592000), async (req, res) => {
  try {
    let limit = parseInt(req.query.limit) || 12;
    const games = await Game.find().sort({ createdAt: -1 }).limit(limit);
    console.log('games fetched');
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to retrieve a specific game by slug
router.get('/games/:slug', cacheMiddleware(2592000), async (req, res) => {
  const { slug } = req.params;
  try {
    const game = await Game.findOne({ slug: slug });
    if (game) {
      res.json(game);
    } else {
      res.status(404).send('Game not found');
    }
  } catch (error) {
    console.error('Error fetching game by slug:', error);
    res.status(500).send('Internal server error');
  }
});

// function to clear cache
const clearCache = (key) => {
  cache.del(key);
};

// Route to create a new game
router.post('/games', async (req, res) => {
  try {
    const game = await Game.create(req.body);
    //console.log(game);
    clearCache('/games'); // Clear the cache for the main listing
    res.status(201).json(game);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to update a specific airdrop by ID
router.patch('/games/:id', async (req, res) => {
  try {
    const game = await Game.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!game) {
      return res.status(404).json({ message: 'Game not found' });
    }
    clearCache('/games'); // Clear the cache for the main listing
    clearCache(`/games/${cryptoNews.id}`); // Clear the cache for this specific game item
   
    res.json(game);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to delete a specific game by ID
router.delete('/games/:id', async (req, res) => {
  try {
    const game = await Game.findByIdAndDelete(req.params.id);
    if (!game) {
      return res.status(404).json({ message: 'Gamee not found' });
    }
    clearCache('/games'); // Clear the cache for the main listing
    clearCache(`/games/${cryptoNews.id}`); // Clear the cache for this specific game item
   
    res.json({ message: 'Game deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
