const TokenFarming = require('../models/TokenFarmingModel');
const { createClient } = require('contentful');

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});


// Fetch token farming data from Contentful
async function fetchTokenFarmsFromContentful() {
  try {
    const response = await client.getEntries({
      content_type: 'tokenFarming', // token farming content type name
    });
    
    return response.items.map((item) => item.fields); // Extract token farming data from Contentful entries
  } catch (error) {
    console.error(error); 
    throw new Error('Failed to fetch token farming from Contentful');
  }
}

// Sync token farming with database
async function syncTokenFarmsWithDatabase() {
  const contentfultokenFarms = await fetchTokenFarmsFromContentful();

  for (const tokenFarmingData of contentfultokenFarms) {
    // Check if the token farm already exists in MongoDB
    console.log(tokenFarmingData);
    let existingTokenFarm = await TokenFarming.findOne({ tokenName: tokenFarmingData.tokenName });

    if (existingTokenFarm) {
      // Update the existing token farming
      await TokenFarming.findByIdAndUpdate(existingTokenFarm._id, tokenFarmingData);
    } else {
      // Create a new token farming
      await TokenFarming.create(tokenFarmingData);
    }
  }
  console.log('function called successfully');
} 

module.exports = syncTokenFarmsWithDatabase;