import React from "react";
import { Link } from "react-router-dom";
import bottomViewMoreBtn from "./BottomViewMoreBtn.module.css";

const BottomViewMoreBtn = ({ path }) => {
  return (
    <div className={bottomViewMoreBtn.btnContainer}>
      <Link to={path} className={bottomViewMoreBtn.btnViewMore}>
        View all
      </Link>
    </div>
  );
};

export default BottomViewMoreBtn;
