import React from "react";
import ArtistCard from "../components/ArtistCard/ArtistCard";
import auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { GET_MEARTIST, GET_MEHOST } from "../utils/queries";
import VenueCard from "../components/VenueCard/VenueCard";
const Bookings = (props) => {
  const [userType, loggedIn] = auth.loggedIn();
  let artistTrue, hostTrue;
  if (userType === "artist") {
    artistTrue = true;
  } else {
    hostTrue = true;
  }
  const { data: artist } = useQuery(GET_MEARTIST, { enabled: artistTrue });
  const { data: host } = useQuery(GET_MEHOST, { enabled: hostTrue });
  return (
    <div className="">
      {loggedIn && artist ? (
        <VenueCard venuesData={artist.venues}></VenueCard>
      ) : null}
      {loggedIn && host ? (
        <ArtistCard artistsData={host.artists}></ArtistCard>
      ) : null}
    </div>
  );
};
export default Bookings;
