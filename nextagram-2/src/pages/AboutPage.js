import React, { useEffect } from "react";
import { useGlobalContext } from "../components/context";
import InfoPage from "../components/InfoPage";

const AboutPage = () => {
  const { setIsSignedIn } = useGlobalContext();

  //check whether the user is signed in or not when it first render
  useEffect(() => {
    const auth_token = localStorage.getItem("auth_token");

    if (auth_token) {
      setIsSignedIn(true);
    }
  }, []);

  return (
    <InfoPage title="About Us" subHeading="a clone of instagram for practice" />
  );
};

export default AboutPage;
