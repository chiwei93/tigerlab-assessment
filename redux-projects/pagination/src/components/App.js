import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers, pageChange } from "../actions";
import Card from "./Card";
import Button from "./Button";
import "./App.css";

const App = (props) => {
  useEffect(() => {
    props.fetchUsers(props.pageNum);
  }, [props.pageNum]);

  const renderUsers = () => {
    return props.users.map((user) => {
      return <Card {...user} key={user.login} />;
    });
  };

  const renderPageBtns = () => {
    return props.pages.map((page) => {
      return (
        <Button page={page} key={page} onClick={() => props.pageChange(page)} />
      );
    });
  };

  return (
    <main className="pageContainer">
      <h1 className="heading">Pagination</h1>

      <section className="cardSection">{renderUsers()}</section>

      <section className="btnContainer">{renderPageBtns()}</section>
    </main>
  );
};

const mapStateToProps = (state) => {
  return {
    users: state.users,
    pageNum: state.pageNum,
    pages: state.pages,
  };
};

export default connect(mapStateToProps, { fetchUsers, pageChange })(App);
