const Featured= require('../models/FeaturedModel');
const { createClient } = require('contentful');

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});


// Fetch featured data from Contentful
async function fetchFeaturedFromContentful() {
  try {
    const response = await client.getEntries({
      content_type: 'featured', // featured content type name
    });
    
    return response.items.map((item) => item.fields); // Extract featured data from Contentful entries
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch featured data from Contentful');
  }
}

// Sync featured data with database
async function syncFeaturedWithDatabase() {
  const contentfulFeatured = await fetchFeaturedFromContentful();

  for (const featuredData of contentfulFeatured) {
    // Check if the featured data already exists in MongoDB
    console.log(featuredData);
    let existingFeatured = await Featured.findOne({ bannerHeading: featuredData.bannerHeading });

    if (existingFeatured) {
      // Update the existing featured data
      await Featured.findByIdAndUpdate(existingFeatured._id, featuredData);
    } else {
      // Create a new featured data
      await Featured.create(featuredData);
    }
  }
  //console.log('syncFeaturedWithDatabase called successfully');
} 

module.exports = syncFeaturedWithDatabase;