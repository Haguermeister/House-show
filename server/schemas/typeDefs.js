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
    rating: String
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
    artist: Artist
    host: Host
  }

  type Query {
    meArtist: Artist
    meHost: Host
    artist(name: String): Artist
    artists: [Artist]
    host(email: String): Host
    hosts: [Host]
    venue(name: String): Venue
    venues: [Venue]
  }

  type Mutation {
    loginHost(email: String!, password: String!): Auth
    addHost(
      username: String!
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    updateHost(
      username: String
      firstName: String
      lastName: String
      email: String
    ): Host
    deleteHost(id: ID!): Host
    hireArtist(artistId: ID!): Host
    fireArtist(artistId: ID!): Host
    loginArtist(email: String!, password: String): Auth
    addArtist(
      username: String!
      name: String!
      musicType: String!
      email: String!
      password: String!
    ): Auth
    updateArtist(
      username: String
      name: String
      musicType: String
      pictures: [String]
      bandSize: Int
      rate: Int
      spotifyLink: String
      email: String
    ): Artist
    deleteArtist(id: ID!): Artist
    bookVenue(venueId: ID!): Venue
    addVenue(
      name: String!
      description: String!
      occupancy: Int!
      city: String!
      pictures: [String]
      cost: Int!
      owner: String!
    ): Venue
    updateVenue(
      nameInput: String
      name: String
      description: String
      occupancy: Int
      city: String
      pictures: [String]
      owner: String
      cost: Int
    ): Venue
    deleteVenue(name: String!): Venue
  }
`;

module.exports = typeDefs;
