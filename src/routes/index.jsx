import { lazy } from "react";
import { Navigate } from "react-router-dom";
import Students from "../pages/Students";

// Import other components as needed
const Dashboard = lazy(() => import("../pages/Dashboard"));
// ... other imports

const routes = [
  {
    path: "/",
    element: <Navigate to="/dashboard" />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/students",
    element: <Students />,
  },
  // ... other existing routes
];

export default routes; 