export default (state = [], action) => {
  switch (action.type) {
    case "SET_PAGES":
      return action.payload;
    default:
      return state;
  }
};
