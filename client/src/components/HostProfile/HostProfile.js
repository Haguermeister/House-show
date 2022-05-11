import React, { useState } from "react";
import { useParams } from "react-router-dom";
import VenueList from "../VenueList/VenueList";
import { useQuery, useMutation } from "@apollo/client";
import { GET_HOST, GET_MEHOST } from "../../utils/queries";
import { ADD_VENUE, DELETE_HOST, DELETE_VENUE } from "../../utils/mutations";
import Auth from "../../utils/auth";
// import HPModal from "../components/Modal/HPModal";

const HostProfile = (props) => {
  const { userType } = Auth.loggedIn;
  const { username: userParam } = useParams();
  const [addVenue] = useMutation(ADD_VENUE);
  const [deleteHost] = useMutation(DELETE_HOST);
  const [deleteVenue] = useMutation(DELETE_VENUE);
  const { loading, data } = useQuery(userParam ? GET_HOST : GET_MEHOST, {
    variables: { username: userParam },
  });

  const [openModal, setOpenModal] = useState(false);

  const host = data?.meHost || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  if (!host?.name && userType === "host") {
    return <h4>You must be logged in to see this.</h4>;
  }
  const clickVenue = async () => {
    try {
      await addVenue({
        variables: { id: host._id },
      });
    } catch (e) {
      console.error(e);
    }
  };
  const clickDelHost = async () => {
    try {
      await deleteHost({
        variables: { id: host._id },
      });
    } catch (e) {
      console.error(e);
    }
  };
  const clickDelVenue = async () => {
    try {
      await deleteVenue({
        variables: { id: host._id },
      });
    } catch (e) {
      console.error(e);
    }
  };


  if (userType === "host") {
    return (
      <div>
        <div className="flex-row mb-3">
          <h2 className="text-dark p-3 display-inline-block">
            Viewing {userParam ? `${host.username}'s` : "your"} account.
          </h2>
          {userParam && (
            <button className="btn ml-auto" onClick={clickDelVenue}>
              Delete Venue
            </button>
          )}
          {userParam && (
            <button className="btn ml-auto" onClick={clickVenue}>
              Add Venue
            </button>
          )}
          {userParam && (
            <button className="btn ml-auto" onClick={clickDelHost}>
              Delete Host
            </button>
          )}
        </div>
        <div className="flex-row justify-space-between mb-3">
          <div className="col-12 col-lg-3 mb-3">
            <VenueList
              username={host.username}
              venueCount={host.venueCount}
              hosts={host.venues}
            />
          </div>
        </div>

        {/* <button
          className=""
          onClick={() => {
            setOpenModal(true);
          }}
        >
          Update your profile
        </button>
        {openModal && <HPModal closeModal={setOpenModal} />} */}

      </div>
    );
  }
};
export default HostProfile;
