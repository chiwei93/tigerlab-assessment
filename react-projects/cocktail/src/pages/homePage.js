import React from "react";
import SearchBar from "../components/searchBar";
import SearchList from "../components/searchList";

const HomePage = () => {
  return (
    <React.Fragment>
      <SearchBar />
      <SearchList />
    </React.Fragment>
  );
};

export default HomePage;
