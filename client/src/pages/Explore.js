import React from "react";
import CalendarFilter from "../components/CalendarFilter/CalendarFilter";
import auth from "../utils/auth";
import { useQuery } from "@apollo/client";
import { GET_ARTISTS, GET_HOSTS } from "../utils/queries";
import "@progress/kendo-theme-default/dist/all.css";
import VenueCard from "../components/VenueCard/VenueCard";
import ArtistCard from "../components/ArtistCard/ArtistCard";
import { MultiSelect } from "@progress/kendo-react-dropdowns";
import { useState } from "react";
import { Redirect } from "react-router-dom";
const Explore = () => {
  const [userType, loggedIn] = auth.loggedIn();
  let artistTrue, hostTrue;
  if (userType === "artist") {
    artistTrue = true;
  } else {
    hostTrue = true;
  }
  const { data: artists } = useQuery(GET_ARTISTS, { enabled: hostTrue });
  const { data: hosts } = useQuery(GET_HOSTS, { enabled: artistTrue });
  const tags = artists ? artists.artists.map((artist) => artist.musicType) : [];
  const uniqueTags = [...new Set(tags)];
  const [selectedTags, setSelectedTags] = useState();
  const initialState = artists ? artists : [];
  console.log("initial", initialState);
  const [artistsList, setArtistsList] = useState(initialState);
  console.log(artistsList);
  const onChange = (event) => {
    setSelectedTags([...event.value]);
    /* console.log("Selected", selectedTags);
    setArtistsList(
      initialState.filter((artist) => selectedTags.includes(artist.musicType))
    );
    console.log("newlist", artistsList); */
  };
  const [renderState, setRenderParentState] = useState("explore");
  if (userType === "artist" && loggedIn) {
    return (
      <div>
        <CalendarFilter />
        <VenueCard venuesData={hosts?.hosts.venues} />
      </div>
    );
  } else if (userType === "host" && loggedIn) {
    return (
      <div>
        {renderState === "explore" ? (
          <form className="w-100 p-2">
            <div className="m-2 d-flex justify-content-around align-itms-center">
              <p className="col-4 h3 text-center">Music Type:</p>
              <div className="col-8 k-form multiSelect">
                <MultiSelect
                  data={uniqueTags}
                  value={selectedTags}
                  onChange={onChange}
                  autoClose={false}
                  rounded="large"
                />
              </div>
            </div>

            <div className=" m-2 d-flex justify-content-around align-itms-center">
              <p className="col-4 h3 text-center">Occupancy :</p>
              <div className="col-8 d-flex justify-content-around">
                <input placeholder="min" className="col-5"></input>
                <input placeholder="max" className="col-5"></input>
              </div>
            </div>
            <div className="m-2 d-flex justify-content-around align-itms-center">
              <p className="col-4 h3 text-center">Budget : </p>
              <div className="col-8 d-flex justify-content-around">
                <input placeholder="min" className="col-5"></input>
                <input placeholder="max" className="col-5"></input>
              </div>
            </div>
            <CalendarFilter />
          </form>
        ) : (
          ""
        )}
        <ArtistCard
          setRenderParentState={setRenderParentState}
          artists={artists?.artists}
        />
      </div>
    );
  } else {
    return <Redirect to={{ pathname: "/login" }} />;
  }
};
export default Explore;
