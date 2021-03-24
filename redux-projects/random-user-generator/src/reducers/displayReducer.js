export default (state = {}, action) => {
  switch (action.type) {
    case "MOUSE_ENTER":
      return action.payload;
    case "DELETE_DISPLAY":
      return {};
    default:
      return state;
  }
};
