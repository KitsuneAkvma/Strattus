import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DashboardPage } from '../pages/Dashboard/DashboardPage';
import React from 'react';
import { SettingsPage } from '../pages/Settings/SettingsPage';
import { LocationsPage } from '../pages/Locations/LocationsPage';
import { SearchPage } from '../pages/Locations/Search/SearchPage';

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/locations" element={<LocationsPage />} />
        <Route path="/locations/search" element={<SearchPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
