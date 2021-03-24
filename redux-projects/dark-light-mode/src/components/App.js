import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions";
import ButtonToggle from "./ButtonToggle";
import Article from "./Article";
import "./App.css";

const App = (props) => {
  useEffect(() => {
    props.fetchData();
  }, []);

  const renderArticle = () => {
    return props.data.map((article) => {
      return <Article {...article} key={article.id} />;
    });
  };

  const dark = props.darkMode ? "dark" : "";

  return (
    <main className={`pageContainer ${dark}`}>
      <header className="header">
        <h1 className="heading">Overreacted</h1>
        <ButtonToggle />
      </header>

      <ul className="contentContainer">{renderArticle()}</ul>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    data: state.data,
    darkMode: state.darkMode,
  };
};

export default connect(mapStateToProps, { fetchData })(App);
