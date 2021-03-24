export default (state = "scenery", action) => {
  switch (action.type) {
    case "FORM_SUBMIT":
      return action.payload;
    default:
      return state;
  }
};
