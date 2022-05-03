import React, { useState } from "react";
import ArtistCard from "../components/ArtistCard/ArtistCard";
const Bookings = (props) => {
  return (
    <div className="">
      {props.UserType === "Artist" && (
        <ArtistCard artistsData={props.artists} />
      )}
      {props.UserType === "Venue" && <VenueCard venuesData={props.venues} />}
    </div>
  );
};
export default Bookings;
