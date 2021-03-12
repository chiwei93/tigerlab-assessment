import React from "react";
import formInput from "./FormInput.module.css";

const FormInput = ({
  label,
  type,
  value,
  onChange,
  valid,
  errorMessage,
  availability,
}) => {
  //for rendering error messages
  const renderMessage = () => {
    if (!valid) {
      return <p className={formInput.message}>{errorMessage}</p>;
    }

    if (!availability) {
      return <p className={formInput.message}>Username is already taken</p>;
    }

    return null;
  };

  //setting error class
  const errorClass = !valid || !availability ? formInput.error : null;

  return (
    <div className={`${formInput.formContainer} ${errorClass}`}>
      <label className={formInput.label}>{`${label}:`}</label>

      <div className={formInput.inputContainer}>
        <input
          type={type}
          className={formInput.input}
          value={value}
          onChange={onChange}
        />
        <span className={formInput.underline}></span>
      </div>

      {renderMessage()}
    </div>
  );
};

export default FormInput;
