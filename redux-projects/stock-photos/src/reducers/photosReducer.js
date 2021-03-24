export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_PHOTOS":
      return [...state, ...action.payload];
    case "FORM_SUBMIT":
      return [];
    default:
      return state;
  }
};
