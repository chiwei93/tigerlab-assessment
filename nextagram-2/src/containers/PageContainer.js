import React from "react";
import { useGlobalContext } from "../components/context";
import page from "./PageContainer.module.css";

const PageContainer = ({ children }) => {
  const { setShowDropdown } = useGlobalContext();

  return (
    <div className={page.pageContainer} onClick={() => setShowDropdown(false)}>
      {children}
    </div>
  );
};

export default PageContainer;
