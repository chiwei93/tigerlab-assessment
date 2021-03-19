import React from "react";
import loading from "./Loading.module.css";

const Loading = () => {
  return (
    <div className={loading.loadingSection}>
      <div className={loading.loadingContainer}>
        <span className={loading.letter}>L</span>
        <span className={loading.letter}>O</span>
        <span className={loading.letter}>A</span>
        <span className={loading.letter}>D</span>
        <span className={loading.letter}>I</span>
        <span className={loading.letter}>N</span>
        <span className={loading.letter}>G</span>
        <span className={loading.letter}>...</span>
      </div>
    </div>
  );
};

export default Loading;
