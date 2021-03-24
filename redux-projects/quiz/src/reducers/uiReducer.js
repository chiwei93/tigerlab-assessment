const initialState = {
  showSetupForm: true,
  showQuestion: false,
  loading: false,
  showModal: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SHOW_LOADING":
      return { ...state, loading: true };
    case "HIDE_LOADING":
      return { ...state, loading: false };
    case "SHOW_MODAL":
      return { ...state, showModal: true, showQuestion: false };
    case "HIDE_MODAL":
      return { ...state, showModal: false };
    case "START_QUIZ":
      return { ...state, showSetupForm: false };
    case "RESTART_QUIZ":
      return { ...state, showSetupForm: true };
    case "SHOW_QUESTIONS":
      return { ...state, showQuestion: true };
    default:
      return state;
  }
};
