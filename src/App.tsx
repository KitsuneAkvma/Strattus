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
  selectSessionFavoriteLocation,
  selectSessionFirstVisit,
  selectSessionGeoLocation,
  selectSessionSavedLocationsUrls,
  selectWeatherCurrentWeather,
} from './Redux/selectors';
import { Loader } from './components/_general/Loader/Loader';
import { useAppDispatch } from './utility/hooks/hooks';
import { LazyRouter } from './utility/lazyComponents';

const App: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useAppDispatch();
  const isFirstVisit = useSelector(selectSessionFirstVisit);
  const favoriteLocation = useSelector(selectSessionFavoriteLocation); //DELATE
  const geoLocation = useSelector(selectSessionGeoLocation);
  const city = geoLocation?.city || 'London';
  const savedLocationsUrls = useSelector(selectSessionSavedLocationsUrls);

  useEffect(() => {
    fetchGeoLocation();
    fetchWeather(city);
    fetchSavedLocations(savedLocationsUrls);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
  if (isFirstVisit || !favoriteLocation) {
    dispatch(updateFirstVisit(false));
    dispatch(updateFavoriteLocation(currentWeather));
  }
  return (
    <React.Suspense fallback={<Loader />}>
      {' '}
      <LazyRouter />
    </React.Suspense>
  );
};

export default App;
