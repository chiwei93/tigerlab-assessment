import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "../actions";
import Display from "./Display";
import BtnContainer from "./BtnContainer";
import "./App.css";

const App = (props) => {
  useEffect(() => {
    props.fetchUser();
  }, []);

  if (!props.user.results) return null;

  const [user] = props.user.results;

  const { name, picture } = user;

  return (
    <main className="pageContainer">
      <section className="cardContainer">
        <img
          src={picture.large}
          className="userImg"
          alt={`${name.first} ${name.last}`}
        />

        <Display />

        <BtnContainer />
      </section>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, { fetchUser })(App);
