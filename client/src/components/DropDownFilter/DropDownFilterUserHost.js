import * as React from "react";
import "@progress/kendo-theme-default/dist/all.css";
import { TagsMultiSelect } from "./TagsMultiSelect";
import { Slider } from "@mui/material";
const DropDownFilterHost = () => {
  const handleChange = () => {};
  return (
    <form className="w-100 p-2">
      <span>Music Type : </span>
      <TagsMultiSelect />
      <span>Band Size : </span>
      min max here
      <input></input>
      <input></input>
      <span>Hourly Rate : </span>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={50}
        onChange={handleChange}
        valueLabelDisplay="auto"
      />
    </form>
  );
};

export default DropDownFilterHost;
