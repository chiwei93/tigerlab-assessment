import React from "react";
import { connect } from "react-redux";
import { inputChange } from "../actions";
import "./InputField.css";

const InputField = (props) => {
  const onInputChange = (event) => {
    props.inputChange(event.target.value);
  };

  return (
    <div className="inputContainer">
      <textarea
        type="text"
        onChange={onInputChange}
        value={props.userInput}
        className="textarea"
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    userInput: state.input,
  };
};

export default connect(mapStateToProps, { inputChange })(InputField);
