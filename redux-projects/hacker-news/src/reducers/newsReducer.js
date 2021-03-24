export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_NEWS":
      return action.payload;
    case "DELETE_NEW":
      const newArr = [...state];
      const index = action.payload;

      newArr.splice(index, 1);

      return newArr;
    default:
      return state;
  }
};
