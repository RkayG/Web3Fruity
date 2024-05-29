// Import necessary modules
const express = require('express');
const router = express.Router();
const Subscriber = require('../models/SubscriberModel')

// POST route to add a new subscriber
router.post('/subscribe', async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).send('Email is required');
    }

    const subscriber = new Subscriber({ email });
    await subscriber.save();
    res.status(201).send('subscription successful my boy');
  } catch (error) {
    if (error.code === 11000) { // Handle duplicate key error
      res.status(409).send('Email is already subscribed');
    } else {
      res.status(500).send('Internal Server Error');
    }
  }
});

// GET route to retrieve all subscribers
router.get('/subscribe', async (req, res) => {
  try {
    const subscribers = await Subscriber.find();
    res.status(200).send(subscribers);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

// PATCH route to update a subscriber's email
router.patch('/subscribe/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { email } = req.body;

    const subscriber = await Subscriber.findById(id);
    if (!subscriber) {
      return res.status(404).send('Subscriber not found');
    }

    if (email) {
      subscriber.email = email;
    }

    await subscriber.save();
    res.status(200).send(subscriber);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;