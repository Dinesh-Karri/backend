const mongoose = require('mongoose');

const dashboardSchema = mongoose.Schema({
  totalAppointments: {
    type: Number,
    required: true
  },
  totalHospitals: {
    type: Number,
    required: true
  },
  totalMessages: {
    type: Number,
    required: true
  },
  fundsRaised: {
    type: Number,
    required: true
  },
  emergenciesToday: {
    type: Number,
    required: true
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

const Dashboard = mongoose.model('Dashboard', dashboardSchema);
module.exports = Dashboard;
