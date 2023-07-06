import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  updateFavoriteLocation,
  updateFirstVisit,
} from './Redux/Slices/SessionSlice/SessionSlice';
import { updateGeoLocation } from './Redux/Slices/SessionSlice/operations';
import { updateCurrentWeather } from './Redux/Slices/WeatherSlice/operations';
import {
  selectSessionFavoriteLocation,
  selectSessionFirstVisit,
  selectSessionGeoLocation,
  selectWeatherCurrentLocation
} from './Redux/selectors';
import { Loader } from './components/_general/Loader/Loader';
import { LazyRouter } from './utility/lazyComponents';

const App: React.FC = () => {
  useEffect(() => {
    fetchGeoLocation();
    fetchWeather(city);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<any>();
  const isFirstVisit = useSelector(selectSessionFirstVisit);
  const favoriteLocation = useSelector(selectSessionFavoriteLocation); //DELATE
  const geoLocation = useSelector(selectSessionGeoLocation);
  const city = geoLocation?.city || 'London';

  const fetchGeoLocation = useCallback(() => {
    dispatch(updateGeoLocation());
  }, [dispatch]);
  const fetchWeather = useCallback(
    (city: string) => {
      dispatch(updateCurrentWeather(city));
    },
    [dispatch]
  );
  const currentLocation = useSelector(selectWeatherCurrentLocation);
  if (isFirstVisit || !favoriteLocation) {
    dispatch(updateFirstVisit(false));
    dispatch(updateFavoriteLocation(currentLocation));
  }
  return (
    <React.Suspense fallback={<Loader />}>
      {' '}
      <LazyRouter />
    </React.Suspense>
  );
};

export default App;
