import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  Receipt as ReceiptIcon,
  Dashboard as DashboardIcon,
} from "@mui/icons-material";

import { useDrawerContext } from "../shared/contexts/DrawerContext";
import Dashboard from "../pages/dashboard";
import Invoices from "../pages/invoices";

export default function AppRouter() {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      {
        label: "Dashboard",
        path: "/dashboard",
        icon: <DashboardIcon />,
      },
      {
        label: "Invoices",
        path: "/invoices",
        icon: <ReceiptIcon />,
      },
    ]);
  });

  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/invoices" element={<Invoices />} />
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </Router>
  );
}
