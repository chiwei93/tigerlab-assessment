const initialState = {
  questionsNum: 10,
  category: "sports",
  difficulty: "easy",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "QUESTIONS_NUMBER_CHANGE":
      return { ...state, questionsNum: action.payload };
    case "CATEGORY_CHANGE":
      return { ...state, category: action.payload };
    case "DIFFICULTY_CHANGE":
      return { ...state, difficulty: action.payload };
    default:
      return state;
  }
};
