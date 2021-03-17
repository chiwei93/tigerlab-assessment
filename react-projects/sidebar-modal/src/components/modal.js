import React from "react";
import "./modal.css";
import CloseIcon from "./closeIcon";

const Modal = ({ showModal, onCloseClick }) => {
  const active = showModal ? "active" : "";

  return (
    <div className={`overlay ${active}`}>
      <div className="modal">
        <button className="btn-close-modal" onClick={onCloseClick}>
          <CloseIcon />
        </button>
        Modal Content
      </div>
    </div>
  );
};

export default Modal;
