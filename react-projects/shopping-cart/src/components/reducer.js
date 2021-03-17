const reducer = (state, action) => {
  if (action.type === "FETCHED_DATA") {
    return {
      ...state,
      loading: false,
      cart: action.payload,
    };
  }

  if (action.type === "CLEAR_CART") {
    return {
      ...state,
      cart: [],
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const cart = [...state.cart].filter((item) => item.id !== action.payload);

    return {
      ...state,
      cart: cart,
    };
  }

  if (action.type === "ADD_ITEM") {
    const newCart = [...state.cart].map((item) => {
      if (item.id === action.payload) {
        return {
          ...item,
          amount: item.amount + 1,
        };
      }

      return item;
    });

    return {
      ...state,
      cart: newCart,
    };
  }

  if (action.type === "DECREASE_ITEM") {
    const newCart = [...state.cart]
      .map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            amount: item.amount - 1,
          };
        }

        return item;
      })
      .filter((item) => item.amount !== 0);

    return {
      ...state,
      cart: newCart,
    };
  }

  if (action.type === "TOTAL_AMOUNT") {
    let { total, amount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;

        cartTotal.total += price * amount;
        cartTotal.amount += amount;

        return cartTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );

    total = parseFloat(total.toFixed(2));

    return {
      ...state,
      total,
      amount,
    };
  }

  throw new Error("no matching action type");
};

export default reducer;
