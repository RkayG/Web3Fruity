const mongoose = require('mongoose');

//============= Airdrop model for airdrop card =====================

// Required fields: logo, title, platformType, guide
// Other/extra fields: description, rewardPool, rewardPercentFromSupply, endDate, chain

const airdropSchema = new mongoose.Schema(
  {
    logo: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String },
    rewardPool: { type: String },
    rewardPercentFromSupply: { type: String },
    endDate: { type: Date },
    platformType: { type: String, required: true },
    chain: { type: String },
    website: { type: String },
    guide: { type: Object }
  },
  
  {
    timestamps: true
  }
);

const Airdrop = mongoose.model('Airdrop', airdropSchema);

module.exports = Airdrop;
