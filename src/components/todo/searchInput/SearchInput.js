import React, { useState } from "react";

const SearchInput = ({ makeBold }) => {
  const [value, setValue] = useState("");

  const onChangeValue = (event) => {
    let value = event.target.value;
    value = value.replace(/[^A-zА-я]+/gi, "");

    setValue(value);
    makeBold(value);
  };

  return (
    <div className="search-todo">
      <input
        onChange={onChangeValue}
        value={value}
        type="search"
        placeholder="Search todo"
      />
    </div>
  );
};

export default SearchInput;
