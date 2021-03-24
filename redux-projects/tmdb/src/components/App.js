import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../actions";
import Form from "./Form";
import MovieCard from "./MovieCard";
import Loading from "./Loading";
import "./App.css";

const App = (props) => {
  useEffect(() => {
    props.fetchData(props.formQuery);
  }, [props.formQuery]);

  const renderMovies = () => {
    return props.movies.map((movie) => {
      return <MovieCard {...movie} key={movie.id} />;
    });
  };

  return (
    <main className="pageContainer">
      <h1 className="heading">Search Movies</h1>
      <Form />

      <section className="moviesSection">{renderMovies()}</section>

      {props.loading ? <Loading /> : null}
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    movies: state.movies,
    formQuery: state.formQuery,
    loading: state.loading,
  };
};

export default connect(mapStateToProps, { fetchData })(App);
