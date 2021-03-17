import React, { useState, useContext } from "react";
import data from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const [showSubMenu, setShowSubMenu] = useState(false);

  const [activeButton, setActiveButton] = useState({ page: "", links: [] });

  const [subMenuPosition, setSubMenuPosition] = useState({});

  const onToggleBtnClick = () => {
    setShowModal(true);
  };

  const onCloseBtnClick = () => {
    setShowModal(false);
  };

  const openSubMenu = (text, coords) => {
    const page = data.find((object) => object.page === text);

    setActiveButton(page);
    setSubMenuPosition(coords);
    setShowSubMenu(true);
  };

  const closeSubMenu = () => {
    setShowSubMenu(false);
  };

  return (
    <AppContext.Provider
      value={{
        showModal,
        showSubMenu,
        activeButton,
        subMenuPosition,
        onToggleBtnClick,
        onCloseBtnClick,
        openSubMenu,
        closeSubMenu,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
