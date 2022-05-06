const mongoose = require("mongoose");

const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const Venue = require("./Venue");

const artistSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  rating: {
    type: Number,
    required: false,
  },
  musicType: {
    type: String,
    required: true,
    trim: true,
  },
  bandSize: {
    type: Number,
    required: true,
  },
  rate: {
    type: Number,
    required: true,
  },
  pictures: {
    type: Array,
    required: false,
  },
  spotifyLink: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  venues: [Venue.schema],
});

// set up pre-save middleware to create password
artistSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
artistSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Artist = mongoose.model("Artist", artistSchema);

module.exports = Artist;
