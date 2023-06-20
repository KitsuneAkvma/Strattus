import { PayloadAction, Slice, createSlice } from '@reduxjs/toolkit'
import { TRootState } from '../../store'
import { updateCurrentWeather } from './operations'

import {
  IWeatherAirQuality,
  IWeatherAlerts,
  IWeatherCurrent,
  IWeatherData,
  IWeatherForecast,
  IWeatherLocation,
} from './types'

interface IInitialState {
  isLoading: boolean
  error: object | undefined
  currentLocation: IWeatherLocation | undefined
  currentWeather: IWeatherCurrent | undefined
  forecast: IWeatherForecast[] | undefined
  airQuality: IWeatherAirQuality | undefined
  alerts: IWeatherAlerts | undefined
}

const initialState: IInitialState = {
  isLoading: false,
  error: undefined,
  currentLocation: undefined,
  currentWeather: undefined,
  forecast: undefined,
  airQuality: undefined,
  alerts: undefined,
}

const handlePending = (state: TRootState) => {
  state.isLoading = true
}
const handleRejected = (state: TRootState, action: PayloadAction<never>) => {
  state.isLoading = true
  state.error = action.payload
}

const WeatherSlice: Slice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(updateCurrentWeather.pending, handlePending)
      .addCase(updateCurrentWeather.rejected, handleRejected)
      .addCase(
        updateCurrentWeather.fulfilled,
        (state: IInitialState, action: PayloadAction<IWeatherData>) => {
          state.isLoading = false
          state.currentWeather = action.payload.current
          state.currentLocation = action.payload.location
          state.forecast = action.payload.forecast.forecastday
          state.alerts = action.payload.alerts
        }
      )
  },
})

export const WeatherReducer = WeatherSlice.reducer
