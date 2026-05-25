const scanService = require('../services/scanService');

/**
 * Controller to handle URL analysis requests
 */
const analyzeUrl = async (req, res, next) => {
  try {
    const { url } = req.body;

    if (!url) {
      return res.status(400).json({ error: 'URL is required' });
    }

    console.log(`[SCAN] Request received for: ${url}`);

    // Call the service layer to perform analysis
    const analysisResult = await scanService.performFullAnalysis(url);

    return res.status(200).json(analysisResult);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  analyzeUrl,
};
