import React from "react";
import { connect } from "react-redux";
import SetupForm from "./SetupForm";
import QuestionForm from "./QuestionForm";
import Modal from "./Modal";
import Loading from "./Loading";
import "./App.css";

const App = (props) => {
  return (
    <main className="pageContainer">
      {props.ui.showSetupForm ? <SetupForm /> : null}
      {props.ui.showQuestion ? <QuestionForm /> : null}
      {props.ui.loading ? <Loading /> : null}
      {props.ui.showModal ? <Modal /> : null}
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    questions: state.questions,
    ui: state.ui,
  };
};

export default connect(mapStateToProps)(App);
