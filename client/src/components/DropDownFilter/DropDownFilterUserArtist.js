import * as React from "react";
import "@progress/kendo-theme-default/dist/all.css";
import { TagsMultiSelect } from "./TagsMultiSelect";
import { Slider } from "@mui/material";
const DropDownFilterArtist = () => {
  const handleChange = () => {};
  return (
    <form className="w-100 p-2">
      <TagsMultiSelect />
      <span>Occupancy : </span>) min max here
      <input></input>
      <input></input>
      <span>Budget : </span>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={20}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
    </form>
  );
};

export default DropDownFilterArtist;
