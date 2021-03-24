import React, { useRef } from "react";
import { connect } from "react-redux";
import { inputChange, formSubmit } from "../actions";
import "./Form.css";

const Form = (props) => {
  const inputRef = useRef();

  const onInputChange = (event) => {
    props.inputChange(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (!props.query) return;

    props.formSubmit(props.query);

    props.inputChange("");

    inputRef.current.blur();
  };

  return (
    <form className="searchForm" onSubmit={onFormSubmit}>
      <input
        type="text"
        className="searchInput"
        value={props.query}
        onChange={onInputChange}
        ref={inputRef}
      />
      <button className="btnSearch">
        {props.loading ? "Loading..." : "Search"}
      </button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    query: state.query,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, { inputChange, formSubmit })(Form);
