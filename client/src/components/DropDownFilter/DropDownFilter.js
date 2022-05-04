import * as React from "react";
import "@progress/kendo-theme-default/dist/all.css";
import { TagsMultiSelect } from "./TagsMultiSelect";

const DropDownFilter = () => {
  const userState = "Host";
  return (
    <div className="w-100 p-2">
      {(userState === "Artist" && <span>State : </span>) || (
        <span>Music Type : </span>
      )}
      <TagsMultiSelect />
      {(userState === "Artist" && <span>Occupancy : </span>) || (
        <span>Band Size : </span>
      )}
      min max here
      <TagsMultiSelect />
      {(userState === "Artist" && <span>Budget : </span>) || (
        <span>Hourly Rate : </span>
      )}
      Slider Here
      <TagsMultiSelect />
    </div>
  );
};

export default DropDownFilter;
