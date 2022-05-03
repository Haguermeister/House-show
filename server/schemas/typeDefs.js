const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Vemue {
    _id: ID
    name: String
    description: String
    image: String
    cost: INT
  }

  type Artist {
    _id: ID
    name: String
    type: String
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
    addHost(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateHost(firstName: String, lastName: String, email: String, password: String): Host
    addArtist(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    updateArtist(name: String, email: String, password: String): Artist
    addVenue(name: String!, description: String!, cost: INT!): Auth
    updateVenue(name: String, description: String, cost: INT): Venue
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
