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
    rating: Int
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
    meArtist: Artist
    meHost: Host
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
      userName: String!
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    updateHost(
      username: String!
      firstName: String
      lastName: String
      email: String
      password: String
    ): Host
    deleteHost(id: ID!): Host
    hireArtist(artistId: ID!): Artist
    loginArtist(email: String!, password: String): Auth
    addArtist(
      username: String!
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
      username: String!
      name: String!
      musicType: String!
      pictures: [String]!
      bandSize: Int!
      rate: Int!
      spotifyLink: String!
      email: String!
      password: String!
    ): Artist
    deleteArtist(id: ID!): Artist
    bookVenue(venueId: ID!): Venue
    addVenue(name: String, description: String, cost: Int): Auth
    updateVenue(
      name: String
      description: String
      occupancy: Int!
      city: String
      pictures: [String]!
      cost: Int
    ): Venue
    deleteVenue(name: String!): Venue
  }
`;

module.exports = typeDefs;
