const mongoose = require('mongoose');

// Model for Featured banners on Homepage
// Required fields: bannerImageUrl, bannerHeading
// Other fields: link, guide

const featuredSchema = new mongoose.Schema(
  {
    bannerImageUrl: {type: String, required: true },
    bannerHeading: { type: String, required: true },
    headingDescription: {  type: String },
    link: { type: String},
    guide: { type: Object }
  },
  
  {
    timestamps: true
  }
);

const Featured = mongoose.model('Featured', featuredSchema);

module.exports = Featured;
