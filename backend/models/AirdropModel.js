const mongoose = require('mongoose');
const slugify = require('slugify'); 


//============= Airdrop model for airdrop card =====================

// Required fields: logo, title, projectName, platformType, guide
// Other/extra fields: description, rewardPool, rewardPercentFromSupply, endDate, chain

const airdropSchema = new mongoose.Schema(
  {
    logo: { type: String, required: true },
    title: { type: String, required: true },
    slug: { type: String, unique: true },
    //projectName: { type: String, required: true},
    description: { type: String },
    referralLink: { type: String },
    rewardPool: { type: String },
    rewardPercentFromSupply: { type: String },
    endDate: { type: Date },
    platformType: { type: String, required: true },
    chain: { type: String },
    website: { type: String },
    socialLinks: { type: Array },
    whitepaperLink: { type: String },
    guide: { type: Object }
  },
  
  {
    timestamps: true
  }
);

// Middleware to generate slug from airdrop title
airdropSchema.pre('save', async function(next) {
  if (this.isModified('title')) {
    let slug = slugify(this.title, { lower: true, strict: true });
    
    // Check for existing slugs
    let slugExists = await mongoose.models.Airdrop.findOne({ slug: slug });
    let counter = 1;

    // Append a unique identifier if the slug already exists
    while (slugExists) {
      slug = `${slug}-${counter}`;
      slugExists = await mongoose.models.Airdrop.findOne({ slug: slug });
      counter++;
    }
    
    this.slug = slug;
  }
  next();
});

airdropSchema.index({ slug: 1 });

const Airdrop = mongoose.model('Airdrop', airdropSchema);

module.exports = Airdrop;
