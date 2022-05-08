import { gql } from "@apollo/client";

export const GET_MEARTIST = gql`
  {
    meArtist {
      _id
      name
      rating
      musicType
      rate
      bandSize
      pictures
      spotifyLink
      email
      venues {
        _id
      }
    }
  }
`;

export const GET_ARTIST = gql`
  query artist($name: String) {
    artist(name: $name) {
      _id
      name
      rating
      musicType
      rate
      bandSize
      pictures
      spotifyLink
      email
      venues {
        _id
      }
    }
  }
`;

export const GET_ARTISTS = gql`
  query artists {
    artists {
      _id
      name
      rating
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

export const GET_MEHOST = gql`
  {
    meHost {
      _id
      firstName
      lastName
      email
      artists {
        _id
        name
        rating
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
        rating
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
    hosts {
      _id
      firstName
      lastName
      email
      artists {
        _id
        name
        rating
        musicType
        rate
        email
      }
      venues {
        _id
      }
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
    venues {
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
