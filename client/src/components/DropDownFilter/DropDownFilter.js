import * as React from "react";
import "@progress/kendo-theme-default/dist/all.css";
import { TagsMultiSelect } from "./TagsMultiSelect";
import { Slider } from "@mui/material";
const DropDownFilter = () => {
  const handleChange = () => {};
  const userState = "Host";
  return (
    <form className="w-100 p-2">
      {(userState === "Artist" && <span>State : </span>) || (
        <span>Music Type : </span>
      )}
      <TagsMultiSelect />
      {(userState === "Artist" && <span>Occupancy : </span>) || (
        <span>Band Size : </span>
      )}
      min max here
      <input></input>
      <input></input>
      {(userState === "Artist" && <span>Budget : </span>) || (
        <span>Hourly Rate : </span>
      )}
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={50}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
    </form>
  );
};

export default DropDownFilter;
