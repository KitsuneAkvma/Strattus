import { PayloadAction, Slice, createSlice } from '@reduxjs/toolkit';
import { TRootState } from '../../store';
import { updateCurrentWeather, updateSavedLocations } from './operations';

import {
  IWeatherAlerts,
  IWeatherData,
  IWeatherForecast,
  TSavedLocations,
} from './types';

interface IInitialState {
  isLoading: boolean;
  error: object | undefined;
  currentWeather: IWeatherData | undefined;
  forecast: IWeatherForecast[] | undefined;
  alerts: IWeatherAlerts | undefined;
  savedLocations: TSavedLocations;
}

const initialState: IInitialState = {
  isLoading: false,
  error: undefined,
  currentWeather: undefined,
  forecast: undefined,
  alerts: undefined,
  savedLocations: [],
};

const handlePending = (state: TRootState) => {
  state.isLoading = true;
};
const handleRejected = (state: TRootState, action: PayloadAction) => {
  state.isLoading = true;
  state.error = action.payload;
};

const WeatherSlice: Slice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder: TRootState) => {
    builder
      .addCase(updateCurrentWeather.pending, handlePending)
      .addCase(updateSavedLocations.pending, handlePending)
      .addCase(updateCurrentWeather.rejected, handleRejected)
      .addCase(updateSavedLocations.rejected, handleRejected)
      .addCase(
        updateCurrentWeather.fulfilled,
        (state: IInitialState, action: PayloadAction<IWeatherData>) => {
          state.isLoading = false;
          state.currentWeather = action.payload;
          state.forecast = action.payload.forecast?.forecastday;
          state.alerts = action.payload?.alerts;
        }
      )
      .addCase(
        updateSavedLocations.fulfilled,
        (state: IInitialState, action: PayloadAction<IWeatherData[]>) => {
          state.isLoading = false;
          state.savedLocations = action.payload;
        }
      );
  },
});

export const WeatherReducer = WeatherSlice.reducer;
