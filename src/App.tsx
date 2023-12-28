import { BrowserRouter } from "react-router-dom";

import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { AppRoutes } from "./routes";

import { DrawerProvider } from "./shared/contexts";
import { SideMenu } from "./shared/components/side-menu/SideMenu";

export default function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DrawerProvider>
        <BrowserRouter>
          <SideMenu>
            <AppRoutes />
          </SideMenu>
        </BrowserRouter>
      </DrawerProvider>
    </LocalizationProvider>
  );
}
