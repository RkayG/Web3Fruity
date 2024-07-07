const mongoose = require('mongoose');
const slugify = require('slugify');

// Academy post Schema
const AcademyPostSchema = new mongoose.Schema(
  {
    postHeading: { type: String, required: true },
    imageLink: { type: String },
    slug: { type: String, unique: true },
    category: { type: String },
    author: { type: String },
    content: { type: Object, required: true },
    tags: { type: Array },
    timestamp: { type: Date  }
  },
  {
    timestamps: true
  }
);

// Middleware to generate slug from postHeading
AcademyPostSchema.pre('save', async function(next) {
  if (this.isModified('postHeading')) {
    let slug = slugify(this.postHeading, { lower: true, strict: true });
    
    // Check for existing slugs
    let slugExists = await mongoose.models.AcademyPost.findOne({ slug: slug });
    let counter = 1;

    // Append a unique identifier if the slug already exists
    while (slugExists) {
      slug = `${slug}-${counter}`;
      slugExists = await mongoose.models.AcademyPost.findOne({ slug: slug });
      counter++;
    }
    
    this.slug = slug;
  }
  next();
});

AcademyPostSchema.index({ slug: 1 });

const AcademyPost = mongoose.model('AcademyPost', AcademyPostSchema);

module.exports = AcademyPost;
