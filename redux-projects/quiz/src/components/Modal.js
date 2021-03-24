import React from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";
import { hideModal, restartQuiz } from "../actions";
import "./Modal.css";

const Modal = (props) =>
  ReactDOM.createPortal(
    <div className="overlay">
      <div className="modal">
        Congratulations! You have answered {props.questions.correctAns}{" "}
        correctly
        <button
          className="btnRestart"
          onClick={() => {
            props.hideModal();
            props.restartQuiz();
          }}
        >
          Play Again
        </button>
      </div>
    </div>,
    document.querySelector("#modal")
  );

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
  };
};

export default connect(mapStateToProps, { hideModal, restartQuiz })(Modal);
