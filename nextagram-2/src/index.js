import React from "react";
import ReactDOM from "react-dom";
import "react-toastify/dist/ReactToastify.min.css";

import App from "./components/App";
import { AppProvider } from "./components/context";
import "./index.css";

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.querySelector("#root")
);
