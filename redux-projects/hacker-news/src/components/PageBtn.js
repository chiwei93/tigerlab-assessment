import React from "react";
import { connect } from "react-redux";
import { nextPage, prevPage } from "../actions";
import "./PageBtn.css";

const PageBtn = (props) => {
  const renderPrevBtn = () => {
    if (props.pages.currentPage === 1) {
      return null;
    }

    return (
      <button className="btnPrev btn" onClick={() => props.prevPage()}>
        Prev
      </button>
    );
  };

  const renderNextBtn = () => {
    if (props.pages.currentPage === props.pages.totalPage) {
      return null;
    }

    return (
      <button className="btnNext btn" onClick={() => props.nextPage()}>
        Next
      </button>
    );
  };

  const renderPageNums = () => {
    if (!props.pages.totalPages) return null;

    return (
      <div className="page">{`${props.pages.currentPage} of ${props.pages.totalPages}`}</div>
    );
  };

  return (
    <div className="btnContainer">
      {renderPrevBtn()}
      {renderPageNums()}
      {renderNextBtn()}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    pages: state.pages,
  };
};

export default connect(mapStateToProps, { nextPage, prevPage })(PageBtn);
