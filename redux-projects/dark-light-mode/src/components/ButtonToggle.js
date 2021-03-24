import React from "react";
import { connect } from "react-redux";
import { toggleMode } from "../actions";
import "./ButtonToggle.css";

const ButtonToggle = (props) => {
  const dark = props.darkMode ? "dark" : "";

  return (
    <button className={`btnToggle ${dark}`} onClick={() => props.toggleMode()}>
      Dark Mode
    </button>
  );
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode,
  };
};

export default connect(mapStateToProps, { toggleMode })(ButtonToggle);
