import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./ArtistReservation.css";

const ArtistReservation = (props) => {
  return (
    <div
      className="d-flex justify-content-center flex-column aligin-items-center "
      key={props.artist.id}
    >
      <Carousel
        className="carouselReservation"
        showThumbs={false}
        showStatus={false}
      >
        {props.artist.pictures.map((picture) => {
          return (
            <div>
              <img
                className="imgReservation"
                alt="artist pictures"
                src={picture}
              />
              {/*"./images/venue2.png"*/}
            </div>
          );
        })}
      </Carousel>

      <h2 className="p-2">{props.artist.Name}</h2>
      <span>stars</span>
      <span>spotify link</span>
      <h3 className="h3">${props.artist.Rate}</h3>
      <span>Description</span>
      <h2 className="h2">{props.artist.musicType}</h2>
      <h3 className="h3">{props.artist.bandSize}</h3>
      <button className="btn btnReservation">Reserve</button>
    </div>
  );
};

export default ArtistReservation;
