import React from "react";
import { connect } from "react-redux";
import "./Display.css";

const Display = ({ display }) => {
  return (
    <div className="headingContainer">
      <p className="heading">{display.type ? `My ${display.type} is` : ""}</p>
      <p className="value">{display.value}</p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    display: state.display,
  };
};

export default connect(mapStateToProps)(Display);
