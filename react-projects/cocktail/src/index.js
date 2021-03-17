import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app";
import { AppProvider } from "./components/context";
import "./index.css";

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.querySelector("#root")
);
