const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  securityScore: { type: Number, required: true },
  questionnaire: [
    {
      question: { type: String, required: true },
      answer: { type: String, required: true },
    },
  ],
  riskLevel: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    default: 'Low',
  },
});

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;
