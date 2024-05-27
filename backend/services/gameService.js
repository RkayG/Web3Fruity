const Game = require('../models/GameModel');
const { createClient } = require('contentful');

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});


// Fetch game data from Contentful
async function fetchGamesFromContentful() {
  try {
    const response = await client.getEntries({
      content_type: 'games', // airdrop content type name
    });
    
    return response.items.map((item) => item.fields); // Extract airdrop data from Contentful entries
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch games from Contentful');
  }
}

// Sync games with database
async function syncGamesWithDatabase() {
  const contentfulGames = await fetchGanesFromContentful();

  for (const gameData of contentfulGames) {
    // Check if the game already exists in MongoDB
    console.log(gameData);
    let existingGame = await Game.findOne({ title: gameData.title });

    if (existingGAme) {
      // Update the existing game
      await Game.findByIdAndUpdate(existingGame._id, gameData);
    } else {
      // Create a new game
      await Game.create(gameData);
    }
  }
  console.log('function called successfully');
} 

module.exports = syncGamesWithDatabase;