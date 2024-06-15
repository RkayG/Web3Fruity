const mongoose = require('mongoose');

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
    blockchain: { type: String, required: true },
    description: { type: String },
    status: { type: String, required: true },
    guide: { type: Object, required: true },
    farmingType: { type: String, required: true }
  },

  {
    timestamps: true
  }
);

const TokenFarming = mongoose.model('TokenFarming', tokenFarmingSchema);

module.exports = TokenFarming;
