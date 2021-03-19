import React from "react";
import { Link } from "react-router-dom";
import {
  FaAngleDoubleLeft,
  FaAngleDoubleRight,
  FaAngleLeft,
  FaAngleRight,
} from "react-icons/fa";
import searchPageBtn from "./SearchPageBtn.module.css";

const SearchPageBtn = ({ pageNum, totalPage, query, results }) => {
  const renderLeftBtns = () => {
    if (Number(pageNum) === 1) {
      return null;
    }

    return (
      <>
        <Link
          to={`/search/${query}/1`}
          className={`${searchPageBtn.btnEnd} ${searchPageBtn.btnLeft}`}
        >
          <FaAngleDoubleLeft />
        </Link>
        <Link
          to={`/search/${query}/${Number(pageNum) - 1}`}
          className={`${searchPageBtn.btnEnd} ${searchPageBtn.btnLeft}`}
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
          <li className={searchPageBtn.btnItem} key={index}>
            <Link
              to={`/search/${query}/${index + 1}`}
              className={`${searchPageBtn.btnPage} ${
                Number(pageNum) === index + 1 ? searchPageBtn.active : null
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
          <li className={searchPageBtn.btnItem}>
            <Link
              to={`/search/${query}/${pageNum}`}
              className={`${searchPageBtn.btnPage} ${searchPageBtn.active}`}
            >
              {pageNum}
            </Link>
          </li>
          <li className={searchPageBtn.btnItem}>
            <Link
              to={`/search/${query}/${Number(pageNum) + 1}`}
              className={searchPageBtn.btnPage}
            >
              {Number(pageNum) + 1}
            </Link>
          </li>
          <li className={searchPageBtn.btnItem}>
            <Link
              to={`/search/${query}/${Number(pageNum) + 2}`}
              className={searchPageBtn.btnPage}
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
          <li className={searchPageBtn.btnItem}>
            <Link
              to={`/search/${query}/${Number(pageNum) - 2}`}
              className={searchPageBtn.btnPage}
            >
              {Number(pageNum) - 2}
            </Link>
          </li>
          <li className={searchPageBtn.btnItem}>
            <Link
              to={`/search/${query}/${Number(pageNum) - 1}`}
              className={searchPageBtn.btnPage}
            >
              {Number(pageNum) - 1}
            </Link>
          </li>
          <li className={searchPageBtn.btnItem}>
            <Link
              to={`/search/${query}/${totalPage}`}
              className={`${searchPageBtn.btnPage} ${searchPageBtn.active}`}
            >
              {totalPage}
            </Link>
          </li>
        </>
      );
    }

    return (
      <>
        <li className={searchPageBtn.btnItem}>
          <Link
            to={`/search/${query}/${Number(pageNum) - 1}`}
            className={searchPageBtn.btnPage}
          >
            {Number(pageNum) - 1}
          </Link>
        </li>
        <li className={searchPageBtn.btnItem}>
          <Link
            to={`/search/${query}/${pageNum}`}
            className={`${searchPageBtn.btnPage} ${searchPageBtn.active}`}
          >
            {pageNum}
          </Link>
        </li>
        <li className={searchPageBtn.btnItem}>
          <Link
            to={`/search/${query}/${Number(pageNum) + 1}`}
            className={searchPageBtn.btnPage}
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
          to={`/search/${query}/${Number(pageNum) + 1}`}
          className={`${searchPageBtn.btnEnd} ${searchPageBtn.btnRight}`}
        >
          <FaAngleRight />
        </Link>
        <Link
          to={`/search/${query}/${totalPage}`}
          className={`${searchPageBtn.btnEnd} ${searchPageBtn.btnRight}`}
        >
          <FaAngleDoubleRight />
        </Link>
      </>
    );
  };

  return (
    <div className={searchPageBtn.btnContainer}>
      {renderLeftBtns()}
      <ul className={searchPageBtn.btnList}>{renderPageBtns()}</ul>
      {renderRightBtns()}
    </div>
  );
};

export default SearchPageBtn;
