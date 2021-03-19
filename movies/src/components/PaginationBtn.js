import React from "react";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import paginationBtn from "./PaginationBtn.module.css";

const PaginationBtn = ({ pageNum, totalPage, type, results }) => {
  const renderLeftBtns = () => {
    if (Number(pageNum) === 1) {
      return null;
    }

    return (
      <>
        <Link
          to={`/movies/${type}/1`}
          className={`${paginationBtn.btnEnd} ${paginationBtn.btnLeft}`}
        >
          <FaAngleDoubleLeft />
        </Link>
        <Link
          to={`/movies/${type}/${Number(pageNum) - 1}`}
          className={`${paginationBtn.btnEnd} ${paginationBtn.btnLeft}`}
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
          <li className={paginationBtn.btnItem} key={index}>
            <Link
              to={`/movies/${type}/${index + 1}`}
              className={`${paginationBtn.btnPage} ${
                Number(pageNum) === index + 1 ? paginationBtn.active : null
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
          <li className={paginationBtn.btnItem}>
            <Link
              to={`/movies/${type}/${pageNum}`}
              className={`${paginationBtn.btnPage} ${paginationBtn.active}`}
            >
              {pageNum}
            </Link>
          </li>
          <li className={paginationBtn.btnItem}>
            <Link
              to={`/movies/${type}/${Number(pageNum) + 1}`}
              className={paginationBtn.btnPage}
            >
              {Number(pageNum) + 1}
            </Link>
          </li>
          <li className={paginationBtn.btnItem}>
            <Link
              to={`/movies/${type}/${Number(pageNum) + 2}`}
              className={paginationBtn.btnPage}
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
          <li className={paginationBtn.btnItem}>
            <Link
              to={`/movies/${type}/${Number(pageNum) - 2}`}
              className={paginationBtn.btnPage}
            >
              {Number(pageNum) - 2}
            </Link>
          </li>
          <li className={paginationBtn.btnItem}>
            <Link
              to={`/movies/${type}/${Number(pageNum) - 1}`}
              className={paginationBtn.btnPage}
            >
              {Number(pageNum) - 1}
            </Link>
          </li>
          <li className={paginationBtn.btnItem}>
            <Link
              to={`/movies/${type}/${pageNum}`}
              className={`${paginationBtn.btnPage} ${paginationBtn.active}`}
            >
              {pageNum}
            </Link>
          </li>
        </>
      );
    }

    return (
      <>
        <li className={paginationBtn.btnItem}>
          <Link
            to={`/movies/${type}/${Number(pageNum) - 1}`}
            className={paginationBtn.btnPage}
          >
            {Number(pageNum) - 1}
          </Link>
        </li>
        <li className={paginationBtn.btnItem}>
          <Link
            to={`/movies/${type}/${pageNum}`}
            className={`${paginationBtn.btnPage} ${paginationBtn.active}`}
          >
            {pageNum}
          </Link>
        </li>
        <li className={paginationBtn.btnItem}>
          <Link
            to={`/movies/${type}/${Number(pageNum) + 1}`}
            className={paginationBtn.btnPage}
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
          to={`/movies/${type}/${Number(pageNum) + 1}`}
          className={`${paginationBtn.btnEnd} ${paginationBtn.btnRight}`}
        >
          <FaAngleRight />
        </Link>
        <Link
          to={`/movies/${type}/${totalPage}`}
          className={`${paginationBtn.btnEnd} ${paginationBtn.btnRight}`}
        >
          <FaAngleDoubleRight />
        </Link>
      </>
    );
  };

  return (
    <div className={paginationBtn.btnContainer}>
      {renderLeftBtns()}
      <ul className={paginationBtn.btnList}>{renderPageBtns()}</ul>
      {renderRightBtns()}
    </div>
  );
};

export default PaginationBtn;
