import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { DashboardPage } from "../pages/Dashboard/DashboardPage";
import React from "react";

const router = createBrowserRouter([{ path: "/", element: <DashboardPage /> }]);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};
export default Router;
