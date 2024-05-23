const { link } = require('fs');
const mongoose = require('mongoose');

// Game model for play to earn games (for Homepage)
// Required fields: image, title, description, platform, free2play( Ans: Yes/no), developer, website
// Other fields: token, guideLink, socialLinks, chain, guideLink

const GameSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    token: {
    type: String
   },
   platform: {
    type: Array,
    required: true
   },
   genre: {
    type: String,
    required: true
   },
   free2play: {
    type: String,
    required: true
   },
   developer: {
    type: String,
    required: true
   },
   website: {
    type: String,
    required: true
   },
   socialLinks: {
    type: Array,
   },
   chain: {
    type: String
   },
    guideLink: {
      type: String
    }
  },
  {
    timestamps: true
  }
);

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;
