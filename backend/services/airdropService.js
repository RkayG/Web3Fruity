const Airdrop = require('../models/AirdropModel');
const { createClient } = require('contentful');

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});


// Fetch airdrop data from Contentful
async function fetchAirdropsFromContentful() {
  try {
    const response = await client.getEntries({
      content_type: 'airdrops', // airdrop content type name
    });
    
    return response.items.map((item) => item.fields); // Extract airdrop data from Contentful entries
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch airdrops from Contentful');
  }
}

// Sync airdrop with database
async function syncAirdropsWithDatabase() {
  const contentfulAirdrops = await fetchAirdropsFromContentful();

  for (const airdropData of contentfulAirdrops) {
    // Check if the airdrop already exists in MongoDB
    console.log(airdropData);
    let existingAirdrop = await Airdrop.findOne({ title: airdropData.title });

    if (existingAirdrop) {
      // Update the existing airdrop
      await Airdrop.findByIdAndUpdate(existingAirdrop._id, airdropData);
    } else {
      // Create a new airdrop
      await Airdrop.create(airdropData);
    }
  }
  //console.log('syncAirdropsWithDatabase called successfully');
} 

module.exports = syncAirdropsWithDatabase;