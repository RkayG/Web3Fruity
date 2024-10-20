const mongoose = require('mongoose');
const slugify = require('slugify'); 

//========================= model for Token Farming
/** Required fields:
 *      logo: url of logo image
 *      tokenNmame: e.g Notcoin, PI Network
 *      blockchain: e.g TON, Solana, BSC
 *      status: e.g Ongoing, Ended: 
 *      guideUrl:  url to internal guide blog post
 *      farmingType: Free/Stake
 */
// Other/extra fields: 
//      description: brief farming details

const tokenFarmingSchema = new mongoose.Schema(
  {
    logo: { type: String, required: true },
    tokenName: { type: String, required: true },
    slug: { type: String, unique: true},
    blockchain: { type: String, required: true },
    platform: { type: String },
    linkToFarmingPlatform: { type: String },
    description: { type: String },
    status: { type: String },
    website: { type: String },
    socialLinks: { type: Array },
    whitepaperLink: { type: String },
    guide: { type: Object, required: true },
    stakeToFarm: { type: String},
    requirements: { type: String }
  },

  {
    timestamps: true
  }
);

// Middleware to generate slug from token name
tokenFarmingSchema.pre('save', async function(next) {
  if (this.isModified('tokenName')) {
    let slug = slugify(this.tokenName, { lower: true, strict: true });
    
    // Check for existing slugs
    let slugExists = await mongoose.models.TokenFarming.findOne({ slug: slug });
    let counter = 1;

    // Append a unique identifier if the slug already exists
    while (slugExists) {
      slug = `${slug}-${counter}`;
      slugExists = await mongoose.models.TokenFarming.findOne({ slug: slug });
      counter++;
    }
    
    this.slug = slug;
  }
  next();
});

tokenFarmingSchema.index({ slug: 1 });

const TokenFarming = mongoose.model('TokenFarming', tokenFarmingSchema);

module.exports = TokenFarming;
