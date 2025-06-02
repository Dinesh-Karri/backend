const mongoose = require('mongoose');

const appointmentSchema = mongoose.Schema({
  patientName: {
    type: String,
    required: true
  },
  hospitalName: {
    type: String,
    required: true
  },
  doctorName: {
    type: String,
    required: true
  },
  appointmentDate: {
    type: Date,
    required: true
  },
  appointmentTime: {
    type: String, // or Date if you prefer
    required: true
  },
  status: {
    type: String,
    enum: ['scheduled', 'completed', 'cancelled', 'no-show'],
    default: 'scheduled'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  notes: {
    type: String,
    required: false
  }
});

const Appointment = mongoose.model('Appointment', appointmentSchema);
module.exports = Appointment;
