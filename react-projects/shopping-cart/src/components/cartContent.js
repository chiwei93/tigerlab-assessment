import React from "react";
import CartItem from "./cartItem";
import "./cartContent.css";
import { useGlobalContext } from "./context";

const CartContent = () => {
  const { cart, total, clearCart } = useGlobalContext();

  const renderItems = () => {
    if (cart.length === 0) {
      return <li className="empty-cart">is currently empty</li>;
    }

    return (
      <React.Fragment>
        <ul className="cart-list">
          {cart.map((item) => {
            return <CartItem {...item} key={item.id} />;
          })}
        </ul>

        <div className="price-total-container">
          <p className="total-text">Total</p>
          <p className="total-number">${total}</p>
        </div>

        <div className="btn-clear-container">
          <button className="btn-clear" onClick={clearCart}>
            Clear Cart
          </button>
        </div>
      </React.Fragment>
    );
  };

  return (
    <section className="content">
      <h2>Your Bag</h2>
      {renderItems()}
    </section>
  );
};

export default CartContent;
