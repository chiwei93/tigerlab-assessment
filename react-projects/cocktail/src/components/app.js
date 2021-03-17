import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./navbar";
import HomePage from "../pages/homePage";
import AboutUs from "../pages/aboutUs";
import DetailPage from "../pages/detailPage";
import ErrorPage from "../pages/errorPage";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutUs} />
        <Route path="/cocktail/:id" component={DetailPage} />
        <Route path="*" component={ErrorPage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
