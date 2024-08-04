const mongoose = require('mongoose');

// Game model for play to earn games (for Homepage)
// Required fields: image, title, description, platform, free2play( Ans: Yes/no), developer, website, slug
// Other fields: token, token_api_id(from coingecko), guideLink, socialLinks, chain, guideLink

const GameSchema = new mongoose.Schema(
  {
    image: {type: String, required: true },
    title: { type: String, required: true },
    slug: { type: String, required: true, unique: true},
    description: { type: String, required: true },
    token: { type: String },
    token_api_id: {type: String },
    platform: { type: Array, required: true },
    genre: { type: String, required: true },
    free2play: { type: String, required: true },
    developer: { type: String, required: true },
    website: { type: String, required: true },
    initialInvestment: { type: String, },
    avgEarnPerWeek: { type: String },
    socialLinks: { type: Array },
    chain: { type: String },
    trailer: {type: String },
    gallery: {type: Array },
    guide: { type: Object}
  },
  {
    timestamps: true
  }
);

GameSchema.index({ slug: 1 });

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;
