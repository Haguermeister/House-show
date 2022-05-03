import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./ArtistCard.css";

const ArtistCard = (props) => {
  return (
    <div className="">
      {props.artistsData.map((artist) => {
        return (
          <div
            className="d-flex justify-content-center flex-column aligin-items-center  pt-2"
            key={artist.id}
          >
            <Carousel
              className="carousel mx-auto"
              showThumbs={false}
              showStatus={false}
            >
              {artist.pictures.map((picture) => {
                return (
                  <div>
                    <img
                      className="imgCarousel"
                      alt="artist pictures"
                      src={picture}
                    />
                    {/*"./images/venue2.png"*/}
                  </div>
                );
              })}
            </Carousel>

            <div className="d-flex justify-content-around pt-3">
              <div>
                <h2>{artist.Name}</h2>
                <h3>$ {artist.Rate}</h3>
              </div>

              <div>
                <h3>{artist.musicType}</h3>
                <h3>{artist.bandSize}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ArtistCard;
