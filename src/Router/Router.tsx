import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { DashboardPage } from '../pages/Dashboard/DashboardPage';
import React from 'react';
import { SettingsPage } from '../pages/Settings/SettingsPage';
import { Loader } from '../components/_general/Loader/Loader';

const router = createBrowserRouter([
  { path: '/', element: <DashboardPage /> },
  {
    path: '/settings',
    element: <SettingsPage />,
  },
  { path: '/locations', element: <Loader /> },
]);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};
export default Router;
