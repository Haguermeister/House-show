import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const VenueCard = (props) => {
  return (
    <div>
      {props.VenuesData.map((venue) => {
        return (
          <div key={venue.id}>
            <Carousel showThumbs={false} showStatus={false}>
              {venue.pictures.map((picture) => {
                return (
                  <div>
                    <img alt="venue pictures" src={picture} />
                    {/*"./images/venue2.png"*/}
                  </div>
                );
              })}
            </Carousel>
            <h2>{venue.Owner}</h2>
            <h3>{venue.City}</h3>
            <h3>{venue.musicType}</h3>
            <h3>{venue.Occupancy}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default VenueCard;
