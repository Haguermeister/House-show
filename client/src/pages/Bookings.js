import React from "react";
import ArtistCardBooking from "../components/ArtistCard/ArtistCardBooking";
import VenueCardBooking from "../components/VenueCard/VenueCardBooking";
import auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { GET_MEARTIST, GET_MEHOST } from "../utils/queries";
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
      <VenueCardBooking venues={artist?.meArtist.venues}></VenueCardBooking>
      <ArtistCardBooking artists={host?.meHost.artists}></ArtistCardBooking>
    </div>
  );
};
export default Bookings;
