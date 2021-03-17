import React from "react";
import { useGlobalContext } from "./context";
import CloseIcon from "./closeIcon";
import SidebarSection from "./sidebarSection";
import "./sidebar.css";

const Sidebar = ({ data }) => {
  const { onCloseBtnClick, showModal } = useGlobalContext();

  const renderSection = () => {
    return data.map((obj, index) => {
      return <SidebarSection data={obj} key={index} />;
    });
  };

  const active = showModal ? "active" : "";

  return (
    <section className={`overlay ${active}`}>
      <div className="sidebar">
        <div className="btn-container">
          <button className="btn-close" onClick={onCloseBtnClick}>
            <CloseIcon />
          </button>
        </div>

        {renderSection()}
      </div>
    </section>
  );
};

export default Sidebar;
