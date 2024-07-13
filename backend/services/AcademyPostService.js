const AcademyPost = require('../models/AcademyPostModel');
const { createClient } = require('contentful');
const slugify = require('slugify');

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});


// Fetch Academy posts content from Contentful
async function fetchAcademyPostsFromContentful() {
  try {
    const response = await client.getEntries({
      content_type: 'academyPost', // Academy Post content type name
    });
    
    return response.items.map((item) => item.fields); // Extract posts data from Contentful entries
  } catch (error) {
    console.error(error);
    throw new Error('Failed to fetch academy posts from Contentful');
  }
}

// Sync Academy Posts with database
async function syncAcademyPostsWithDatabase() {
    const contentfulAcademyPosts = await fetchAcademyPostsFromContentful();
  
    for (const academyPostData  of contentfulAcademyPosts) {
      // Generate slug from postHeading
      const slug = slugify(academyPostData.postHeading, { lower: true, strict: true });
     // console.log(academyPostData.tags);
  
      // Check if the post already exists in MongoDB
      let existingAcademyPost = await AcademyPost.findOne({ slug: slug });
  
      if (existingAcademyPost) {
        // Update the existing academy post
        try {
          await AcademyPost.findByIdAndUpdate(existingAcademyPost._id, academyPostData);
        } catch (error) {
          console.log(error);
        }
        
      } else {
        // Create a new academy post
        await AcademyPost.create(academyPostData);
      }
    }
}
  

module.exports = syncAcademyPostsWithDatabase;