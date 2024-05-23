// Import necessary modules
const express = require('express');
const router = express.Router();
const RewardTask = require('../models/RewardTaskModel')

// Route to create a new reward for task
router.post('/reward-tasks', async (req, res) => {
  try {
    const rewardTask = await RewardTask.create(req.body);
    console.log(rewardTask);
    res.status(201).json(rewardTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to retrieve all reward for tasks
router.get('/reward-tasks', async (req, res) => {
  try {
    let limit = parseInt(req.query.limit); // Parse 'limit' query parameter
    if (isNaN(limit)) {
      limit = 12; // Set a default limit if 'limit' query parameter is not provided or invalid
    }

    const rewardTasks = await RewardTask.find().limit(limit); // Use the limit in the MongoDB query
    res.json(rewardTasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


// Route to retrieve a specific reward for task by ID
router.get('/reward-tasks/:id', async (req, res) => {
  try {
    const rewardTask = await RewardTask.findById(req.params.id);
    if (!rewardTask) {
      return res.status(404).json({ message: 'Reward for Task not found' });
    }
    res.json(rewardTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to update a specific reward for task by ID
router.patch('/reward-tasks/:id', async (req, res) => {
  try {
    const rewardTask = await RewardTask.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!rewardTask) {
      return res.status(404).json({ message: 'Reward for Task not found' });
    }
    res.json(rewardTask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Route to delete a specific reward for task by ID
router.delete('/reward-tasks/:id', async (req, res) => {
  try {
    const rewardTask = await RewardTask.findByIdAndDelete(req.params.id);
    if (!rewardTask) {
      return res.status(404).json({ message: 'Reward for Task not found' });
    }
    res.json({ message: 'Reward for Task deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
