import React from "react";
import ReactDOM from "react-dom";

import { AppProvider } from "./components/context";
import App from "./components/App";
import "./index.css";

ReactDOM.render(
  <AppProvider>
    <App />
  </AppProvider>,
  document.querySelector("#root")
);
