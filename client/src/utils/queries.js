import { gql } from "@apollo/client";

export const GET_ARTIST = gql`
  query artist($name: Sring!) {
    artist(name: $name) {
      _id
      username
      name
      musicType
      rate
      bandSize
      pictures
      spotifyLink
      email
      venues {
        _id
        name
        owner
        city
        description
        occupancy
        cost
      }
    }
  }
`;

export const GET_ARTISTS = gql`
  query artists {
    _id
    username
    name
    musicType
    rate
    bandSize
    pictures
    spotifyLink
    email
    venues {
      _id
      name
      owner
      city
      description
      occupancy
      cost
    }
  }
`;

export const GET_HOST = gql`
  query host($email: String!) {
    host(email: $email) {
      _id
      username
      firstName
      lastName
      email
      artists {
        _id
        name
        musicType
        rate
        email
      }
      venues {
        _id
        name
        owner
        city
        description
        occupancy
        cost
      }
    }
  }
`;

export const GET_HOSTS = gql`
  query hosts {
    _id
    username
    firstName
    lastName
    email
    artists {
      _id
      name
      musicType
      rate
      email
    }
    venues {
      _id
      name
      owner
      city
      description
      occupancy
      cost
    }
  }
`;

export const GET_VENUE = gql`
  query venue($name: String!) {
    venue(name: $name) {
      _id
      name
      owner
      description
      city
      occupancy
      pictures
      cost
    }
  }
`;

export const GET_VENUES = gql`
  query venues {
    _id
    name
    owner
    description
    city
    occupancy
    pictures
    const
  }
`;
