import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { DashboardPage } from '../pages/Dashboard/DashboardPage';
import React from 'react';
import { SettingsPage } from '../pages/Settings/SettingsPage';
import { LocationsPage } from '../pages/Locations/LocationsPage';

const router = createBrowserRouter([
  { path: '/', element: <DashboardPage /> },
  {
    path: '/settings',
    element: <SettingsPage />,
  },
  { path: '/locations', element: <LocationsPage /> },
]);

const Router: React.FC = () => {
  return <RouterProvider router={router} />;
};
export default Router;
