import React, { useContext, useState } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [isHomePage, setIsHomePage] = useState(true);

  const [showSidebar, setShowSidebar] = useState(false);

  const [loading, setLoading] = useState(true);

  return (
    <AppContext.Provider
      value={{
        isHomePage,
        setIsHomePage,
        setShowSidebar,
        showSidebar,
        loading,
        setLoading,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
