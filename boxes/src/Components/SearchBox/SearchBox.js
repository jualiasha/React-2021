import React from "react";

const SearchBox = (props) => {
  return (
    <div>
      <input
        type="text"
        onChange={props.search}
        placeholder="put here what you are searching for"
      ></input>
    </div>
  );
};

export default SearchBox;
