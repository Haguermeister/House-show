import React from "react";
import CalendarFilter from "../components/CalendarFilter/CalendarFilter";
import DropDownFilter from "../components/DropDownFilter/DropDownFilter";

const Explore = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center">
      <DropDownFilter />
      <CalendarFilter />
    </div>
  );
};
export default Explore;
