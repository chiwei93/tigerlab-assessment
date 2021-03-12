import React, { useState, useRef } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import FormInput from "./FormInput";
import FormSubmitBtn from "./FormSubmitBtn";
import FormLogo from "./FormLogo";
import signupForm from "./SignUpForm.module.css";
import { checkUsername, checkEmail, checkPassword } from "./utility";
import nextagram from "../api/nextagram";
import { useGlobalContext } from "./context";

const SignUpForm = () => {
  const { setIsSignedIn, setLoading } = useGlobalContext();

  const history = useHistory();

  const [username, setUsername] = useState({ value: "", valid: true });
  const [email, setEmail] = useState({ value: "", valid: true });
  const [password, setPassword] = useState({ value: "", valid: true });
  const [availability, setAvailability] = useState(true);

  //for keeping the value of timer
  const timerRef = useRef(null);

  //for checking whether the username is taken
  const checkAvailability = (name) => {
    //remove timer if got
    if (timerRef.current) clearTimeout(timerRef.current);

    const fetchData = async () => {
      try {
        const response = await nextagram.get(
          `/users/check_name?username=${name}`
        );

        setAvailability(response.data.valid);

        //notify user
        toast.success("Username is available", {
          position: "top-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } catch (error) {
        setAvailability(false);
      }
    };

    //set timer to make api call
    timerRef.current = setTimeout(() => {
      fetchData();
    }, 200);
  };

  //for username input
  const onUsernameInputChange = (event) => {
    const input = event.target.value;

    const isValid = checkUsername(input);

    checkAvailability(input);

    setUsername({ value: input, valid: isValid });
  };

  //for email input
  const onEmailInputChange = (event) => {
    const input = event.target.value;

    const isValid = checkEmail(input);

    setEmail({ value: input, valid: isValid });
  };

  //for password input
  const onPasswordInputChange = (event) => {
    const input = event.target.value;

    const isValid = checkPassword(input);

    setPassword({ value: input, valid: isValid });
  };

  //for posting data to api
  const signUpPost = async (data) => {
    try {
      setLoading(true);

      const response = await nextagram.post("/users/", data);

      setLoading(false);

      const { auth_token } = response.data;

      setIsSignedIn(true);

      localStorage.setItem("auth_token", auth_token);

      toast.success("You had successfully signed up!", {
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
      const messages = error.response.data.message;

      setLoading(false);

      messages.forEach((message) => {
        toast.error(`${message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
    }
  };

  //for submiting form
  const onSubmitBtnClick = () => {
    const isValid =
      checkUsername(username.value) &&
      checkEmail(email.value) &&
      checkPassword(password.value);

    if (!isValid) {
      return;
    }

    const SignUpData = {
      username: username.value,
      email: email.value,
      password: password.value,
    };

    signUpPost(SignUpData);
  };

  return (
    <React.Fragment>
      <h2 className={signupForm.heading}>Create an Account:</h2>

      <div className={signupForm.formContainer}>
        <FormInput
          type="text"
          label="Username"
          onChange={onUsernameInputChange}
          {...username}
          errorMessage="Must be between 5 - 20 characters"
          availability={availability}
        />
        <FormInput
          type="email"
          label="Email"
          onChange={onEmailInputChange}
          {...email}
          errorMessage="Please enter a valid email"
          availability={true}
        />
        <FormInput
          type="password"
          label="Password"
          onChange={onPasswordInputChange}
          {...password}
          errorMessage="Must have a minimum of 8 characters"
          availability={true}
        />
        <FormSubmitBtn onSubmit={onSubmitBtnClick} />
      </div>

      <div className={signupForm.logoContainer}>
        <FormLogo />
      </div>
    </React.Fragment>
  );
};

export default SignUpForm;
