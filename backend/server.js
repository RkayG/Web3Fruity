const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const featuredAirdropRouter = require('./routes/FeaturedAirdropRoutes');
const airdropRouter = require('./routes/AirdropRoutes')

// Use middleware if needed
app.use(express.json());
app.use(cors());
// Mount router(s)
app.use('/api', featuredAirdropRouter); // Mount router with a base path
app.use('/', airdropRouter);

const port = process.env.PORT || 1225;

mongoose.connect(
  'mongodb+srv://berry:rufus14@web3fruity.hlwft10.mongodb.net/?retryWrites=true&w=majority&appName=web3fruity')
  .then(() => {
    console.log('connected to Mongoose database');

    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
      });
  }).catch((error) => {
    console.log(error);
});

