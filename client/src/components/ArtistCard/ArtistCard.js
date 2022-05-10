import React from "react";

import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./ArtistCard.css";

const ArtistCard = ({ artists = [] }) => {
  const saveArtist = () => {};
  return (
    <div>
      {artists.map((artist) => {
        return (
          <div
            className="d-flex justify-content-center flex-column aligin-items-center"
            key={artist._id}
          >
            <FontAwesomeIcon
              onClick={saveArtist}
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
            <div className="d-flex justify-content-around pt-3 bookings-text">
              <div>
                <h2 className="h2">{artist.name}</h2>
                <h3 className="h3">${artist.rate}</h3>
              </div>

              <div>
                <h2 className="h2">{artist.musicType}</h2>
                <h3 className="h3">{artist.bandSize}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ArtistCard;
