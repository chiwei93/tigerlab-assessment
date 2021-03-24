import React from "react";
import {
  FaUserAlt,
  FaEnvelopeOpen,
  FaCalendarCheck,
  FaMap,
  FaPhone,
  FaLock,
} from "react-icons/fa";
import { connect } from "react-redux";
import { buttonHover } from "../actions";
import "./Button.css";

const Button = ({ type, value, buttonHover }) => {
  const renderIcon = () => {
    switch (type) {
      case "name":
        return <FaUserAlt />;
      case "email":
        return <FaEnvelopeOpen />;
      case "age":
        return <FaCalendarCheck />;
      case "street":
        return <FaMap />;
      case "phone":
        return <FaPhone />;
      case "password":
        return <FaLock />;
    }
  };

  return (
    <li className="btnItem">
      <button
        className="btn"
        onMouseEnter={() => {
          buttonHover({
            type,
            value,
          });
        }}
      >
        {renderIcon()}
      </button>
    </li>
  );
};

export default connect(null, { buttonHover })(Button);
