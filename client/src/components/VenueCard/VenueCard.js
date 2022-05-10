import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./VenueCard.css";

const VenueCard = ({ venuesData = [] }) => {
  return (
    <div>
      {venuesData.map((venue) => {
        return (
          <div
            className="d-flex justify-content-center flex-column aligin-items-center pt-2"
            key={venue.id}
          >
            <Carousel
              className="carousel mx-auto"
              showThumbs={false}
              showStatus={false}
            >
              {venue.pictures.map((picture) => {
                return (
                  <div>
                    <img
                      className="imgCarousel"
                      alt="venue pictures"
                      src={picture}
                    />
                    {/*"./images/venue2.png"*/}
                  </div>
                );
              })}
            </Carousel>

            <div className="d-flex justify-content-around pt-3 bookings-text">
              <div>
                <h2 className="h2">{venue.Name}</h2>
                <h3 className="h3">${venue.Rate}</h3>
              </div>

              <div>
                <h2 className="h2">{venue.musicType}</h2>
                <h3 className="h3">{venue.bandSize}</h3>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VenueCard;
