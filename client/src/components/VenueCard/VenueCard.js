import React from "react";

import { Carousel } from "react-responsive-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useState } from "react";
import VenueReservation from "../VenueReservation/VenueReservation";

const VenueCard = ({ setRenderParentState, venues = [] }) => {
  const [renderState, setRenderState] = useState("unclicked");
  const [venueProp, setVenueProp] = useState({});

  const clickReserve = (event) => {
    setVenueProp(venues[event.target.id]);
    setRenderState("clicked");
    setRenderParentState("reservation");
  };
  let i = -1;
  if (renderState === "unclicked") {
    return (
      <div>
        {venues.map((venue) => {
          i++;
          return (
            <div
              className="d-flex justify-content-center flex-column aligin-items-center"
              key={venue._id}
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
                {venue.pictures.map((picture) => {
                  return (
                    <img
                      className="imgCarousel"
                      alt="venue pictures"
                      src={picture}
                    />
                  );
                })}
              </Carousel>
              <div className="d-flex justify-content-around align-items-center pt-3  ">
                <div className="text-center col-4 d-flex justify-content-between flex-column ">
                  <h2 className="h2 ">{venue.name}</h2>
                  <h3 className="h2">Cost per Hour ${venue.cost}</h3>
                </div>

                <div className=" text-center col-4 d-flex justify-content-between align-items-center flex-column ">
                  <h2 className="h2 ">{venue.city}</h2>
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
      <VenueReservation
        setRenderParentState={setRenderParentState}
        setRenderState={setRenderState}
        venue={venueProp}
      />
    );
  }
};

export default VenueCard;
