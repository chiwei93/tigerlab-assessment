import React, { useEffect } from "react";
import PageContainer from "../containers/PageContainer";
import SignUpForm from "../components/SignUpForm";
import FormContainer from "../containers/FormContainer";
import { useGlobalContext } from "../components/context";
import image from "../images/signup.svg";
import signup from "./SignUpPage.module.css";

const SignUpPage = () => {
  const { setIsSignUpPage } = useGlobalContext();

  //check whether it is the signupPage
  useEffect(() => {
    setIsSignUpPage(true);
  }, []);

  return (
    <PageContainer>
      <div className={signup.imgContainer}>
        <img src={image} alt="Girl with phone" className={signup.img} />
      </div>

      <FormContainer>
        <SignUpForm />
      </FormContainer>
    </PageContainer>
  );
};

export default SignUpPage;
