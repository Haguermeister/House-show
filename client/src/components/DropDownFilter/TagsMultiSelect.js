import React from "react";
import { MultiSelect } from "@progress/kendo-react-dropdowns";
import { useState } from "react";
import "./MultiSelect.css";

const tags = [
  "JavaScript",
  "TypeScript",
  "React",
  "Next",
  "Vue",
  "Nuxt",
  "Node",
  "Python",
];

export const TagsMultiSelect = () => {
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
