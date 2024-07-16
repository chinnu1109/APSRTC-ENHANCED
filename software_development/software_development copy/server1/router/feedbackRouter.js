const express = require('express');
const Feedback = require('../models/feedback');
const router = express.Router();

// Route to handle feedback submission
router.post('/feedback', async (req, res) => {
  try {
    const { feedback, rating } = req.body;
    const newFeedback = new Feedback({ feedback, rating });
    await newFeedback.save();
    res.status(201).json(newFeedback);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
