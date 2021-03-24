import React from "react";
import { connect } from "react-redux";
import { buttonHover, fetchUser, deleteDisplay } from "../actions";
import Button from "./Button";
import "./BtnContainer.css";

const BtnContainer = (props) => {
  if (!props.user.results) return null;

  const [user] = props.user.results;

  const { email, cell, name, dob, location, login } = user;

  const { first, last } = name;

  const { age } = dob;

  const { street } = location;

  const { password } = login;

  const btns = [
    { type: "name", value: `${first} ${last}` },
    { type: "email", value: email },
    { type: "age", value: age },
    { type: "street", value: `${street.number} ${street.name}` },
    { type: "phone", value: cell },
    { type: "password", value: password },
  ];

  const renderBtns = () => {
    return btns.map((btn) => {
      return <Button {...btn} />;
    });
  };

  return (
    <div className="btnContainer">
      <ul className="btnList">{renderBtns()}</ul>
      <button
        className="btnRandom"
        onClick={() => {
          props.fetchUser();
          props.deleteDisplay();
        }}
      >
        {props.loading ? "Loading..." : "Random User"}
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, {
  buttonHover,
  fetchUser,
  deleteDisplay,
})(BtnContainer);
