import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";
import { useGlobalContext } from "./context";
import searchInput from "./SearchInput.module.css";

const SearchInput = () => {
  const [query, setQuery] = useState("");

  const { setShowSidebar } = useGlobalContext();

  const history = useHistory();

  const onSearchFormSubmit = (event) => {
    event.preventDefault();

    history.push(`/search/${query}/1`);

    setQuery("");
    setShowSidebar(false);
  };

  const onSearchInputChange = (event) => {
    setQuery(event.target.value);
  };

  return (
    <form className={searchInput.form} onSubmit={onSearchFormSubmit}>
      <input
        type="text"
        className={searchInput.input}
        placeholder="Enter Search Term here"
        onChange={onSearchInputChange}
        value={query}
      />
      <button className={searchInput.btnSubmit}>
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchInput;
