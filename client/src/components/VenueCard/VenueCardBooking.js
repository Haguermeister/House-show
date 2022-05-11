import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useState } from "react";
import VenueReservation from "../ArtistReservation/ArtistReservation";
import { REMOVE_VENUE } from "../../utils/mutations";
import { useMutation } from "@apollo/client";
import { useHistory } from "react-router-dom";

const VenueCardBooking = ({ venues = [] }) => {
  let history = useHistory();
  const [removeVenue, { error }] = useMutation(REMOVE_VENUE);
  const clickCancel = async (event) => {
    event.preventDefault();
    const variables = { venueId: venues[event.target.id]._id };
    try {
      const mutationResponse = await removeVenue({ variables });
      console.log(mutationResponse);
      history.push("bookings");
    } catch (e) {
      console.log(e);
    }
  };
  let i = -1;
  return (
    <div>
      {venues.map((venue) => {
        i++;
        return (
          <div
            className="d-flex justify-content-center flex-column aligin-items-center"
            key={venue._id}
          >
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
                  onClick={clickCancel}
                  id={i}
                  className="col-8 btn p-2 textBtn"
                >
                  Cancel Reservation
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VenueCardBooking;
