const mongoose = require("mongoose");

const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const Venue = require("./Venue");

const artistSchema = new Schema({
  username: {
    type: String,
    required: false,
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
    type: String,
    required: false,
  },
  musicType: {
    type: String,
    required: true,
    trim: true,
  },
  bandSize: {
    type: Number,
    required: false,
  },
  rate: {
    type: Number,
    required: false,
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
    match: [/.+@.+\..+/, "Must match an email address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  venues: [
    {
      type: Schema.Types.ObjectId,
      ref: "Venue",
    },
  ],
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
