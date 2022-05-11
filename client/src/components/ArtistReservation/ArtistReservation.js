import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./ArtistReservation.css";

const ArtistReservation = (props) => {
  const sweetnur = "6wt5o8DcYlzA1nCyBb2rpf";
  const spotify = "open.spotify.com/artist/" + sweetnur;
  const handleBack = () => {
    props.setRenderState("unclicked");
    props.setRenderParentState("explore");
  };
  const handleReservation = () => {};
  return (
    <div
      className="d-flex justify-content-center flex-column aligin-items-center "
      key={props.artist.id}
    >
      <FontAwesomeIcon
        onClick={handleBack}
        size="xs"
        className="backButton"
        icon={faArrowLeft}
      />
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
        <h2 className="col-3 h2 p-2">{props.artist.name}</h2>
        <a href={spotify} className="col-3  p-1">
          <img className="mt-1 h-50" alt="" src="./images/spotify.png" />
        </a>
      </div>
      <div className="d-flex justify-content-around">
        <h3 className="h3 text-center col-3">${props.artist.rate}</h3>
        <h2 className="h3 text-center col-3">{props.artist.musicType}</h2>
        <h3 className="h3 text-center col-3">
          {" "}
          Band Size: {props.artist.bandSize}
        </h3>
      </div>
      <p>{props.artist.description}</p>
      <button
        onClick={handleReservation}
        className=" mt-1 mx-auto btn btnReservation"
      >
        Reserve
      </button>
      {/* //link to stripe */}
    </div>
  );
};

export default ArtistReservation;
