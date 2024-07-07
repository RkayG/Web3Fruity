const mongoose = require('mongoose');
const slugify = require('slugify');

// Crypto News Schema
const CryptoNewsSchema = new mongoose.Schema(
  {
    newsHeading: { type: String, required: true },
    imageLink: { type: String, required: true },
    slug: { type: String, unique: true },
    sourceWebsiteName: { type: String, required: true },
    newsUrl: {type: String, required: true},
    /* content: { type: Object, required: true }, */
    timestamp: { type: Date, required: true }
  },
  {
    timestamps: true
  }
);

// Middleware to generate slug from newsHeading
CryptoNewsSchema.pre('save', async function(next) {
  if (this.isModified('newsHeading')) {
    let slug = slugify(this.newsHeading, { lower: true, strict: true });
    
    // Check for existing slugs
    let slugExists = await mongoose.models.CryptoNews.findOne({ slug: slug });
    let counter = 1;

    // Append a unique identifier if the slug already exists
    while (slugExists) {
      slug = `${slug}-${counter}`;
      slugExists = await mongoose.models.CryptoNews.findOne({ slug: slug });
      counter++;
    }
    
    this.slug = slug;
  }
  next();
});

CryptoNewsSchema.index({ slug: 1 });

const CryptoNews = mongoose.model('CryptoNews', CryptoNewsSchema);

module.exports = CryptoNews;
