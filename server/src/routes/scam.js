const express = require('express');
const { performScamAnalysis } = require('../services/scamService');
const router = express.Router();

router.post('/analyze', async (req, res) => {
  try {
    const { message } = req.body;
    if (!message) {
      return res.status(400).json({ error: 'Message content is required' });
    }

    const results = await performScamAnalysis(message);
    res.json(results);
  } catch (error) {
    console.error('[SCAM ROUTE ERROR]', error);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
});

module.exports = router;
