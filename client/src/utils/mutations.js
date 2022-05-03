import { gql } from "@apollo/client";

export const LOGIN_HOST = gql`
  mutation loginHost($email: String!, $password: String!) {
    loginHost(email: $email, password: $password) {
      token
      host {
        _id
      }
    }
  }
`;

export const ADD_HOST = gql`
  mutation addHost(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addHost(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      host {
        _id
      }
    }
  }
`;

export const UPDATE_HOST = gql`
  mutation updateHost(
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    updateHost(
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      host {
        _id
      }
    }
  }
`;

export const LOGIN_ARTIST = gql`
  mutation loginArtist($email: String!, $password: String!) {
    loginArtist(email: $email, password: $password) {
      token
      artist {
        _id
      }
    }
  }
`;

export const ADD_ARTIST = gql`
  mutation addArtist(
    $name: String!
    $musicType: String!
    $pictures: [String]!
    $bandSize: INT!
    $rate: INT!
    $email: String!
    $password: String!
  ) {
    addArtist(
      name: $name
      musicType: $musicType
      pictures: $pictures
      bandSize: $bandSize
      rate: $rate
      email: $email
      password: $password
    ) {
      token
      artist {
        _id
      }
    }
  }
`;

export const UPDATE_ARTIST = gql`
  mutation updateArtist(
    $name: String!
    $musicType: String!
    $pictures: [String]!
    $bandSize: INT!
    $rate: INT!
    $email: String!
    $password: String!
  ) {
    updateArtist(
      name: $name
      musicType: $musicType
      pictures: $pictures
      bandSize: $bandSize
      rate: $rate
      email: $email
      password: $password
    ) {
      token
      artist {
        _id
      }
    }
  }
`;

export const ADD_VENUE = gql`
  mutation addVenue(
    $name: String!
    $description: String!
    $occupancy: INT!
    $city: String!
    $pictures: [String]!
    $cost: INT!
  ) {
    addVenue(
      name: $name
      description: $description
      occupancy: $occupancy
      city: $city
      pictures: $pictures
      cost: $cost
    )
    host {
      _id
    }
  }
`;

export const UPDATE_VENUE = gql`
  mutation updateVenue(
    $name: String!
    $description: String!
    $occupancy: INT!
    $city: String!
    $pictures: [String]!
    $cost: INT!
  ) {
    updateVenue(
      name: $name
      description: $description
      occupancy: $occupancy
      city: $city
      pictures: $pictures
      cost: $cost
    )
    host {
      _id
    }
  }
`;
