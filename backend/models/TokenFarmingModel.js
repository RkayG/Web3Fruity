const mongoose = require('mongoose');

// model for Token Farming
// Required fields: tokenName, blockchain, status, guideUrl
// Other/extra fields: 

const tokenFarmingSchema = new mongoose.Schema(
  {
    logo: {
        type: String,
        required: true
    },
    tokenName: {
        type: String,
        required: true
    },
    blockchain: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    guideUrl: {
        type: String,
        required: true
    }
},
  {
    timestamps: true
  }
);

const TokenFarming = mongoose.model('TokenFarming', tokenFarmingSchema);

module.exports = TokenFarming;
