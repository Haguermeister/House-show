import React from "react";
import CalendarFilter from "../components/CalendarFilter/CalendarFilter";
import auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { GET_ARTISTS, GET_HOSTS } from "../utils/queries";
import DropDownFilterUserArtist from "../components/DropDownFilter/DropDownFilterUserArtist";
import DropDownFilterUserHost from "../components/DropDownFilter/DropDownFilterUserHost";
import VenueCard from "../components/VenueCard/VenueCard";
import ArtistCard from "../components/ArtistCard/ArtistCard";
const Explore = () => {
  const [userType, loggedIn] = auth.loggedIn();
  let artistTrue, hostTrue;
  if (userType === "artist") {
    artistTrue = true;
  } else {
    hostTrue = true;
  }
  const { data: artists } = useQuery(GET_ARTISTS, { enabled: hostTrue });
  const { data: hosts } = useQuery(GET_HOSTS);
  console.log(hosts);

  if (userType === "artist" && loggedIn) {
    return (
      <div>
        <DropDownFilterUserHost artists={artists} />
        <CalendarFilter />
        <VenueCard venuesData={hosts?.hosts.venues} />
      </div>
    );
  } else if (userType === "hosts" && loggedIn) {
    return (
      <div>
        <DropDownFilterUserArtist hosts={hosts} />
        <CalendarFilter />
        <ArtistCard artists={artists?.artists} />
      </div>
    );
  } else {
    return <p> Not Logged In</p>;
  }
};
export default Explore;
