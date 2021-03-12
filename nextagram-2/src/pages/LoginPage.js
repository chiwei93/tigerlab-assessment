import React from "react";
import PageContainer from "../containers/PageContainer";
import LoginForm from "../components/LoginForm";
import FormContainer from "../containers/FormContainer";
import image from "../images/login.png";
import login from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <PageContainer>
      <FormContainer>
        <LoginForm />
      </FormContainer>

      <div className={login.imgContainer}>
        <img src={image} alt="Girl with phone" className={login.img} />
      </div>
    </PageContainer>
  );
};

export default LoginPage;
