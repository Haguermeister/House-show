import * as React from "react";
import "@progress/kendo-theme-default/dist/all.css";
import { TagsMultiSelect } from "./TagsMultiSelect";
import { Slider } from "@mui/material";
const DropDownFilter = () => {
  const handleChange = () => {};
  const userState = "Host";
  return (
    <form className="text-center pt-4">
      {(userState === "Artist" && <span>State : </span>) || (
        <span className="ddText">Music Type </span>
      )}
      <TagsMultiSelect />
      {(userState === "Artist" && <span>Occupancy : </span>) || (
        <span className="ddText">Band Size</span>
      )}

      <div>
        <input hint="input" type="text" placeholder="Minimum" />
        <input hint="input" type="text" placeholder="Maximum" />
      </div>
      
      <div className="pt-5">
      {(userState === "Artist" && <span>Budget : </span>) || (
        <span className="ddText">Hourly Rate</span>
      )}
      <Slider
        getAriaLabel={() => "Temperature range"}
        defaultValue={50}
        min={0}
        max={100}
        onChange={handleChange}
        valueLabelDisplay="auto"
        sx={{
          color: '#6f48eb'
        }}
          
      />
      </div>
    </form>
  );
};

export default DropDownFilter;
