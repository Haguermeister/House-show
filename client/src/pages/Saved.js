import React from "react";
import ArtistReservation from "../components/ArtistReservation/ArtistReservation";
const Saved = () => {
  const artists = {
    Name: "Austin",
    Rate: "50 per Hour",
    musicType: "Pop",
    bandSize: "2-4",
    pictures: [
      "/images/artist.png",
      "/images/artist.png",
      "/images/artist.png",
      "/images/artist.png",
    ],
    id: 0.123,
  };
  return (
    <div className="">
      <ArtistReservation artist={artists} />
    </div>
  );
};
export default Saved;
