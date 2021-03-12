import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../components/context";
import errorPage from "./ErrorPage.module.css";

const ErrorPage = () => {
  const { setIsSignedIn } = useGlobalContext();

  //check whether the user is signed in or not when it first render
  useEffect(() => {
    const auth_token = localStorage.getItem("auth_token");

    if (auth_token) {
      setIsSignedIn(true);
    }
  }, []);

  return (
    <div className={errorPage.pageContainer}>
      An Error had occurred! Click here to return to the home page.
      <Link to="/users" className={errorPage.btnHome}>
        Home
      </Link>
    </div>
  );
};

export default ErrorPage;
