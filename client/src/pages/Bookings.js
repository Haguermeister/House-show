import React from "react";
import ArtistCardBooking from "../components/ArtistCard/ArtistCardBooking";
import VenueCardBooking from "../components/VenueCard/VenueCardBooking";
import auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { GET_MEARTIST, GET_MEHOST } from "../utils/queries";
import { Redirect } from "react-router-dom";
const Bookings = (props) => {
  const [userType, loggedIn] = auth.loggedIn();
  let artistTrue, hostTrue;
  if (userType === "artist") {
    artistTrue = true;
  } else if (userType === "host") {
    hostTrue = true;
  }
  const { data: meArtist } = useQuery(GET_MEARTIST, { enabled: artistTrue });
  const { data: meHost } = useQuery(GET_MEHOST, { enabled: hostTrue });
  console.log("meHost -", meHost ? meHost : []);
  console.log("meArtist -", meArtist ? meArtist : []);

  if (artistTrue) {
    return (
      <div className="">
        <VenueCardBooking venues={meArtist?.meArtist.venues} />
      </div>
    );
  } else if (hostTrue) {
    return <ArtistCardBooking artists={meHost?.meHost.artists} />;
  } else {
    return <Redirect to={{ pathname: "/login" }} />;
  }
};
export default Bookings;
