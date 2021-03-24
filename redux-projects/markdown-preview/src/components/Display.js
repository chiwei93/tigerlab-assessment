import React from "react";
import { connect } from "react-redux";
import "./Display.css";

const Display = (props) => {
  return (
    <div className="previewContainer">
      <h1 className="previewHeading">Markdown Preview</h1>
      <textarea value={props.userInput} className="previewSection" />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userInput: state.input,
  };
};

export default connect(mapStateToProps)(Display);
