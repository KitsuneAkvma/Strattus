import { IGeoLocationData } from "../utility/hooks/useGetGeoLocation";
import { TRootState } from "./store";

const selectSessionLoginForm = (state: TRootState) => state.session.loginForm;
const selectSessionRegisterForm = (state: TRootState) =>
  state.session.registerForm;
const selectSessionUser = (state: TRootState) => state.session.user;
const selectSessionIsAuth = (state: TRootState) => state.session.isAuth;
const selectSessionToken = (state: TRootState) => state.session.token;
const selectSessionGeoLocation = (state: TRootState): IGeoLocationData =>
  state.session.geoLocation;

const selectWeatherCurrentLocation = (state: TRootState) =>
  state.weather.currentLocation;
const selectWeatherCurrentWeather = (state: TRootState) =>
  state.weather.currentWeather;
const selectWeatherForecast = (state: TRootState) => state.weather.forecast;
const selectWeatherAirQuality = (state: TRootState) => state.weather.airQuality;
const selectWeatherAlerts = (state: TRootState) => state.weather.alerts;

export {
  selectSessionLoginForm,
  selectSessionRegisterForm,
  selectSessionUser,
  selectSessionIsAuth,
  selectSessionToken,
  selectSessionGeoLocation,
};
export {
  selectWeatherCurrentLocation,
  selectWeatherCurrentWeather,
  selectWeatherForecast,
  selectWeatherAirQuality,
  selectWeatherAlerts,
};
