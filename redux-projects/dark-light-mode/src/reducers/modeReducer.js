export default (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_MODE":
      return !state;
    default:
      return state;
  }
};
