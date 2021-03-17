import React from "react";
import { useGlobalContext } from "./context";
import "./searchBar.css";

const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();

  const onFormSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="Searchbar">
      <h2>search for your favorite cocktail</h2>
      <form className="form" onSubmit={onFormSubmit}>
        <input
          type="text"
          className="input-field"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>
    </section>
  );
};

export default SearchBar;
