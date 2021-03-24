export default (state = 1, action) => {
  switch (action.type) {
    case "PAGE_CHANGE":
      return action.payload;
    default:
      return state;
  }
};
