import React from "react";
import { connect } from "react-redux";
import {
  questionsNumChange,
  categoryChange,
  difficultyChange,
  fetchQuestions,
} from "../actions";
import "./SetupForm.css";

const SetupForm = (props) => {
  const onSetupFormSubmit = (event) => {
    event.preventDefault();

    if (!props.setup.questionsNum) return;

    props.fetchQuestions(props.setup);
  };

  return (
    <form className="setupForm" onSubmit={onSetupFormSubmit}>
      <h2 className="setupHeading">Setup Quiz</h2>

      <ul className="setupList">
        <li className="setupItem">
          <label htmlFor="questions" className="setupLabel">
            Numbers of Question:
          </label>
          <input
            type="number"
            id="questions"
            name="questions"
            className="setupInput"
            min="1"
            max="50"
            value={props.setup.questionsNum}
            onChange={(e) => props.questionsNumChange(e.target.value)}
          />
        </li>
        <li className="setupItem">
          <label htmlFor="category" className="setupLabel">
            Category:
          </label>
          <select
            id="category"
            name="category"
            className="setupInput cursor"
            value={props.setup.category}
            onChange={(e) => props.categoryChange(e.target.value)}
          >
            <option value="sports">Sports</option>
            <option value="history">History</option>
            <option value="politics">Politics</option>
          </select>
        </li>
        <li className="setupItem">
          <label htmlFor="difficulty" className="setupLabel">
            Difficulty:
          </label>
          <select
            id="difficulty"
            name="difficulty"
            className="setupInput cursor"
            value={props.setup.difficulty}
            onChange={(e) => props.difficultyChange(e.target.value)}
          >
            <option value="easy">easy</option>
            <option value="medium">medium</option>
            <option value="hard">hard</option>
          </select>
        </li>
      </ul>

      <button className="btnStart">Start</button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    setup: state.setup,
  };
};

export default connect(mapStateToProps, {
  questionsNumChange,
  categoryChange,
  difficultyChange,
  fetchQuestions,
})(SetupForm);
