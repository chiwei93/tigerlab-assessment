import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import viewMoreBtn from "./ViewMoreBtn.module.css";

const ViewMoreBtn = ({ path }) => {
  return (
    <Link to={path} className={viewMoreBtn.btnViewMore}>
      <span className={viewMoreBtn.viewText}>View all</span>
      <FaChevronRight className={viewMoreBtn.icon} />
    </Link>
  );
};

export default ViewMoreBtn;
