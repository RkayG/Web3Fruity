const mongoose = require('mongoose');

// Model for Featured Airdrops on Homepage
// Required fields: image, title, description, guideLink
// Other fields: participateButton

const featuredAirdropSchema = new mongoose.Schema(
  {
    image: {type: String, required: true },
    title: { type: String, required: true },
    description: {  type: String, required: true },
    participateButton: { type: String, default: "Participate" },
    guideLink: { type: String, required: true }
  },
  
  {
    timestamps: true
  }
);

const FeaturedAirdrop = mongoose.model('FeaturedAirdrop', featuredAirdropSchema);

module.exports = FeaturedAirdrop;
