import { gql } from "@apollo/client";

export const LOGIN_HOST = gql`
  mutation loginHost($email: String!, $password: String!) {
    loginHost(email: $email, password: $password) {
      token
      host {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const ADD_HOST = gql`
  mutation addHost(
    $userName: String!
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    addHost(
      userName: $userName
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      host {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const UPDATE_HOST = gql`
  mutation updateHost(
    $username: String!
    $firstName: String!
    $lastName: String!
    $email: String!
    $password: String!
  ) {
    updateHost(
      username: $username
      firstName: $firstName
      lastName: $lastName
      email: $email
      password: $password
    ) {
      token
      host {
        _id
        firstName
        lastName
      }
    }
  }
`;

export const DELETE_HOST = gql`
  mutation deleteHost($id: ID!) {
    deleteHost(id: $id) {
      _id
      firstName
      lastName
    }
  }
`;

export const HIRE_ARTIST = gql`
  mutation hireArtist($name: String!) {
    hireArtist(name: $name) {
      _id
      artists {
        _id
        name
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
        name
      }
    }
  }
`;

export const ADD_ARTIST = gql`
  mutation addArtist(
    $username: String!
    $name: String!
    $musicType: String!
    $bandSize: Int!
    $rate: Int!
    $spotifyLink: String!
    $email: String!
    $password: String!
  ) {
    addArtist(
      username: $username
      name: $name
      musicType: $musicType
      bandSize: $bandSize
      rate: $rate
      spotifyLink: $spotifyLink
      email: $email
      password: $password
    ) {
      token
      artist {
        _id
        name
      }
    }
  }
`;

export const UPDATE_ARTIST = gql`
  mutation updateArtist(
    $username: String!
    $name: String!
    $musicType: String!
    $pictures: [String]!
    $bandSize: INT!
    $rate: INT!
    $email: String!
    $password: String!
  ) {
    updateArtist(
      username: $username
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
        name
      }
    }
  }
`;

export const DELETE_ARTIST = gql`
  mutation deleteArtst($id: ID!) {
    deleteArtist(id: $id) {
      _id
      name
    }
  }
`;

export const BOOK_VENUE = gql`
  mutation bookVenue($id: ID!) {
    bookVenue(venueId: $id) {
      _id
      venue {
        _id
        name
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

export const DELETE_VENUE = gql`
  mutation deleteVenue($name: String!) {
    deleteVenue(name: $name) {
      _id
      name
    }
  }
`;
