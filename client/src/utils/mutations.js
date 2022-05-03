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
    $type: String!
    $email: String!
    $password: String!
  ) {
    addArtist(name: $name, type: $type, email: $email, password: $password) {
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
    $type: String!
    $email: String!
    $password: String!
  ) {
    updateArtist(name: $name, type: $type, email: $email, password: $password) {
      token
      artist {
        _id
      }
    }
  }
`;

export const ADD_VENUE = gql`
  mutation addVenue($name: String!, $description: String!, $cost: INT!) {
    addVenue(name: $name, description: $description, cost: $cost)
    host {
      _id
    }
  }
`;

export const UPDATE_VENUE = gql`
  mutation updateVenue($name: String!, $description: String!, $cost: INT!) {
    updateVenue(name: $name, description: $description, cost: $cost)
    host {
      _id
    }
  }
`;
