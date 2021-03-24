export default (state = 1, action) => {
  switch (action.type) {
    case "PAGE_CHANGE":
      return state + 1;
    case "FORM_SUBMIT":
      return 1;
    default:
      return state;
  }
};
