const mongoose = require('mongoose');

const BloodBlankSchema = new mongoose.Schema({
  bloodType: {
    type: String,
    required: true,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  donorName: {
    type: String,
    required: true,
  },
  donorGender: {              // New field to identify gender
    type: String,
    required: true,
    enum: ['male', 'female', 'other'],  // you can extend if needed
  },
  avatarUrl: {                // Optional avatar/logo URL for donor image
    type: String,
    default: '',              // empty string if not provided
  },
  quantity: {
    type: Number,
    required: true,
  },
  donationDate: {
    type: Date,
    required: true,
  },
  expiryDate: {
    type: Date,
    required: true,
  },
  hospitalName: {
    type: String,
    required: true,
  },
  notes: {
    type: String,
  },
});

module.exports = mongoose.model('BloodBlank', BloodBlankSchema);
