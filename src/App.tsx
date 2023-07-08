import React, { useCallback, useEffect } from 'react';
import { useSelector } from 'react-redux';

import {
  updateFavoriteLocation,
  updateFirstVisit,
} from './Redux/Slices/SessionSlice/SessionSlice';
import { updateGeoLocation } from './Redux/Slices/SessionSlice/operations';
import {
  updateCurrentWeather,
  updateSavedLocations,
} from './Redux/Slices/WeatherSlice/operations';
import {
  selectSessionFirstVisit,
  selectSessionGeoLocation,
  selectSessionSavedLocationsUrls,
  selectWeatherCurrentWeather,
  selectWeatherSelectedLocation,
} from './Redux/selectors';
import { Loader } from './components/_general/Loader/Loader';
import { useAppDispatch } from './utility/hooks/hooks';
import { LazyRouter } from './utility/lazyComponents';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  const isFirstVisit = useSelector(selectSessionFirstVisit);
  const geoLocation = useSelector(selectSessionGeoLocation);
  const city = geoLocation?.city;
  const savedLocationsUrls = useSelector(selectSessionSavedLocationsUrls);
  const selectedLocation = useSelector(selectWeatherSelectedLocation);
  const fetchGeoLocation = useCallback(() => {
    dispatch(updateGeoLocation());
  }, [dispatch]);
  const fetchWeather = useCallback(
    (city: string) => {
      dispatch(updateCurrentWeather(city));
    },
    [dispatch]
  );
  const fetchSavedLocations = useCallback(
    (savedLocations: string[]) => {
      dispatch(updateSavedLocations(savedLocations));
    },
    [dispatch]
  );
  const currentWeather = useSelector(selectWeatherCurrentWeather);

  useEffect(() => {
    fetchSavedLocations(savedLocationsUrls);
    fetchGeoLocation();
    if (!selectedLocation || selectedLocation.length === 0) {
      fetchWeather(city);
    } else {
      fetchWeather(selectedLocation);
    }
    if (isFirstVisit) {
      dispatch(updateFirstVisit(false));
    }
    dispatch(updateFavoriteLocation(currentWeather));
  }, [
    city,
    currentWeather,
    dispatch,
    fetchGeoLocation,
    fetchSavedLocations,
    fetchWeather,
    isFirstVisit,
    savedLocationsUrls,
    selectedLocation,
  ]);

  return (
    <React.Suspense fallback={<Loader />}>
      <LazyRouter />
    </React.Suspense>
  );
};

export default App;
