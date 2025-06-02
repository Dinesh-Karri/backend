const mongoose = require('mongoose');

const medicineSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  manufacturer: {
    type: String,
    required: true,
    trim: true
  },
  price: {
    type: Number,
    required: true
  },
  stock: {
    type: Number,
    required: true
  },
  expiryDate: {
    type: Date,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  imageUrl: {
    type: String,
    required: true // This should be a link to the image stored on Firebase or any CDN
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Medicine = mongoose.model('Medicine', medicineSchema);
module.exports = Medicine;

