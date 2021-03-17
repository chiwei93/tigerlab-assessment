import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { BrowserRouter, Route } from "react-router-dom";
import HomeSection from "./homeSection";
import TeamSection from "./teamSection";
import ProjectSection from "./projectSection";
import CalendarSection from "./calendar";
import DocumentSection from "./document";
import Sidebar from "./sidebar";
import Modal from "./modal";
import "./app.css";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const [showSidebar, setShowSidebar] = useState(false);

  const onModalBtnClick = () => {
    setShowModal(true);
  };

  const onCloseModalBtnClick = () => {
    setShowModal(false);
  };

  const onToggleSidebarClick = () => {
    setShowSidebar(true);
  };

  const onSidebarCloseBtnClick = () => {
    setShowSidebar(false);
  };

  return (
    <BrowserRouter>
      <React.Fragment>
        <main className="btn-container">
          <button className="btn-toggle" onClick={onToggleSidebarClick}>
            <FaBars />
          </button>

          <button className="btn-modal" onClick={onModalBtnClick}>
            Show Modal
          </button>
          <Route path="/" exact component={HomeSection} />
          <Route path="/team" component={TeamSection} />
          <Route path="/projects" component={ProjectSection} />
          <Route path="/calendar" component={CalendarSection} />
          <Route path="/documents" component={DocumentSection} />
        </main>
        <Sidebar
          showSidebar={showSidebar}
          onSidebarClose={onSidebarCloseBtnClick}
        />
        <Modal showModal={showModal} onCloseClick={onCloseModalBtnClick} />
      </React.Fragment>
    </BrowserRouter>
  );
};

export default App;
