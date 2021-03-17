import React, { useContext, useReducer, useEffect } from "react";
import axios from "axios";
import cartItems from "./data";
import reducer from "./reducer";

const url = "https://course-api.com/react-useReducer-cart-project";

export const AppContext = React.createContext();

const initialState = {
  loading: true,
  cart: [],
  total: 0,
  amount: 0,
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const removeCartItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const addIndividualItem = (id) => {
    dispatch({ type: "ADD_ITEM", payload: id });
  };

  const decreaseIndividualItem = (id) => {
    dispatch({ type: "DECREASE_ITEM", payload: id });
  };

  const fetchData = async () => {
    const response = await axios.get(url);

    dispatch({ type: "FETCHED_DATA", payload: response.data });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({ type: "TOTAL_AMOUNT" });
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        removeCartItem,
        addIndividualItem,
        decreaseIndividualItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
