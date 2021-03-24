const initialState = {
  currentPage: 1,
  totalPages: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "NEXT_PAGE":
      return { ...state, currentPage: state.currentPage + 1 };
    case "PREV_PAGE":
      return { ...state, currentPage: state.currentPage - 1 };
    case "SET_MAX_PAGES":
      return { ...state, totalPages: action.payload };
    case "USER_INPUT_CHANGE":
      return { ...state, currentPage: 1 };
    default:
      return state;
  }
};
