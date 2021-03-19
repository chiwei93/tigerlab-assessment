import React from "react";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight } from "react-icons/fa";
import reviewBtn from "./ReviewBtn.module.css";

const ReviewBtn = ({ id }) => {
  return (
    <Link className={reviewBtn.btnReview} to={`/review/${id}/1`}>
      See Reviews
      <FaArrowAltCircleRight className={reviewBtn.icon} />
    </Link>
  );
};

export default ReviewBtn;
