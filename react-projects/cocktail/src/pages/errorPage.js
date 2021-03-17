import React from "react";
import { Link } from "react-router-dom";
import "./errorPage.css";

const ErrorPage = () => {
  return (
    <section className="ErrorPage">
      <h2 className="error-text">Opps! An Error has occurred!</h2>
      <Link to="/" className="btn-home">
        Back Home
      </Link>
    </section>
  );
};

export default ErrorPage;
