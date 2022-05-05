const { AuthenticationError } = require("apollo-server-express");
const { Artist, Host, Venue } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    meArtist: async (parent, args, context) => {
      if (context.artist) {
        const artistData = await Artist.findOne({ _id: context.artist._id })
          .select("-__v -password")
          .populate("venues");

        return artistData;
      }

      throw new AuthenticationError("Not logged in");
    },
    artist: async (parent, { name }) => {
      return Artist.findOne({ name })
        .select("-__v -password")
        .populate("venues");
    },
    artists: async () => {
      return Artist.find().select("-__v -password").populate("venues");
    },
    meHost: async (parent, args, context) => {
      if (context.host) {
        const hostData = await Host.findOne({ _id: context.host._id })
          .select("-__v -password")
          .populate("artists")
          .populate("venues");

        return hostData;
      }

      throw new AuthenticationError("Not logged in");
    },
    host: async (parent, { email }) => {
      return Host.findOne({ email })
        .select("-__v -password")
        .populate("artists")
        .populate("venues");
    },
    hosts: async () => {
      return Host.find()
        .select("-__v -password")
        .populate("artists")
        .populate("venues");
    },
    venue: async (parent, { name }) => {
      return Venue.findOne({ name });
    },
    venues: async () => {
      return Venue.find();
    },
  },

  Mutation: {
    loginHost: async (parent, { email, password }) => {
      const host = await Host.findOne({ email });

      if (!host) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await Host.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(host);

      return { token, user };
    },
    addHost: async (parent, args) => {
      const host = await Host.create(args);
      const token = signToken(host);

      return { token, host };
    },
    updateHost: async (parent, args, context) => {
      if (context.host) {
        return await Host.findByIdAndUpdate(context.host._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    hireArtist: async (parent, { artistId }, context) => {
      if (context.host) {
        const updatedHost = await Host.findOneAndUpdate(
          { _id: context.host._id },
          { $addToSet: { artists: artistId } },
          { new: true }
        ).populate("artists");

        return updatedHost;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    loginArtist: async (parent, { email, password }) => {
      const artist = await Artist.findOne({ email });

      if (!artist) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await Artist.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(artist);

      return { token, artist };
    },
    addArtist: async (parent, args) => {
      const artist = await Artist.create(args);
      const token = signToken(artist);

      return { token, artist };
    },
    updateArtist: async (parent, args, context) => {
      if (context.artist) {
        return await Artist.findByIdAndUpdate(context.artist._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    bookVenue: async (parent, { venueId }, context) => {
      if (context.artist) {
        const updatedArtist = await Artist.findOneAndUpdate(
          { _id: context.artist._id },
          { $addToSet: { venues: venueId } },
          { new: true }
        ).populate("venues");

        return updatedArtist;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    addVenue: async (parent, args, context) => {
      if (context.host) {
        const venue = await Venue.create({
          ...args,
          hostId: context.host._id,
        });

        const updatedHost = await Host.findByIdAndUpdate(
          { _id: context.host._id },
          { $push: { venues: venue._id } },
          { new: true }
        );

        return updatedHost;
      }
    },
    updateVenue: async (parent, args, context) => {
      if (context.host) {
        const venue = await Venue.findByIdAndUpdate(id, args, { new: true });

        const updatedHost = await Host.findByIdAndUpdate(
          { _id: context.host._id },
          { $push: { venues: venue._id } },
          { new: true }
        );

        return updatedHost;
      }
    },
  },
};

module.exports = resolvers;
