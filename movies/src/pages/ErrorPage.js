import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../components/context";
import errorPage from "./ErrorPage.module.css";

const ErrorPage = () => {
  const { setIsHomePage } = useGlobalContext();

  useEffect(() => {
    setIsHomePage(false);
    document.querySelector("#navbar").scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className={errorPage.pageContainer}>
      An error had occurred! Click here to return to the home page.
      <Link to="/" className={errorPage.btnHome}>
        Home
      </Link>
    </div>
  );
};

export default ErrorPage;
