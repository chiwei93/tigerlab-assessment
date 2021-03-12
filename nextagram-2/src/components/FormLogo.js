import React from "react";
import { FaInstagram } from "react-icons/fa";
import formLogo from "./FormLogo.module.css";

const FormLogo = () => {
  return (
    <div className={formLogo.logoContainer}>
      <FaInstagram className={formLogo.logo} />
      Nextagram
    </div>
  );
};

export default FormLogo;
