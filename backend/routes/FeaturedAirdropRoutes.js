const express = require('express');
const router = express.Router();
const Airdrop = require('../models/FeaturedAirdropModel'); 

// Route for fetching all airdrops
router.get('/featured-airdrops', async (req, res) => {
  try {
    const airdrops = await Airdrop.find();
    console.log(airdrops);
    res.json(airdrops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route for adding a new airdrop
router.post('/featured-airdrops', async (req, res) => {
  const airdrop = new Airdrop({
    image: req.body.image,
    title: req.body.title,
    description: req.body.description,
    guideLink: req.body.guideLink
  });

  try {
    const newAirdrop = await airdrop.save();
    res.status(201).json(newAirdrop);
    res.send(newAirdrop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route for retrieving a specific airdrop
router.get('/featured-airdrops/:id', getAirdrop, (req, res) => {
  res.json(res.airdrop);
});

// Middleware function to retrieve a specific airdrop by ID
async function getAirdrop(req, res, next) {
  try {
    const airdrop = await Airdrop.findById(req.params.id);
    if (airdrop == null) {
      return res.status(404).json({ message: 'Airdrop not found' });
    }
    res.airdrop = airdrop;
    next();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

// Route for updating an existing airdrop
router.patch('/featured-airdrops/:id', getAirdrop, async (req, res) => {
  if (req.body.image != null) {
    res.airdrop.image = req.body.image;
  }
  if (req.body.details != null) {
    res.airdrop.details = req.body.details;
  }
  if (req.body.startDate != null) {
    res.airdrop.startDate = req.body.startDate;
  }

  try {
    const updatedAirdrop = await res.airdrop.save();
    res.json(updatedAirdrop);
    res.send(updatedAirdrop);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route for deleting an existing airdrop
router.delete('/featured-airdrops/:id', getAirdrop, async (req, res) => {
  try {
    await res.airdrop.remove();
    res.json({ message: 'Airdrop deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
