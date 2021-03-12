import React from "react";
import loading from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={loading.pageContainer}>
      <div className={loading.barsContainer}>
        <span className={loading.bar}></span>
        <span className={loading.bar}></span>
        <span className={loading.bar}></span>
        <span className={loading.bar}></span>
      </div>
    </div>
  );
};

export default Loading;
