import React from "react";
import formContainer from "./FormContainer.module.css";

const FormContainer = ({ children }) => {
  return <div className={formContainer.formContainer}>{children}</div>;
};

export default FormContainer;
