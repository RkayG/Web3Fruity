const contentful = require('contentful')
require('dotenv').config();
const express = require('express');
const router = express.Router();

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: 'master', // defaults to 'master' if not set
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
})

console.log(process.env.CONTENTFUL_ACCESS_TOKEN);

// Router to fetch Crypto News from Contentful CMS based on contentType
router.get('/crypto-news', async (req, res) => {
    try {
      const contentType = 'cryptoInsights'; //  actual content type slug on Contentful
  
      const entries = await client.getEntries({
        content_type: contentType,
        // Add additional query options here if needed (e.g., sort, limit)
      });
  
    
     // console.log(entries);
      if (!entries.items.length) {
        return res.status(404).json({ message: 'No crypto news found' });
      }
  
      console.log(entries.items);
      res.json(entries.items);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching crypto news' });
    }
});
  
module.exports = router;