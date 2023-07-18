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
  const savedLocationsUrls = useSelector(selectSessionSavedLocationsUrls);
  const selectedLocation = useSelector(selectWeatherSelectedLocation);
  const fetchSavedLocations = useCallback(
    (savedLocations: string[]) => {
      dispatch(updateSavedLocations(savedLocations));
    },
    [dispatch]
  );

  const currentWeather = useSelector(selectWeatherCurrentWeather);

  useEffect(() => {
    const city = geoLocation || 'Tokyo';
    fetchSavedLocations(savedLocationsUrls);
    dispatch(updateGeoLocation());
    if (!selectedLocation || selectedLocation.length < 1) {
      dispatch(updateCurrentWeather(city));
    } else {
      dispatch(updateCurrentWeather(selectedLocation));
    }
    if (isFirstVisit) {
      dispatch(updateFirstVisit(false));
    }
    dispatch(updateFavoriteLocation(currentWeather));
  }, [selectedLocation, geoLocation]);

  return (
    <React.Suspense fallback={<Loader />}>
      <LazyRouter />
    </React.Suspense>
  );
};

export default App;
