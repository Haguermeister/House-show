import React, { useState } from "react";
import { useParams } from "react-router-dom";
import VenueList from "../VenueList/VenueList";
import { useQuery, useMutation } from "@apollo/client";
import { GET_HOST, GET_MEHOST } from "../../utils/queries";
import { ADD_VENUE, DELETE_HOST, DELETE_VENUE } from "../../utils/mutations";
import auth from "../../utils/auth";
import HPModal from "../Modal/HPModal";
import "../Modal/profileModal.css";
import { Redirect } from "react-router-dom";


const HostProfile = (props) => {
  const [userType, loggedIn] = auth.loggedIn();

  const { username: userParam } = useParams();
  const [deleteHost] = useMutation(DELETE_HOST);

  // const [addVenue] = useMutation(ADD_VENUE);
  // const [deleteVenue] = useMutation(DELETE_VENUE);
  const { loading, data } = useQuery(userParam ? GET_HOST : GET_MEHOST, {
    variables: { username: userParam },
  });


  const [openModal, setOpenModal] = useState(false);

  const host = data?.meHost || {};
  console.log(host);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (!host?.firstName) {
    return <Redirect to={{ pathname: "/loginHost" }} />;
  }

  const handleClickDelete = async () => {
    try {
      const id = host._id;
      auth.logout();
      await deleteHost({
        variables: { id: id },
      });
    } catch (e) {
      console.error(e);
    }
  };



  if (userType === "host") {
    return (
      <div>
        <div className="d-flex justify-content-center pt-5">
          <h2 className="text-dark textProfile">
            Viewing {host.name ? `${host.name}'s` : "your"} account.

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
          {openModal && <HPModal closeModal={setOpenModal} />}
        </div>

        <div className="d-flex justify-content-center mt-5 mb-5">
          <button className="profileDelBtn" onClick={handleClickDelete}>
            Delete Profile
          </button>
        </div>

        {/* <div>
        {userParam && (
            <button className="profileUpBtn mr-2" onClick={clickVenue}>
              Add Venue
            </button>
          )}
          {userParam && (
            <button className="profileDelBtn" onClick={clickDelVenue}>
              Delete Venue
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
        </div> */}

      </div>
    );
  }
};
export default HostProfile;
