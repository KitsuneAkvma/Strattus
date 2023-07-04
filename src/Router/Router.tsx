import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { DashboardPage } from '../pages/Dashboard/DashboardPage';
import React from 'react';
import { SettingsPage } from '../pages/Settings/SettingsPage';


const router = createBrowserRouter([
  { path: '/', element: <DashboardPage /> },

]);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};
export default Router;
