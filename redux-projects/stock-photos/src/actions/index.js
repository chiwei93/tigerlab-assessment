import axios from "axios";
import { API_KEY } from "../apis/key";

const showLoading = { type: "SHOW_LOADING" };

const hideLoading = { type: "HIDE_LOADING" };

export const pageChange = () => {
  return {
    type: "PAGE_CHANGE",
  };
};

export const inputChange = (query) => {
  return {
    type: "INPUT_CHANGE",
    payload: query,
  };
};

export const fetchSearchPhotos = (query, page) => async (dispatch) => {
  try {
    dispatch(showLoading);

    const response = await axios.get(`https://api.unsplash.com/search/photos`, {
      headers: {
        Authorization: `Client-ID ${API_KEY}`,
      },
      params: { query, page },
    });

    dispatch({ type: "FETCH_PHOTOS", payload: response.data.results });

    dispatch(hideLoading);
  } catch (error) {
    console.log(error.response);
    dispatch(hideLoading);
  }
};

export const resetPage = () => {
  return {
    type: "PAGE_RESET",
  };
};

export const submitForm = (query) => {
  return {
    type: "FORM_SUBMIT",
    payload: query,
  };
};
