const express = require('express');
const router = express.Router();
const Airdrop = require('../models/AirdropModel');
const Game = require('../models/GameModel');
const TokenFarming = require('../models/TokenFarmingModel');
const Platform = require('../models/RewardTaskModel');
const CryptoNews = require('../models/CryptoNewsModel');
const AcademyArticle = require('../models/AcademyPostModel');

router.get('/search', async (req, res) => {
  const { query } = req.query;

  if (!query) {
    return res.status(400).send({ error: 'Query parameter is required' });
  }

  try {
    const airdropResults = await Airdrop.find({ title: new RegExp(query, 'i') });
    const gameResults = await Game.find({ title: new RegExp(query, 'i') });
    const tokenFarmingResults = await TokenFarming.find({ tokenName: new RegExp(query, 'i') });
    const platformResults = await Platform.find({ title: new RegExp(query, 'i') });
    const cryptoNewsResults = await CryptoNews.find({ newsHeading: new RegExp(query, 'i') });
    const academyArticleResults = await AcademyArticle.find({ postHeading: new RegExp(query, 'i') });

    const results = {
      airdrops: airdropResults,
      games: gameResults,
      tokenFarming: tokenFarmingResults,
      platforms: platformResults,
      cryptoNews: cryptoNewsResults,
      academyArticles: academyArticleResults,
    };

    res.send(results);
  } catch (error) {
    console.error('Error during search:', error);
    res.status(500).send({ error: 'An error occurred during search' });
  }
});

module.exports = router;
