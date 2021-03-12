import React, { useEffect } from "react";
import { useGlobalContext } from "../components/context";
import InfoPage from "../components/InfoPage";

const TermPage = () => {
  const { setIsSignedIn } = useGlobalContext();

  useEffect(() => {
    const auth_token = localStorage.getItem("auth_token");

    if (auth_token) {
      setIsSignedIn(true);
    }
  }, []);

  return (
    <InfoPage title="Terms" subHeading="terms and conditions for nextagram" />
  );
};

export default TermPage;
