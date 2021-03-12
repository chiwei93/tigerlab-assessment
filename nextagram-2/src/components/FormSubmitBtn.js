import React from "react";
import { useGlobalContext } from "./context";
import formSubmit from "./FormSubmitBtn.module.css";

const FormSubmitBtn = ({ onSubmit }) => {
  const { loading } = useGlobalContext();

  return (
    <button className={formSubmit.btnSubmit} onClick={onSubmit}>
      {loading ? "In Progress..." : "Submit"}
    </button>
  );
};

export default FormSubmitBtn;
