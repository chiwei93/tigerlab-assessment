import React from "react";
import { connect } from "react-redux";
import "./Button.css";

const Button = ({ page, onClick, pageNum }) => {
  const active = page === pageNum ? "active" : "";

  return (
    <button className={`btn ${active}`} onClick={onClick}>
      {page}
    </button>
  );
};

const mapStateToProps = (state) => {
  return {
    pageNum: state.pageNum,
  };
};

export default connect(mapStateToProps)(Button);
