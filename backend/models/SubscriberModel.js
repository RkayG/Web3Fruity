const mongoose = require('mongoose');

//============= Subscriber Model =====================

// Required fields: email
// Other/extra fields:

const subscriberSchema = new mongoose.Schema(
  {
    email: { 
      type: String, 
      required: true, 
      unique: true, // Ensures email addresses are unique
      match: [/.+@.+\..+/, 'Please enter a valid email address'] // Email validation
    }
  },
  {
    timestamps: true // Automatically adds createdAt and updatedAt fields
  }
);

const Subscriber = mongoose.model('Subscriber', subscriberSchema);

module.exports = Subscriber;
