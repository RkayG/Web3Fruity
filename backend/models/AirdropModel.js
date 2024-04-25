const mongoose = require('mongoose');

const airdropSchema = new mongoose.Schema(
  {
    logo: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
    },
    rewardPool: {
        type: String
    },
    rewardPercentFromSupply: {
        type: String
    },
    endDate: {
        type: Date
    },
    platformType: {
        type: String,
        required: true
    },
    chain: {
        type: String
    },
    participateButton: {
      type: String,
      default: "Participate"
    },
    guideLink: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

const Airdrop = mongoose.model('Airdrop', airdropSchema);

module.exports = Airdrop;
