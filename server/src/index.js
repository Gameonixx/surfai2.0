const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const scanRoutes = require('./routes/scan');
const scamRoutes = require('./routes/scam');
const emailRoutes = require('./routes/email');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', scanRoutes);
app.use('/api/scam', scamRoutes);
app.use('/api/email', emailRoutes);

// Basic health check
app.get('/health', (req, res) => {
  res.json({ status: 'active', timestamp: new Date() });
});

// Error handling middleware (basic)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Internal Server Error', message: err.message });
});

app.listen(PORT, () => {
  console.log(`🚀 SafeSurf AI Backend running on port ${PORT}`);
});
