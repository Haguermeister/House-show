import React from "react";
import { Redirect, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ARTIST, GET_MEARTIST } from "../../utils/queries";
import { DELETE_ARTIST } from "../../utils/mutations";
import auth from "../../utils/auth";
const ArtistProfile = (props) => {
  const [userType, loggedIn] = auth.loggedIn();

  console.log(userType);

  const { username: userParam } = useParams();
  const [deleteArtist] = useMutation(DELETE_ARTIST);
  const { loading, data } = useQuery(userParam ? GET_ARTIST : GET_MEARTIST, {
    variables: { username: userParam },
  });
  console.log(data);
  const artist = data?.meArtist || {};
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!artist?.name) {
    return <h4>You must be logged in to see this.</h4>;
  }
  const handleClickDelete = async () => {
    try {
      const id = artist._id;
      auth.logout();
      await deleteArtist({
        variables: { id: id },
      });
    } catch (e) {
      console.error(e);
    }
  };
  if (userType === "artist") {
    return (
      <div>
        <div className="flex-row mb-3">
          <h2 className="bg-dark text-secondary p-3 display-inline-block">
            Viewing {artist.name ? `${artist.name}'s` : "your"} account.
          </h2>
          <button className="btn ml-auto" onClick={handleClickDelete}>
            Delete Artist
          </button>
        </div>
      </div>
    );
  }
};
export default ArtistProfile;
