import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  const [isSignedIn, setIsSignedIn] = useState(false);

  const [isSignUpPage, setIsSignUpPage] = useState(false);

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        isSignedIn,
        setIsSignedIn,
        isSignUpPage,
        setIsSignUpPage,
        showDropdown,
        setShowDropdown,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
