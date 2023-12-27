import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";

import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { DrawerProvider } from "./shared/contexts";
import { SideMenu } from "./shared/components/side-menu/SideMenu";

export default function App() {
  return (
    <DrawerProvider>
      <BrowserRouter>
        <SideMenu>
          <AppRoutes />
        </SideMenu>
      </BrowserRouter>
    </DrawerProvider>
  );
}
