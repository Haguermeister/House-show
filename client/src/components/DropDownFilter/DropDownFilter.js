import * as React from "react";
import "@progress/kendo-theme-default/dist/all.css";
import { TagsMultiSelect } from "./TagsMultiSelect";

const DropDownFilter = () => {
  return (
    <div className="w-100 p-2">
      <TagsMultiSelect />
      <TagsMultiSelect />
      <TagsMultiSelect />
    </div>
  );
};

export default DropDownFilter;
