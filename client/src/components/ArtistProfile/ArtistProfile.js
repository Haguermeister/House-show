import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { GET_ARTIST, GET_MEARTIST } from "../../utils/queries";
import { DELETE_ARTIST } from "../../utils/mutations";
import auth from "../../utils/auth";
import APModal from "../Modal/APModal";
import "../Modal/profileModal.css";

const ArtistProfile = (props) => {
  const [userType] = auth.loggedIn();

  console.log(userType);

  const { username: userParam } = useParams();
  const [deleteArtist] = useMutation(DELETE_ARTIST);
  const { loading, data } = useQuery(userParam ? GET_ARTIST : GET_MEARTIST, {
    variables: { username: userParam },
  });
  console.log(data);

  const [openModal, setOpenModal] = useState(false);

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
        <div className="d-flex justify-content-center pt-5">
          <h2 className="text-dark textProfile">
            Viewing {artist.name ? `${artist.name}'s` : "your"} account.
          </h2>
        </div>

        <div className="d-flex justify-content-center mt-5">
        <button
          className="profileUpBtn"
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Update Profile
        </button>
        {openModal && <APModal closeModal={setOpenModal} />}
        </div>

        <div className="d-flex justify-content-center mt-5 mb-5">
        <button className="profileDelBtn" onClick={handleClickDelete}>
            Delete Profile
        </button>
        </div>

      </div>
    );
  }
};
export default ArtistProfile;
