import React from "react";
import ArtistCard from "../components/ArtistCard/ArtistCard";
const Bookings = (props) => {
  const artists = [
    {
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
    },
    {
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
      id: 0.124,
    },
  ];
  return (
    <div className="">
      <ArtistCard artistsData={artists}></ArtistCard>;
    </div>
  );
};
export default Bookings;
