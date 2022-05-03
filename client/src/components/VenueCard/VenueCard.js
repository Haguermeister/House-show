import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

const VenueCard = (props) => {
  return (
    <div>
      {props.VenuesData.map((venue) => {
        return (
          <div key={artist.id}>
            <Carousel showThumbs={false} showStatus={false}>
              {artist.pictures.map((picture) => {
                return (
                  <div>
                    <img alt="artist pictures" src={picture} />
                    {/*"./images/venue2.png"*/}
                  </div>
                );
              })}
            </Carousel>
            <h2>{artist.Name}</h2>
            <h3>$ {artist.Rate}</h3>
            <h3>{artist.musicType}</h3>
            <h3>{artist.bandSize}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default ArtistCard;
