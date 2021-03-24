import axios from "axios";

const showLoading = { type: "SHOW_LOADING" };

const hideLoading = { type: "HIDE_LOADING" };

const RESULTS_PER_PAGE = 10;

export const fetchUsers = (page) => async (dispatch) => {
  try {
    dispatch(showLoading);

    const response = await axios.get(
      "https://api.github.com/users/john-smilga/followers?per_page=100"
    );

    const start = (page - 1) * RESULTS_PER_PAGE;

    const end = page * RESULTS_PER_PAGE;

    const usersArr = response.data.slice(start, end);

    const resultsPageArr = [];

    const time = response.data.length / RESULTS_PER_PAGE;

    for (let i = 0; i < time; i++) {
      resultsPageArr.push(i + 1);
    }

    dispatch({ type: "FETCH_USERS", payload: usersArr });

    dispatch({ type: "SET_PAGES", payload: resultsPageArr });

    dispatch(hideLoading);
  } catch (error) {
    console.log(error);
    dispatch(hideLoading);
  }
};

export const pageChange = (page) => {
  return {
    type: "PAGE_CHANGE",
    payload: page,
  };
};
