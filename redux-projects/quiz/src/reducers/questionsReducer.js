const initialState = {
  questions: [],
  questionNum: 1,
  correctAns: 0,
  totalQuestionsNum: null,
  questionsAnswered: 0,
  currentQns: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_QUESTIONS":
      return {
        ...state,
        questions: action.payload,
        totalQuestionsNum: action.payload.length,
        currentQns: action.payload.slice(
          state.questionNum - 1,
          state.questionNum
        )[0],
      };
    case "CORRECT_ANSWER":
      return {
        ...state,
        correctAns: state.correctAns + 1,
        questionsAnswered: state.questionsAnswered + 1,
        questionNum: state.questionNum + 1,
      };
    case "WRONG_ANSWER":
      return {
        ...state,
        questionsAnswered: state.questionsAnswered + 1,
        questionNum: state.questionNum + 1,
      };
    case "NEXT_QUESTION":
      return {
        ...state,
        currentQns: state.questions.slice(
          state.questionNum - 1,
          state.questionNum
        )[0],
      };
    case "RESTART_QUIZ":
      return {
        questions: [],
        questionNum: 1,
        correctAns: 0,
        totalQuestionsNum: null,
        questionsAnswered: 0,
        currentQns: {},
      };
    default:
      return state;
  }
};
