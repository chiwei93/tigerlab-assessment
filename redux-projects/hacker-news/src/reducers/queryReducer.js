export default (state = "", action) => {
  switch (action.type) {
    case "USER_INPUT_CHANGE":
      return action.payload;
    default:
      return state;
  }
};
