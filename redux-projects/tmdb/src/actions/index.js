import axios from "axios";
import { API_KEY } from "../apis/key";

const showLoading = { type: "SHOW_LOADING" };

const hideLoading = { type: "HIDE_LOADING" };

export const fetchData = (query) => async (dispatch) => {
  try {
    dispatch(showLoading);

    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );

    dispatch({
      type: "FETCH_MOVIES",
      payload: response.data.results,
    });

    dispatch(hideLoading);
  } catch (error) {
    console.log(error.response);
    dispatch(hideLoading);
  }
};

export const inputChange = (query) => {
  return {
    type: "INPUT_CHANGE",
    payload: query,
  };
};

export const formSubmit = (query) => {
  return {
    type: "FORM_SUBMIT",
    payload: query,
  };
};
