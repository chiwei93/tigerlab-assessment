import React from "react";
import { connect } from "react-redux";
import { userInput } from "../actions";
import "./SearchBar.css";

const SearchBar = (props) => {
  const onInputChange = (event) => {
    props.userInput(event.target.value);
  };

  return (
    <input
      type="text"
      className="searchbar"
      value={props.query}
      onChange={onInputChange}
    />
  );
};

const mapStateToProps = (state) => {
  return {
    query: state.query,
  };
};

export default connect(mapStateToProps, { userInput })(SearchBar);
