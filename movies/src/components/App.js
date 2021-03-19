import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import SingleMoviePage from "../pages/SingleMoviePage";
import PaginationPage from "../pages/PaginationPage";
import ReviewsPage from "../pages/ReviewsPage";
import SearchResultsPage from "../pages/SearchResultsPage";
import AboutPage from "../pages/AboutPage";
import TermPage from "../pages/TermPage";
import PrivacyPage from "../pages/PrivacyPage";
import ErrorPage from "../pages/ErrorPage";
import Navbar from "./Navbar";
import Footer from "./Footer";
import TestingPage from "../pages/TestingPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/movie/detail/:id" component={SingleMoviePage} />
          <Route path="/movies/:type/:page" component={PaginationPage} />
          <Route path="/review/:id/:page" component={ReviewsPage} />
          <Route path="/search/:query/:page" component={SearchResultsPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/term" component={TermPage} />
          <Route path="/privacy" component={PrivacyPage} />
          <Route path="/error" component={ErrorPage} />
          <Route path="/testing" component={TestingPage} />
        </Switch>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
