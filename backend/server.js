const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
require('dotenv').config();

//import internal routes
const featuredAirdropRouter = require('./routes/FeaturedAirdropRoutes');
const airdropRouter = require('./routes/AirdropRoutes');
const gameRouter = require('./routes/GameRoutes');
const rewardTaskRouter = require('./routes/RewardTaskRoutes')
const cryptoNewsRouter = require('./routes/CryptoNewsRoutes');
const tokenFarmingRouter = require('./routes/TokenFarmingRoutes');
const academyRouter = require('./routes/AcademyPostRoutes');
const subscribeRouter = require('./routes/SubscriberRoutes');

// Use middleware if needed
app.use(express.json());
app.use(cors());

// Mount router(s)
app.use('/api', featuredAirdropRouter); // Mount router with a base path
app.use('/', airdropRouter);
app.use('/', gameRouter);
app.use('/', rewardTaskRouter);
app.use('/', cryptoNewsRouter);
app.use('/', tokenFarmingRouter);
app.use('/', academyRouter);
app.use('/', subscribeRouter);

const port = process.env.PORT || 1225;

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to Mongoose database');

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
      });
  }).catch((error) => {
    console.log(error);
});