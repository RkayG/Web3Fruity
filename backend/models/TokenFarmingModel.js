const mongoose = require('mongoose');

//========================= model for Token Farming
/** Required fields:
 *      logo: url of logo image
 *      tokenNmame: e.g Notcoin, PI Network
 *      blockchain: e.g TON, Solana, BSC
 *      status: e.g Ongoing, Ended: 
 *      guideUrl:  url to internal guide blog post
 */
// Other/extra fields: 

const tokenFarmingSchema = new mongoose.Schema(
  {
    logo: { type: String, required: true },
    tokenName: { type: String, required: true },
    blockchain: { type: String, required: true },
    status: { type: String, required: true },
    guideUrl: { type: String, required: true }
  },

  {
    timestamps: true
  }
);

const TokenFarming = mongoose.model('TokenFarming', tokenFarmingSchema);

module.exports = TokenFarming;
