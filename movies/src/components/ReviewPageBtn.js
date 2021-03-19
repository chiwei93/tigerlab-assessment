import React from "react";
import { Link } from "react-router-dom";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import reviewPageBtn from "./ReviewPageBtn.module.css";

const ReviewPageBtn = ({ pageNum, totalPage, movieId, results }) => {
  const renderLeftBtns = () => {
    if (Number(pageNum) === 1) {
      return null;
    }

    return (
      <>
        <Link
          to={`/review/${movieId}/1`}
          className={`${reviewPageBtn.btnEnd} ${reviewPageBtn.btnLeft}`}
        >
          <FaAngleDoubleLeft />
        </Link>
        <Link
          to={`/review/${movieId}/${Number(pageNum) - 1}`}
          className={`${reviewPageBtn.btnEnd} ${reviewPageBtn.btnLeft}`}
        >
          <FaAngleLeft />
        </Link>
      </>
    );
  };

  const renderPageBtns = () => {
    if (totalPage < 3) {
      return results.map((_, index) => {
        return (
          <li className={reviewPageBtn.btnItem} key={index}>
            <Link
              to={`/review/${movieId}/${index + 1}`}
              className={`${reviewPageBtn.btnPage} ${
                Number(pageNum) === index + 1 ? reviewPageBtn.active : null
              }`}
            >
              {index + 1}
            </Link>
          </li>
        );
      });
    }

    if (Number(pageNum) === 1) {
      return (
        <>
          <li className={reviewPageBtn.btnItem}>
            <Link
              to={`/review/${movieId}/${pageNum}`}
              className={`${reviewPageBtn.btnPage} ${reviewPageBtn.active}`}
            >
              {pageNum}
            </Link>
          </li>
          <li className={reviewPageBtn.btnItem}>
            <Link
              to={`/review/${movieId}/${Number(pageNum) + 1}`}
              className={reviewPageBtn.btnPage}
            >
              {Number(pageNum) + 1}
            </Link>
          </li>
          <li className={reviewPageBtn.btnItem}>
            <Link
              to={`/review/${movieId}/${Number(pageNum) + 2}`}
              className={reviewPageBtn.btnPage}
            >
              {Number(pageNum) + 2}
            </Link>
          </li>
        </>
      );
    }

    if (Number(pageNum) === totalPage) {
      return (
        <>
          <li className={reviewPageBtn.btnItem}>
            <Link
              to={`/review/${movieId}/${Number(pageNum) - 2}`}
              className={reviewPageBtn.btnPage}
            >
              {Number(pageNum) - 2}
            </Link>
          </li>
          <li className={reviewPageBtn.btnItem}>
            <Link
              to={`/review/${movieId}/${Number(pageNum) - 1}`}
              className={reviewPageBtn.btnPage}
            >
              {Number(pageNum) - 1}
            </Link>
          </li>
          <li className={reviewPageBtn.btnItem}>
            <Link
              to={`/review/${movieId}/${totalPage}`}
              className={`${reviewPageBtn.btnPage} ${reviewPageBtn.active}`}
            >
              {totalPage}
            </Link>
          </li>
        </>
      );
    }

    return (
      <>
        <li className={reviewPageBtn.btnItem}>
          <Link
            to={`/review/${movieId}/${Number(pageNum) - 1}`}
            className={reviewPageBtn.btnPage}
          >
            {Number(pageNum) - 1}
          </Link>
        </li>
        <li className={reviewPageBtn.btnItem}>
          <Link
            to={`/review/${movieId}/${pageNum}`}
            className={`${reviewPageBtn.btnPage} ${reviewPageBtn.active}`}
          >
            {pageNum}
          </Link>
        </li>
        <li className={reviewPageBtn.btnItem}>
          <Link
            to={`/review/${movieId}/${Number(pageNum) + 1}`}
            className={reviewPageBtn.btnPage}
          >
            {Number(pageNum) + 1}
          </Link>
        </li>
      </>
    );
  };

  const renderRightBtns = () => {
    if (Number(pageNum) === totalPage) {
      return null;
    }

    return (
      <>
        <Link
          to={`/review/${movieId}/${Number(pageNum) + 1}`}
          className={`${reviewPageBtn.btnEnd} ${reviewPageBtn.btnRight}`}
        >
          <FaAngleRight />
        </Link>
        <Link
          to={`/review/${movieId}/${totalPage}`}
          className={`${reviewPageBtn.btnEnd} ${reviewPageBtn.btnRight}`}
        >
          <FaAngleDoubleRight />
        </Link>
      </>
    );
  };

  return (
    <div className={reviewPageBtn.btnContainer}>
      {renderLeftBtns()}
      <ul className={reviewPageBtn.btnList}>{renderPageBtns()}</ul>
      {renderRightBtns()}
    </div>
  );
};

export default ReviewPageBtn;
