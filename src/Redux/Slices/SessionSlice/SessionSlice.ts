import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TRootState } from '../../store';
import { updateGeoLocation } from './operations';

import { IGeoLocationData, ISearchResult, ISessionSettings } from './types';
import { IWeatherData } from '../WeatherSlice/types';

interface IInitialState {
  isLoading: boolean;
  firstVisit: boolean;
  error: Error | undefined;
  geoLocation: IGeoLocationData | undefined;
  sessionSettings: ISessionSettings;
  savedLocations: string[];
  favoriteLocation: IWeatherData | undefined;
  searchResults: ISearchResult[];
}

const initialState: IInitialState = {
  isLoading: false,
  firstVisit: true,
  error: undefined,
  geoLocation: undefined,
  sessionSettings: { tempUnit: 'C', speedUnit: 'km/h', theme: 'default' },
  savedLocations: [],
  favoriteLocation: undefined,
  searchResults: [],
};
const handlePending = (state: TRootState) => {
  state.isLoading = true;
};
const handleRejected = (state: TRootState, action: PayloadAction<never>) => {
  state.isLoading = true;
  state.error = action.payload;
};

const SessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    updateFirstVisit: (state, action) => {
      state.firstVisit = action.payload;
    },
    updateSettingsTempUnit: (state, action) => {
      state.sessionSettings.tempUnit = action.payload;
    },
    updateSettingsSpeedUnit: (state, action) => {
      state.sessionSettings.speedUnit = action.payload;
    },
    updateTheme: (state, action) => {
      state.sessionSettings.theme = action.payload;
    },
    addLocation: (state, action) => {
      state.savedLocations = [...state.savedLocations, action.payload];
    },
    removeLocation: (state, action) => {
      state.savedLocations = state.savedLocations.filter(
        item => item != action.payload
      );
    },
    updateSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    updateFavoriteLocation: (state, action) => {
      state.favoriteLocation = action.payload;
    },
  },
  extraReducers: (builder: any) => {
    builder
      .addCase(updateGeoLocation.pending, handlePending)
      .addCase(updateGeoLocation.rejected, handleRejected)
      .addCase(
        updateGeoLocation.fulfilled,
        (state: IInitialState, action: PayloadAction<IGeoLocationData>) => {
          state.isLoading = false;
          state.geoLocation = action.payload;
        }
      );
  },
});

export const {
  updateFirstVisit,
  updateSettingsTempUnit,
  updateSettingsSpeedUnit,
  updateTheme,
  addLocation,
  removeLocation,
  updateSearchResults,
  updateFavoriteLocation,
} = SessionSlice.actions;

export const SessionReducer = SessionSlice.reducer;
