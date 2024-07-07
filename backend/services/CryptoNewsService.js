const CryptoNews = require('../models/CryptoNewsModel');
const { createClient } = require('contentful');
const slugify = require('slugify');

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});


// Fetch Cryoto News content from Contentful
async function fetchCryptoNewsFromContentful() {
  try {
    const response = await client.getEntries({
      content_type: 'cryptoInsights', // Crypto News content type name
    });
    
    return response.items.map((item) => item.fields); // Extract news data from Contentful entries
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch Crypto News from Contentful');
  }
}

// Sync Crypto News with database
async function syncNewsWithDatabase() {
    const contentfulCryptoNews = await fetchCryptoNewsFromContentful();
  
    for (const cryptoNewsData of contentfulCryptoNews) {
      // Generate slug from newsHeading
      const slug = slugify(cryptoNewsData.newsHeading, { lower: true, strict: true });
  
      // Check if the news already exists in MongoDB
      let existingCryptoNews = await CryptoNews.findOne({ slug: slug });
  
      if (existingCryptoNews) {
        // Update the existing CryptoNews
        await CryptoNews.findByIdAndUpdate(existingCryptoNews._id, cryptoNewsData);
      } else {
        // Create a new crypto news
        await CryptoNews.create(cryptoNewsData);
      }
    }
}
  

module.exports = syncNewsWithDatabase;