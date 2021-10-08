// Package imports
import React, { useState } from "react";

import { useDispatch } from "react-redux";
// Non-package imports
import { getFlightList } from "redux/actions";
// import "./SearchBar.scss";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const inputOnChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    // keep any sort settings that a user chose
    dispatch(getFlightList({ mission_name: inputValue }));
  };

  return (
    <form className="search" onSubmit={onSubmitHandler}>
      <input
        type="search"
        className="searchbar__input"
        placeholder="Search for a flight"
        onChange={inputOnChangeHandler}
      />
    </form>
  );
};

export default SearchBar;
