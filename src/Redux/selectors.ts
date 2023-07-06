import { IGeoLocationData } from './Slices/SessionSlice/types';
import { TRootState } from './store';

const selectSessionFirstVisit = (state: TRootState) => state.session.firstVisit;
const selectSessionGeoLocation = (state: TRootState): IGeoLocationData =>
  state.session.geoLocation;
const selectSessionSettings = (state: TRootState) =>
  state.session.sessionSettings;
const selectSessionLocations = (state: TRootState) =>
  state.session.savedLocations;
const selectSessionFavoriteLocation = (state: TRootState) =>
  state.session.favoriteLocation;
const selectSessionSearchResults = (state: TRootState) =>
  state.session.searchResults;

const selectWeatherCurrentLocation = (state: TRootState) =>
  state.weather.currentLocation;
const selectWeatherCurrentWeather = (state: TRootState) =>
  state.weather.currentWeather;
const selectWeatherForecast = (state: TRootState) => state.weather.forecast;
const selectWeatherAirQuality = (state: TRootState) => state.weather.airQuality;
const selectWeatherAlerts = (state: TRootState) => state.weather.alerts.alert;

const selectGlobalIsSideBarOpen = (state: TRootState) =>
  state.global.isSideBarOpen;
const selectGlobalIsEditModeOpen = (state: TRootState) =>
  state.global.isEditModeOn;

export {
  selectSessionFirstVisit,
  selectSessionGeoLocation,
  selectSessionSettings,
  selectSessionLocations,
  selectSessionFavoriteLocation,
  selectSessionSearchResults,
};
export {
  selectWeatherCurrentLocation,
  selectWeatherCurrentWeather,
  selectWeatherForecast,
  selectWeatherAirQuality,
  selectWeatherAlerts,
};

export { selectGlobalIsSideBarOpen, selectGlobalIsEditModeOpen };
