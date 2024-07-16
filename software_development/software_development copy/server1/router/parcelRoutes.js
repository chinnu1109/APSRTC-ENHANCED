// routes/parcelRoutes.js
const express = require('express');
const Parcel = require('../models/parcel');
const router = express.Router();

router.post('/parcel', async (req, res) => {
  try {
    const formData = req.body;
    const parcel = new Parcel(formData);
    await parcel.save();
    console.log('saving...');
    res.status(201).send(parcel);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
