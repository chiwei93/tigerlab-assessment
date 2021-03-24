import axios from "axios";

const showLoading = {
  type: "SHOW_LOADING",
};

const hideLoading = {
  type: "HIDE_LOADING",
};

export const fetchUser = () => async (dispatch) => {
  dispatch(showLoading);

  const response = await axios.get("https://randomuser.me/api/");

  dispatch({
    type: "FETCH_USER",
    payload: response.data,
  });

  dispatch(hideLoading);
};

export const buttonHover = (data) => {
  return {
    type: "MOUSE_ENTER",
    payload: data,
  };
};

export const deleteDisplay = () => {
  return {
    type: "DELETE_DISPLAY",
  };
};
