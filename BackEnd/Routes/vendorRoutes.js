const express = require('express');
const Vendor = require('../models/Vendor');
const router = express.Router();

// Get all vendors
router.get('/', async (req, res) => {
  try {
    const vendors = await Vendor.find();
    res.json(vendors);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post('/', async (req, res) => {
  const { name, questionnaire } = req.body;
  const securityScore = calculateScore(questionnaire);
  const riskLevel = calculateRiskLevel(securityScore); // Calculate the risk level based on the security score

  const newVendor = new Vendor({ name, questionnaire, securityScore, riskLevel });

  try {
    await newVendor.save();
    res.json(newVendor);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Calculate security score based on responses
const calculateScore = (questionnaire) => {
  return questionnaire.reduce((score, { answer }) => {
    return score + (answer === 'Yes' ? 10 : 0);
  }, 0);
};

const calculateRiskLevel = (securityScore) => {
  if (securityScore >= 80) {
    return 'Low';  // Low risk if score is 80 or higher
  } else if (securityScore >= 40) {
    return 'Moderate';  // Moderate risk if score is between 40 and 79
  } else {
    return 'High';  // High risk if score is less than 40
  }
};
module.exports = router;
