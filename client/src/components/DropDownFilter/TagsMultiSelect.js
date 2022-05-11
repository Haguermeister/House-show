import React from "react";
import { MultiSelect } from "@progress/kendo-react-dropdowns";
import { useState } from "react";
import "./MultiSelect.css";
import { GET_ARTISTS } from "../../utils/queries";
import { useQuery } from "@apollo/client";
export const TagsMultiSelect = () => {
  const { data: artists } = useQuery(GET_ARTISTS);
  const tags = artists ? artists.artists.map((artist) => artist.musicType) : [];

  const [selectedTags, setSelectedTags] = useState();
  const onChange = (event) => setSelectedTags([...event.value]);

  return (
    <form className="k-form k-my-8 multiSelect">
      <MultiSelect
        data={tags}
        value={selectedTags}
        onChange={onChange}
        autoClose={false}
        rounded="large"
      />
    </form>
  );
};

export default TagsMultiSelect;
