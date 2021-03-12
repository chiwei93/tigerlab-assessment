import React from "react";
import ReactDOM from "react-dom";
import { FaArrowUp } from "react-icons/fa";
import btnBackTop from "./BtnBackToTop.module.css";

const BtnBackToTop = () => {
  const onBtnBackToTopClick = () => {
    const nav = document.querySelector("#navbar");

    nav.scrollIntoView({ behavior: "smooth" });
  };

  return ReactDOM.createPortal(
    <button className={btnBackTop.btnBack} onClick={onBtnBackToTopClick}>
      <FaArrowUp className={btnBackTop.icon} />
    </button>,
    document.querySelector("#btnBackToTop")
  );
};

export default BtnBackToTop;
