const mongoose = require("mongoose");

const { Schema } = mongoose;

const venueSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  owner: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  occupancy: {
    type: Number,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  pictures: {
    type: Array,
    required: false,
  },
  cost: {
    type: Number,
    required: true,
  },
});

const Venue = mongoose.model("Venue", venueSchema);

module.exports = Venue;
