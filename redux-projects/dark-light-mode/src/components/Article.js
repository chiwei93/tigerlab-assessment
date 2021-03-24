import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import "./Article.css";

const Article = ({ title, snippet, date, darkMode }) => {
  const dateFormat = () => {
    return moment(date).format("MMMM Do YYYY, h:mm:ss a");
  };

  const dark = darkMode ? "dark" : "";

  return (
    <li className={`article ${dark}`}>
      <h3 className="articleHeading">{title}</h3>
      <p className="time">{dateFormat()}</p>
      <p className="text">{snippet}</p>
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    darkMode: state.darkMode,
  };
};

export default connect(mapStateToProps)(Article);
