import React from "react";
import { connect } from "react-redux";
import {
  correctAnswer,
  wrongAnswer,
  showModal,
  nextQuestion,
} from "../actions";
import { randomiseArr } from "../utility/randomAnswers";
import "./QuestionForm.css";

const QuestionForm = (props) => {
  if (!props.currentQns) return null;

  const { question, correct_answer, incorrect_answers } = props.currentQns;

  const onButtonClick = (answer) => {
    if (answer === correct_answer) {
      props.correctAnswer();
    } else {
      props.wrongAnswer();
    }

    props.nextQuestion();

    //check if its the last page
    if (props.questions.questionNum === props.questions.totalQuestionsNum) {
      props.showModal();
    }
  };

  const renderAnswers = () => {
    const answers = randomiseArr([...incorrect_answers, correct_answer]);

    return answers.map((answer) => {
      return (
        <li className="questionItem" key={answer}>
          <button className="btnAns" onClick={() => onButtonClick(answer)}>
            {answer}
          </button>
        </li>
      );
    });
  };

  return (
    <div className="questionContainer">
      <p className="correctAnswers">{`Correct Answers: ${props.questions.correctAns}/${props.questions.questionsAnswered}`}</p>

      <p className="questionHeading">{question}</p>

      <ul className="questionList">{renderAnswers()}</ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    currentQns: state.questions.currentQns,
  };
};

export default connect(mapStateToProps, {
  correctAnswer,
  wrongAnswer,
  showModal,
  nextQuestion,
})(QuestionForm);
