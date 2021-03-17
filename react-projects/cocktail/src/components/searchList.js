import React from "react";
import { useGlobalContext } from "./context";
import LoadingPage from "../pages/loadingPage";
import SingleCard from "./singleCard";
import "./searchList.css";

const SearchList = () => {
  const { cocktails, loading } = useGlobalContext();

  const renderCards = () => {
    return cocktails.map((cocktail) => {
      return <SingleCard {...cocktail} key={cocktail.id} />;
    });
  };

  if (loading) {
    return <LoadingPage />;
  }

  if (cocktails.length < 1) {
    return (
      <section className="search-list">
        <h2 className="search-list-heading">
          No Cocktails matches your search criteria
        </h2>
      </section>
    );
  }

  return (
    <section className="search-list">
      <h2 className="search-list-heading">Cocktails</h2>

      <div className="cards-container">{renderCards()}</div>
    </section>
  );
};

export default SearchList;
