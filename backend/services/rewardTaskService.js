const RewardTask= require('../models/RewardTaskModel');
const { createClient } = require('contentful');

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});


// Fetch rewaed-for-task data from Contentful
async function fetchRewardTasksFromContentful() {
  try {
    const response = await client.getEntries({
      content_type: 'rewardTasks', // rewardTasks content type name
    });
    
    return response.items.map((item) => item.fields); // Extract reward tasks data from Contentful entries
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch reward tasks from Contentful');
  }
}

// Sync reward tasks with database
async function syncRewardTasksWithDatabase() {
  const contentfulRewardTasks = await fetchRewardTasksFromContentful();

  for (const rewardTaskData of contentfulRewardTasks) {
    // Check if the reward task already exists in MongoDB
    console.log(rewardTaskData);
    let existingRewardTask = await RewardTask.findOne({ title: rewardTaskData.title });

    if (existingRewardTask) {
      // Update the existing reward task
      await RewardTask.findByIdAndUpdate(existingRewardTask._id, rewardTaskData);
    } else {
      // Create a new reward task
      await RewardTask.create(rewardTaskData);
    }
  }
  console.log('function called successfully');
} 

module.exports = syncRewardTasksWithDatabase;