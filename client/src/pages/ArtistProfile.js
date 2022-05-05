import React from "react";
import { Redirect, useParams } from 'react-router-dom';

// import UpdateArtist from '../components/UpdateArtist';

import { useQuery, useMutation } from '@apollo/client';
import { GET_ARTIST, GET_MEARTIST } from '../utils/queries';
import { ADD_ARTIST } from '../utils/mutations';
import Auth from '../utils/auth';

const ArtistProfile = (props) => {
  const { username: userParam } = useParams();

  const [addArtist] = useMutation(ADD_ARTIST);
  const { loading, data } = useQuery(userParam ? GET_ARTIST : GET_MEARTIST, {
    variables: { username: userParam },
  });

  const artist = data?.me || data?.artist || {};

  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/profile" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!artist?.username) {
    return (
      <h4>
        You must be logged in to see this.
      </h4>
    );
  }

  const handleClick = async () => {
    try {
      await addArtist({
        variables: { id: artist._id },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing {userParam ? `${artist.username}'s` : 'your'} profile.
        </h2>

        {userParam && (
          <button className="btn ml-auto" onClick={handleClick}>
            Add Artist
          </button>
        )}
      </div>

      <div className="flex-row justify-space-between mb-3">
        <div className="col-12 col-lg-3 mb-3">
          <ArtistList
            username={artist.username}
            artistCount={artist.artistCount}
            artists={artist.artists}
          />
        </div>
      </div>
      {/* <div className="mb-3">{!userParam && <UpdateArtist />}</div> */}
    </div>
  );
};

export default ArtistProfile;
