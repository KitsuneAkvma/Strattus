import {
  ISearchResult,
  ISessionSettings,
  TSavedLocations,
  TSavedLocationsUrls,
} from './Slices/SessionSlice/types';
import {
  IWeatherAirQuality,
  IWeatherAlerts,
  IWeatherData,
  IWeatherForecast,
} from './Slices/WeatherSlice/types';
import { TRootState } from './store';

const selectSessionIsLoading = (state: TRootState): boolean =>
  state.session.isLoading;
const selectSessionError = (state: TRootState) => state.session.error;
const selectSessionFirstVisit = (state: TRootState): boolean =>
  state.session.firstVisit;
const selectSessionGeoLocation = (state: TRootState): string =>
  state.session.geoLocation;
const selectSessionSettings = (state: TRootState): ISessionSettings =>
  state.session.sessionSettings;
const selectSessionSearchQuery = (state: TRootState): string =>
  state.session.searchQuery;
const selectSessionSavedLocationsUrls = (
  state: TRootState
): TSavedLocationsUrls => state.session.savedLocationsUrls;
const selectSessionFavoriteLocation = (state: TRootState): IWeatherData =>
  state.session.favoriteLocation;
const selectSessionSearchResults = (state: TRootState): ISearchResult[] =>
  state.session.searchResults;

const selectWeatherIsLoading = (state: TRootState): boolean =>
  state.weather.isLoading;
const selectWeatherError = (state: TRootState) => state.weather.error;
const selectWeatherCurrentWeather = (state: TRootState): IWeatherData =>
  state.weather.currentWeather;
const selectWeatherForecast = (state: TRootState): IWeatherForecast =>
  state.weather.forecast;
const selectWeatherAirQuality = (state: TRootState): IWeatherAirQuality =>
  state.weather.airQuality;
const selectWeatherAlerts = (state: TRootState): IWeatherAlerts =>
  state.weather.alerts.alert;
const selectWeatherSavedLocations = (state: TRootState): TSavedLocations =>
  state.weather.savedLocations;
const selectWeatherSelectedLocation = (state: TRootState): string =>
  state.weather.savedLocation;

const selectGlobalIsSideBarOpen = (state: TRootState): boolean =>
  state.global.isSideBarOpen;
const selectGlobalIsEditModeOpen = (state: TRootState): boolean =>
  state.global.isEditModeOn;

export {
  selectSessionIsLoading,
  selectSessionError,
  selectSessionFavoriteLocation,
  selectSessionFirstVisit,
  selectSessionGeoLocation,
  selectSessionSavedLocationsUrls,
  selectSessionSearchQuery,
  selectSessionSearchResults,
  selectSessionSettings,
  selectWeatherIsLoading,
  selectWeatherError,
  selectWeatherAirQuality,
  selectWeatherAlerts,
  selectWeatherCurrentWeather,
  selectWeatherForecast,
  selectWeatherSavedLocations,
  selectWeatherSelectedLocation,
};

export { selectGlobalIsEditModeOpen, selectGlobalIsSideBarOpen };
