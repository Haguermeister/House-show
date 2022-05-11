import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "./ArtistCard.css";
import { useState } from "react";
import ArtistReservation from "../ArtistReservation/ArtistReservation";
import { FIRE_ARTIST } from "../../utils/mutations";
import { useMutation } from "@apollo/client";

import { useHistory } from "react-router-dom";

const ArtistCardBooking = ({ artists = [] }) => {
  let history = useHistory();
  const [fireArtist, { error }] = useMutation(FIRE_ARTIST);
  const clickCancel = async (event) => {
    event.preventDefault();
    const variables = { artistId: artists[event.target.id]._id };
    try {
      const mutationResponse = await fireArtist({ variables });
      console.log(mutationResponse);
      history.push("bookings");
    } catch (e) {
      console.log(e);
    }
  };
  let i = -1;
  return (
    <div>
      {artists.map((artist) => {
        i++;
        return (
          <div
            className="d-flex justify-content-center flex-column aligin-items-center"
            key={artist._id}
          >
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
                  onClick={clickCancel}
                  id={i}
                  className="col-8 btn p-3 m-2 textBtn"
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

export default ArtistCardBooking;
