import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateGeoLocation } from './Redux/Slices/SessionSlice/operations';
import { updateCurrentWeather } from './Redux/Slices/WeatherSlice/operations';
import { selectSessionGeoLocation } from './Redux/selectors';
import { LazyRouter } from './utility/lazyComponents';
import { Loader } from './components/_general/Loader/Loader';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const dispatch = useDispatch<any>();

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
  useEffect(() => {
    fetchGeoLocation();
    fetchWeather(city);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);

  return (
    <React.Suspense fallback={<Loader />}>
      {' '}
      <LazyRouter />
    </React.Suspense>
  );
};

export default App;
