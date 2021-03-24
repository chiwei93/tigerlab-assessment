import axios from "axios";

export const questionsNumChange = (number) => {
  return {
    type: "QUESTIONS_NUMBER_CHANGE",
    payload: number,
  };
};

export const categoryChange = (category) => {
  return { type: "CATEGORY_CHANGE", payload: category };
};

export const difficultyChange = (difficulty) => {
  return { type: "DIFFICULTY_CHANGE", payload: difficulty };
};

const showLoading = { type: "SHOW_LOADING" };

const hideLoading = { type: "HIDE_LOADING" };

export const fetchQuestions = (setup) => async (dispatch) => {
  try {
    dispatch({ type: "START_QUIZ" });

    dispatch(showLoading);

    let category;

    if (setup.category === "sports") {
      category = 21;
    }

    if (setup.category === "history") {
      category = 23;
    }

    if (setup.category === "politics") {
      category = 24;
    }

    const response = await axios.get(
      `https://opentdb.com/api.php?amount=${setup.questionsNum}&category=${category}&difficulty=${setup.difficulty}&type=multiple`
    );

    dispatch({
      type: "FETCH_QUESTIONS",
      payload: response.data.results,
    });

    dispatch(hideLoading);
    dispatch({ type: "SHOW_QUESTIONS" });
  } catch (error) {
    console.log(error.response);
    dispatch(hideLoading);
  }
};

export const correctAnswer = () => {
  return { type: "CORRECT_ANSWER" };
};

export const wrongAnswer = () => {
  return { type: "WRONG_ANSWER" };
};

export const showModal = () => {
  return { type: "SHOW_MODAL" };
};

export const hideModal = () => {
  return { type: "HIDE_MODAL" };
};

export const nextQuestion = () => {
  return { type: "NEXT_QUESTION" };
};

export const restartQuiz = () => {
  return { type: "RESTART_QUIZ" };
};
