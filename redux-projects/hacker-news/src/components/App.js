import React, { useEffect } from "react";
import { connect } from "react-redux";
import { deleteNews, fetchData } from "../actions";
import SearchBar from "./SearchBar";
import PageBtn from "./PageBtn";
import NewCard from "./NewCard";
import Loading from "./Loading";
import "./App.css";

const App = (props) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      props.fetchData(props.query, props.pages.currentPage);
    }, 200);

    return () => clearTimeout(timer);
  }, [props.query, props.pages.currentPage]);

  const renderNews = () => {
    return props.news.map((newObj, index) => {
      return (
        <NewCard
          {...newObj}
          onClick={() => props.deleteNews(index)}
          key={newObj.objectID}
        />
      );
    });
  };

  return (
    <main className="pageContainer">
      <h1 className="heading">Search Hacker News</h1>
      <SearchBar />

      <PageBtn />

      <section className="newsSection">{renderNews()}</section>

      {props.loading ? <Loading /> : null}
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    news: state.news,
    pages: state.pages,
    query: state.query,
  };
};

export default connect(mapStateToProps, { deleteNews, fetchData })(App);
