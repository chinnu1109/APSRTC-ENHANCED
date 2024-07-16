// models/Parcel.js
const mongoose = require('mongoose');

const parcelSchema = new mongoose.Schema({
  customer_name: String,
  parcel_type: String,
  from_location: String,
  to_location: String,
  phone_number: String,
  pickup_date: Date
});

const Parcel = mongoose.model('Parcel', parcelSchema);

module.exports = Parcel;
