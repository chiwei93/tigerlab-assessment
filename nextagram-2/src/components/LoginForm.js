import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import FormInput from "./FormInput";
import FormSubmitBtn from "./FormSubmitBtn";
import FormLogo from "./FormLogo";
import loginForm from "./LoginForm.module.css";
import { checkUsername, checkPassword } from "./utility";
import nextagram from "../api/nextagram";
import { useGlobalContext } from "./context";

const LoginForm = () => {
  const { setIsSignedIn, setLoading, setCurrentUserId } = useGlobalContext();

  const history = useHistory();

  const [username, setUsername] = useState({ value: "", valid: true });
  const [password, setPassword] = useState({ value: "", valid: true });

  //for username inputfield
  const onUsernameInputChange = (event) => {
    const input = event.target.value.trim();

    const isValid = checkUsername(input);

    setUsername({ value: input, valid: isValid });
  };

  //for passowrd inputfield
  const onPasswordInputChange = (event) => {
    const input = event.target.value.trim();

    const isValid = checkPassword(input);

    setPassword({ value: input, valid: isValid });
  };

  //for posting data to api
  const loginPost = async (data) => {
    try {
      setLoading(true);

      const response = await nextagram.post("/login", data);

      setLoading(false);

      const { auth_token } = response.data;

      const id = response.data.user.id;

      //set signed in state
      setIsSignedIn(true);

      setCurrentUserId(id);

      //save to local storage
      localStorage.setItem("auth_token", auth_token);

      localStorage.setItem("currentUserId", id);

      //notify user
      toast.success("Welcome Back", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      //navigate to profile
      history.push("/profile");
    } catch (error) {
      setLoading(false);
      //navigate to error
      toast.error("Username and Password does not match", {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  //for submiting form
  const onSubmitBtnClick = () => {
    const isValid =
      checkUsername(username.value) && checkPassword(password.value);

    //don't submit when invalid
    if (!isValid) {
      return;
    }

    const loginData = {
      username: username.value,
      password: password.value,
    };

    //make call to api
    loginPost(loginData);
  };

  return (
    <React.Fragment>
      <h2 className={loginForm.heading}>Login:</h2>

      <div className={loginForm.formContainer}>
        <FormInput
          type="text"
          label="Username"
          {...username}
          onChange={onUsernameInputChange}
          errorMessage="Must be between 5 - 20 characters"
          availability={true}
        />
        <FormInput
          type="password"
          label="Password"
          {...password}
          onChange={onPasswordInputChange}
          errorMessage="Must have a minimum of 8 characters"
          availability={true}
        />
        <FormSubmitBtn onSubmit={onSubmitBtnClick} />
      </div>

      <div className={loginForm.logoContainer}>
        <FormLogo />
      </div>
    </React.Fragment>
  );
};

export default LoginForm;
