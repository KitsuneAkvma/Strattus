import { IGeoLocationData } from './Slices/SessionSlice/types'
import { TRootState } from './store'

const selectSessionLoginForm = (state: TRootState) => state.session.loginForm
const selectSessionRegisterForm = (state: TRootState) =>
  state.session.registerForm
const selectSessionUser = (state: TRootState) => state.session.user
const selectSessionIsAuth = (state: TRootState) => state.session.isAuth
const selectSessionToken = (state: TRootState) => state.session.token
const selectSessionGeoLocation = (state: TRootState): IGeoLocationData =>
  state.session.geoLocation
const selectSessionSettings = (state: TRootState) =>
  state.session.sessionSettings
const selectSessionLocations = (state: TRootState) =>
  state.session.savedLocations

const selectWeatherCurrentLocation = (state: TRootState) =>
  state.weather.currentLocation
const selectWeatherCurrentWeather = (state: TRootState) =>
  state.weather.currentWeather
const selectWeatherForecast = (state: TRootState) => state.weather.forecast
const selectWeatherAirQuality = (state: TRootState) => state.weather.airQuality
const selectWeatherAlerts = (state: TRootState) => state.weather.alerts

const selectGlobalIsSideBarOpen = (state: TRootState) =>
  state.global.isSideBarOpen

export {
  selectSessionLoginForm,
  selectSessionRegisterForm,
  selectSessionUser,
  selectSessionIsAuth,
  selectSessionToken,
  selectSessionGeoLocation,
  selectSessionSettings,
  selectSessionLocations,
}
export {
  selectWeatherCurrentLocation,
  selectWeatherCurrentWeather,
  selectWeatherForecast,
  selectWeatherAirQuality,
  selectWeatherAlerts,
}

export { selectGlobalIsSideBarOpen }
