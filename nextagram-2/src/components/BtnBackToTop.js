import React from "react";
import ReactDOM from "react-dom";
import { FaArrowUp } from "react-icons/fa";
import { useGlobalContext } from "./context";
import btnBackTop from "./BtnBackToTop.module.css";

const BtnBackToTop = () => {
  const { isSignedIn } = useGlobalContext();

  const onBtnBackToTopClick = () => {
    const nav = document.querySelector("#navbar");

    nav.scrollIntoView({ behavior: "smooth" });
  };

  if (!isSignedIn) {
    return null;
  }

  return ReactDOM.createPortal(
    <button className={btnBackTop.btnBack} onClick={onBtnBackToTopClick}>
      <FaArrowUp className={btnBackTop.icon} />
    </button>,
    document.querySelector("#btnBackToTop")
  );
};

export default BtnBackToTop;
