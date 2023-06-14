import { useCallback, useEffect } from "react";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";

import { updateCurrentWeather } from "./Redux/Slices/WeatherSlice/operations";
import {
  selectSessionGeoLocation,
  selectWeatherCurrentWeather,
} from "./Redux/selectors";
import { updateGeoLocation } from "./Redux/Slices/SessionSlice/operations";

const App: React.FC = () => {
  const dispatch = useDispatch<any>();

  const geoLocation = useSelector(selectSessionGeoLocation);
  const city = geoLocation?.city?.name || "London";
  const currentWeather = useSelector(selectWeatherCurrentWeather);

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
  }, [geoLocation]);

  console.info({ city, currentWeather });

  return (
    <>
      <section>
        <h2>Location</h2>
        <p>
          <b>City: {city}</b>
        </p>
      </section>
      {currentWeather && (
        <section>
          <h2>Current weather</h2>
          <img src={currentWeather.condition.icon} alt="Condition icon" />
          <h3>{currentWeather.condition.text}</h3>
          <p>Temperature: {currentWeather.temp_c} C🌡️ </p>
          <p>Feels like: {currentWeather.feelslike_c} C🌡️ </p>
        </section>
      )}
    </>
  );
};

export default App;
