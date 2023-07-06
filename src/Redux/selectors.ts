import {
  IGeoLocationData,
  ISessionSettings,
  TSavedLocations,
} from './Slices/SessionSlice/types';
import {
  IWeatherAirQuality,
  IWeatherAlerts,
  IWeatherData,
  IWeatherForecast,
} from './Slices/WeatherSlice/types';
import { TRootState } from './store';

const selectSessionFirstVisit = (state: TRootState): boolean =>
  state.session.firstVisit;
const selectSessionGeoLocation = (state: TRootState): IGeoLocationData =>
  state.session.geoLocation;
const selectSessionSettings = (state: TRootState): ISessionSettings =>
  state.session.sessionSettings;
const selectSessionLocations = (state: TRootState): TSavedLocations =>
  state.session.savedLocations;
const selectSessionFavoriteLocation = (state: TRootState): IWeatherData =>
  state.session.favoriteLocation;
const selectSessionSearchResults = (state: TRootState): object[] =>
  state.session.searchResults;

const selectWeatherCurrentWeather = (state: TRootState): IWeatherData =>
  state.weather.currentWeather;
const selectWeatherForecast = (state: TRootState): IWeatherForecast =>
  state.weather.forecast;
const selectWeatherAirQuality = (state: TRootState): IWeatherAirQuality =>
  state.weather.airQuality;
const selectWeatherAlerts = (state: TRootState): IWeatherAlerts =>
  state.weather.alerts.alert;

const selectGlobalIsSideBarOpen = (state: TRootState): boolean =>
  state.global.isSideBarOpen;
const selectGlobalIsEditModeOpen = (state: TRootState): boolean =>
  state.global.isEditModeOn;

export {
  selectSessionFavoriteLocation,
  selectSessionFirstVisit,
  selectSessionGeoLocation,
  selectSessionLocations,
  selectSessionSearchResults,
  selectSessionSettings,
  selectWeatherAirQuality,
  selectWeatherAlerts,
  selectWeatherCurrentWeather,
  selectWeatherForecast,
};

export { selectGlobalIsEditModeOpen, selectGlobalIsSideBarOpen };
