import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import AppRouter from "./routes/routes";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
);
