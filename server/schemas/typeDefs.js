const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Venue {
    _id: ID
    name: String
    description: String
    owner: String
    occupancy: Int
    city: String
    pictures: [String]
    cost: Int
  }

  type Artist {
    _id: ID
    name: String
    musicType: String
    bandSize: Int
    rate: Int
    spotifyLink: String
    pictures: [String]
    email: String
    venues: [Venue]
  }

  type Host {
    _id: ID
    firstName: String
    lastName: String
    email: String
    artists: [Artist]
    venues: [Venue]
  }

  type Auth {
    token: ID
    artist: [Artist]
    host: [Host]
  }

  type Query {
    artist: Artist
    artists: [Artist]
    host: Host
    hosts: [Host]
    venue: Venue
    venues: [Venue]
  }

  type Mutation {
    loginHost(email: String!, password: String!): Auth
    addHost(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    updateHost(
      firstName: String
      lastName: String
      email: String
      password: String
    ): Host
    loginArtist(email: String!, password: String!): Auth
    addArtist(
      name: String!
      musicType: String!
      pictures: [String]!
      bandSize: Int!
      rate: Int!
      spotifyLink: String!
      email: String!
      password: String!
    ): Auth
    updateArtist(
      name: String!
      musicType: String!
      pictures: [String]!
      bandSize: Int!
      rate: Int!
      spotifyLink: String!
      email: String!
      password: String!
    ): Artist
    addVenue(name: String!, description: String!, cost: Int!): Auth
    updateVenue(
      name: String
      description: String
      occupancy: Int!
      city: String
      pictures: [String]!
      cost: Int
    ): Venue
  }
`;

module.exports = typeDefs;
