export default (state = "runner", action) => {
  switch (action.type) {
    case "FORM_SUBMIT":
      return action.payload;
    default:
      return state;
  }
};
