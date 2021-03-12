import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "./Navbar";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import ProfilePage from "../pages/ProfilePage";
import UploadModal from "../pages/UploadModal";
import UsersPage from "../pages/UsersPage";
import SingleUserPage from "../pages/SingleUserPage";
import ErrorPage from "../pages/ErrorPage";
import AboutPage from "../pages/AboutPage";
import PrivacyPage from "../pages/PrivacyPage";
import Footer from "./Footer";
import BtnBackToTop from "./BtnBackToTop";
import TermPage from "../pages/TermPage";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <ToastContainer />
        <Switch>
          <Route path="/" exact component={LoginPage} />
          <Route path="/users/sign_up" component={SignUpPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/upload_photo" component={UploadModal} />
          <Route path="/users/:id" component={SingleUserPage} />
          <Route path="/users" component={UsersPage} />
          <Route path="/error" component={ErrorPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/privacy" component={PrivacyPage} />
          <Route path="/term" component={TermPage} />
        </Switch>
        <BtnBackToTop />
        <Footer />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
