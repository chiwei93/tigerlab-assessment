import React, { useEffect } from "react";
import { useGlobalContext } from "../components/context";
import InfoPage from "../components/InfoPage";

const PrivacyPage = () => {
  const { setIsSignedIn } = useGlobalContext();

  //check whether the user is signed in or not when it first render
  useEffect(() => {
    const auth_token = localStorage.getItem("auth_token");

    if (auth_token) {
      setIsSignedIn(true);
    }
  }, []);

  return <InfoPage title="Privacy" subHeading="privacy for nextagram" />;
};

export default PrivacyPage;
