const { AuthenticationError } = require("apollo-server-express");
const { Artist, Host, Venue } = require("../models");
const { signToken } = require("../utils/auth");
const stripe = require("stripe")("sk_test_4eC39HqLyjWDarjtT1zdp7dc");

const resolvers = {
  Query: {
    meArtist: async (parent, args, context) => {
      if (context.user) {
        const artistData = await Artist.findOne({ _id: context.user._id })
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
      console.log(context.user);
      if (context.user) {
        const hostData = await Host.findOne({ _id: context.user._id })
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

      const correctPw = await host.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(host);

      return { token, host };
    },
    addHost: async (parent, args) => {
      const host = await Host.create(args);
      const token = signToken(host);

      return { token, host };
    },
    updateHost: async (parent, args, context) => {
      if (context.user) {
        return await Host.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    deleteHost: async (parent, { id }, context) => {
      if (context) {
        return await Host.findByIdAndDelete(id);
      }

      throw new AuthenticationError("Not logged in");
    },
    hireArtist: async (parent, { artistId }, context) => {
      if (context.user) {
        const updatedHost = await Host.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { artists: artistId } },
          { new: true }
        ).populate("artists");

        return updatedHost;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    fireArtist: async (parent, { artistId }, context) => {
      if (context.user) {
        const updatedHost = await Host.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { artists: artistId } },
          { new: true }
        ).populate("artists");

        return updatedHost;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    loginArtist: async (parent, { email, password }, context) => {
      const artist = await Artist.findOne({ email });

      if (!artist) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await artist.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const token = signToken(artist);

      return { token, artist };
    },
    addArtist: async (parent, { email, password, name, musicType }) => {
      const artist = await Artist.create({
        email,
        password,
        name,
        musicType,
      });
      const token = signToken(artist);

      return { token, artist };
    },
    updateArtist: async (parent, args, context) => {
      if (context.user) {
        return await Artist.findByIdAndUpdate(context.user._id, args, {
          new: true,
        });
      }

      throw new AuthenticationError("Not logged in");
    },
    deleteArtist: async (parent, { id }, context) => {
      if (context) {
        return await Artist.findByIdAndDelete(id);
      }

      throw new AuthenticationError("Not logged in");
    },
    bookVenue: async (parent, { venueId }, context) => {
      if (context.user) {
        const updatedArtist = await Artist.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { venues: venueId } },
          { new: true }
        ).populate("venues");

        return updatedArtist;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    removeVenue: async (parent, { venueId }, context) => {
      if (context.user) {
        const updatedArtist = await Artist.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { venues: venueId } },
          { new: true }
        ).populate("venues");

        return updatedArtist;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    addVenue: async (parent, args, context) => {
      if (context.user) {
        const venue = await Venue.create({
          ...args,
          hostId: context.user._id,
        });

        await Host.findByIdAndUpdate(
          { _id: context.user._id },
          { $addToSet: { venues: venue._id } },
          { new: true }
        );

        return venue;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    updateVenue: async (parent, args, context) => {
      if (context.user) {
        const updatedVenue = await Venue.findOneAndUpdate(
          { name: args.nameInput },
          { $set: args },
          { new: true }
        );

        return updatedVenue;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    deleteVenue: async (parent, { name }, context) => {
      if (context.user) {
        return await Venue.findOneAndDelete({ name: name });
      }

      throw new AuthenticationError("Not logged in");
    },
  },
};

module.exports = resolvers;
