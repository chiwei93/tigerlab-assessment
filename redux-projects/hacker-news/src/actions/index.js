import axios from "axios";

const showLoading = { type: "SHOW_LOADING" };

const hideLoading = { type: "HIDE_LOADING" };

export const fetchData = (query, page) => async (dispatch) => {
  try {
    dispatch(showLoading);

    const response = await axios.get("https://hn.algolia.com/api/v1/search?", {
      params: {
        query,
        page,
      },
    });

    dispatch({ type: "FETCH_NEWS", payload: response.data.hits });
    dispatch({ type: "SET_MAX_PAGES", payload: response.data.nbPages });
    dispatch(hideLoading);
  } catch (error) {
    console.log(error.response);

    dispatch(hideLoading);
  }
};

export const nextPage = () => {
  return { type: "NEXT_PAGE" };
};

export const prevPage = () => {
  return { type: "PREV_PAGE" };
};

export const userInput = (query) => {
  return { type: "USER_INPUT_CHANGE", payload: query };
};

export const deleteNews = (index) => {
  return { type: "DELETE_NEW", payload: index };
};
