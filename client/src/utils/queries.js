import { gql } from "@apollo/client";

export const GET_ARTIST = gql`
  query artist($name: Sring!) {
    artist(name: $name) {
      _id
      name
      musicType
      rate
      bandSize
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
    name
    musicType
    rate
    bandSize
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
      image
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
    image
    const
  }
`;
