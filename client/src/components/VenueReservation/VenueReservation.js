import { faArrowLeft, faMapPin } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useMutation } from "@apollo/client";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { HIRE_ARTIST } from "../../utils/mutations";
import { useHistory } from "react-router-dom";

const VenueReservation = (props) => {
  const sweetnur = "6wt5o8DcYlzA1nCyBb2rpf";
  const handleBack = () => {
    props.setRenderState("unclicked");
    props.setRenderParentState("explore");
  };
  const [hireArtist, { error }] = useMutation(HIRE_ARTIST);
  let history = useHistory();
  const handleReservation = async (event) => {
    event.preventDefault();
    console.log("id", props.venue._id);
    const variables = { artistId: props.venue._id };
    try {
      const mutationResponse = await hireArtist({ variables });
      console.log(mutationResponse);
      history.push("bookings");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div
      className="d-flex justify-content-center flex-column aligin-items-center "
      key={props.venue._id}
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
        {props.venue.pictures.map((picture) => {
          return (
            <div>
              <img
                className="imgReservation"
                alt="venue pictures"
                src={picture}
              />
              {/*"./images/venue2.png"*/}
            </div>
          );
        })}
      </Carousel>
      <div className="d-flex justify-content-around">
        <h2 className="col-3 h2 p-2">{props.venue.name}</h2>
        <FontAwesomeIcon href="" size="xs" className="mapPin" icon={faMapPin} />
      </div>
      <div className="d-flex justify-content-around">
        <h3 className="h3 text-center col-3">
          Cost per Hour ${props.venue.cost}
        </h3>
        <h2 className="h3 text-center col-3">{props.venue.city}</h2>
        <h3 className="h3 text-center col-3">
          {" "}
          Occupancy: {props.venue.occupancy}
        </h3>
      </div>
      <p>{props.venue.description}</p>
      <button
        onClick={handleReservation}
        className=" mt-1 mx-auto btn btnReservation"
      >
        Reserve
      </button>
      {error ? (
        <div className="artistErrorText">
          <p>The server is having issues</p>
        </div>
      ) : null}
      {/* //link to stripe */}
    </div>
  );
};

export default VenueReservation;
