import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./ArtistReservation.css";

const ArtistReservation = (props) => {
  const spotify = "www.spotify.com/" + props.artist.spotify;
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
      <div className="d-flex justify-content-around">
        <h2 className="col-3 p-2 display-4">{props.artist.Name}</h2>
        <span className="col-3 text-warning">{props.artist.rating}</span>
        <a href={spotify} className="col-3 p-1">
          <img className="mt-1 h-75" alt="" src="./images/spotify.png" />
        </a>
      </div>
      <div className="d-flex justify-content-around">
        <h3 className="h3 col-3">${props.artist.rate}</h3>
        <h2 className="h3 col-3">{props.artist.musicType}</h2>
        <h3 className="h3 col-3"> Band Size: {props.artist.bandSize}</h3>
      </div>
      <p>{props.artist.description}</p>
      <button className=" mt-1 mx-auto btn btnReservation">Reserve</button>
      {/* //link to stripe */}
    </div>
  );
};

export default ArtistReservation;
