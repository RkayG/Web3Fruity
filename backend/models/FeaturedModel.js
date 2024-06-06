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
    postDate: {type: Date},
  },
  
  {
    timestamps: true
  }
);

const Featured = mongoose.model('Featured', featuredSchema);

module.exports = Featured;
