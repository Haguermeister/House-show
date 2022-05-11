import React from "react";

import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./ArtistCard.css";
import { useState } from "react";
import ArtistReservation from "../ArtistReservation/ArtistReservation";

const ArtistCard = ({ setRenderParentState, artists = [] }) => {
  const [renderState, setRenderState] = useState("unclicked");
  const [artistProp, setArtistProp] = useState({});

  const clickReserve = (event) => {
    setArtistProp(artists[event.target.id]);
    setRenderState("clicked");
    setRenderParentState("reservation");
  };
  let i = -1;
  if (renderState === "unclicked") {
    return (
      <div>
        {artists.map((artist) => {
          i++;
          return (
            <div
              className="d-flex justify-content-center flex-column aligin-items-center"
              key={artist._id}
            >
              <FontAwesomeIcon
                size="xs"
                className="heartButton"
                icon={faHeartCirclePlus}
              />
              <Carousel
                className="carousel mx-auto"
                showThumbs={false}
                showStatus={false}
              >
                {artist.pictures.map((picture) => {
                  return (
                    <img
                      className="imgCarousel"
                      alt="artist pictures"
                      src={picture}
                    />
                  );
                })}
              </Carousel>
              <div className="d-flex justify-content-around align-items-center pt-3  ">
                <div className="text-center col-4 d-flex justify-content-between flex-column ">
                  <h2 className="h2 ">{artist.name}</h2>
                  <h3 className="h2">${artist.rate}</h3>
                </div>

                <div className=" text-center col-4 d-flex justify-content-between align-items-center flex-column ">
                  <h2 className="h2 ">{artist.musicType}</h2>
                  <button
                    onClick={clickReserve}
                    id={i}
                    className="col-8 btn p-2 textBtn"
                  >
                    Reserve
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  } else if (renderState === "clicked") {
    return (
      <ArtistReservation
        setRenderParentState={setRenderParentState}
        setRenderState={setRenderState}
        artist={artistProp}
      />
    );
  }
};

export default ArtistCard;
