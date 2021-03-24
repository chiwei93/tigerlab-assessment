import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";
import { connect } from "react-redux";
import { inputChange, submitForm } from "../actions";
import "./SearchInput.css";

const SearchInput = (props) => {
  const inputRef = useRef();

  const onInputChange = (event) => {
    props.inputChange(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    if (!props.query) return;

    props.submitForm(props.query);

    inputRef.current.blur();
  };

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <input
        type="text"
        className="inputField"
        value={props.query}
        onChange={onInputChange}
        ref={inputRef}
      />
      <button className="btnSubmit">
        <FaSearch />
      </button>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    query: state.query,
    pageNum: state.pageNum,
  };
};

export default connect(mapStateToProps, {
  inputChange,
  submitForm,
})(SearchInput);
