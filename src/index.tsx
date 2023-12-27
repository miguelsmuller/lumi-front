import React from "react";
import ReactDOM from "react-dom/client";

import AppRouter from "./routes/routes";
import "./index.css";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { DrawerProvider } from "./shared/contexts";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

root.render(
  <React.StrictMode>
    <DrawerProvider>
      <AppRouter />
    </DrawerProvider>
  </React.StrictMode>,
);
