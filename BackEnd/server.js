const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const vendorRoutes = require('./Routes/vendorRoutes');

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

require("dotenv").config();
const PORT = process.env.PORT || 3000;
const MONGODB_URL = process.env.MONGODB_URL;

// MongoDB connection
mongoose.connect(MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));

// Vendor routes
app.use('/api/vendors', vendorRoutes);

// Server setup

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
