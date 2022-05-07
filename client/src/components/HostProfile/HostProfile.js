import React from "react";
import { Redirect, useParams } from "react-router-dom";

import VenueList from "../components/VenueList";
import { useQuery, useMutation } from "@apollo/client";
import { GET_HOST, GET_MEHOST } from "../../utils/queries";
import { ADD_VENUE } from "../../utils/mutations";
import { DELETE_HOST } from "../../utils/mutations";
import { DELETE_VENUE } from "../../utils/mutations";
import Auth from "../../utils/auth";

const HostProfile = (props) => {
  const { username: userParam } = useParams();

  const [addVenue] = useMutation(ADD_VENUE);
  const [deleteHost] = useMutation(DELETE_HOST);
  const [deleteVenue] = useMutation(DELETE_VENUE);
  const { loading, data } = useQuery(userParam ? GET_HOST : GET_MEHOST, {
    variables: { username: userParam },
  });

  const host = data?.me || data?.host || {};

  // redirect to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Redirect to="/account" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!host?.username) {
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

  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="bg-dark text-secondary p-3 display-inline-block">
          Viewing {userParam ? `${host.username}'s` : "your"} account.
        </h2>

        {userParam && (
          <button className="btn ml-auto" onClick={clickVenue}>
            Add Venue
          </button>
        )}

        {userParam && (
          <button className="btn ml-auto" onClick={clickDelHost}>
            Add Venue
          </button>
        )}

        {userParam && (
          <button className="btn ml-auto" onClick={clickDelVenue}>
            Add Venue
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
    </div>
  );
};

export default HostProfile;
