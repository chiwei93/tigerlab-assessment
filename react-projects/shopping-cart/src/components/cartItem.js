import React from "react";
import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import { useGlobalContext } from "./context";
import "./cartItem.css";

const CartItem = ({ id, img, price, title, amount }) => {
  const {
    removeCartItem,
    addIndividualItem,
    decreaseIndividualItem,
  } = useGlobalContext();

  const onRemoveLinkClick = (e, id) => {
    e.preventDefault();

    removeCartItem(id);
  };

  return (
    <li className="cart-item">
      <img src={img} alt={title} />

      <div className="product-info">
        <p className="product-name">{title}</p>
        <p className="product-price">${price}</p>
        <a
          href="/"
          className="btn-remove"
          onClick={(e) => onRemoveLinkClick(e, id)}
        >
          remove
        </a>
      </div>

      <div className="btn-container">
        <button className="btn" onClick={() => addIndividualItem(id)}>
          <FaAngleUp />
        </button>
        {amount}
        <button className="btn" onClick={() => decreaseIndividualItem(id)}>
          <FaAngleDown />
        </button>
      </div>
    </li>
  );
};

export default CartItem;
