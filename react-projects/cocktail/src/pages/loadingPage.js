import React from "react";
import "./loadingPage.css";

const LoadingPage = () => {
  return (
    <section className="Loading">
      <div className="loading-container">
        <span className="loading-bar"></span>
        <span className="loading-bar"></span>
        <span className="loading-bar"></span>
        <span className="loading-bar"></span>
      </div>
    </section>
  );
};

export default LoadingPage;
