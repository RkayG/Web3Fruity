const express = require('express');
const mongoose = require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const router = require('./routes/AirdropRoutes');

// Use middleware if needed
app.use(express.json());
// Mount your router(s)
app.use('/api', router); // Mount the router with a base path

const port = process.env.PORT || 1225;

mongoose.connect(
    'mongodb+srv://berry:rufus14@web3fruity.hlwft10.mongodb.net/?retryWrites=true&w=majority&appName=web3fruity')
  .then(() => {
    console.log('connected to Mongoose database');

    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
      });
  }).catch((error) => {
    console.log(error);
});

