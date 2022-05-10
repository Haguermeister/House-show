const mongoose = require("mongoose");

const { Schema } = mongoose;
const bcrypt = require("bcrypt");
const Artist = require("./Artist");
const Venue = require("./Venue");

const hostSchema = new Schema({
  username: {
    type: String,
    required: false,
    unique: true,
    trim: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
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
  artists: [
    {
      type: Schema.Types.ObjectId,
      ref: "Artist",
    },
  ],
  venues: [
    {
      type: Schema.Types.ObjectId,
      ref: "Venue",
    },
  ],
});

// set up pre-save middleware to create password
hostSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// compare the incoming password with the hashed password
hostSchema.methods.isCorrectPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Host = mongoose.model("Host", hostSchema);

module.exports = Host;
