import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TRootState } from '../../store';
import { updateGeoLocation, updateSearchResults } from './operations';

import {
  IGeoLocationData,
  ISearchResult,
  ISessionSettings,
  TSavedLocationsUrls,
} from './types';
import { IWeatherData } from '../WeatherSlice/types';

interface IInitialState {
  isLoading: boolean;
  firstVisit: boolean;
  error: Error | undefined;
  geoLocation: IGeoLocationData | undefined;
  sessionSettings: ISessionSettings;
  searchQuery: string;
  savedLocationsUrls: TSavedLocationsUrls;
  favoriteLocation: IWeatherData | undefined;
  searchResults: ISearchResult[];
}

const initialState: IInitialState = {
  isLoading: false,
  firstVisit: true,
  error: undefined,
  geoLocation: undefined,
  sessionSettings: { tempUnit: 'C', speedUnit: 'km/h', theme: 'default' },
  searchQuery: '',
  savedLocationsUrls: [],
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
      state.savedLocationsUrls = [...state.savedLocationsUrls, action.payload];
    },
    removeLocation: (state, action) => {
      state.savedLocationsUrls = state.savedLocationsUrls.filter(
        item => item != action.payload
      );
    },
    updateSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    },
    updateFavoriteLocation: (state, action) => {
      state.favoriteLocation = action.payload;
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  extraReducers: (builder: any) => {
    builder
      .addCase(updateGeoLocation.pending, handlePending)
      .addCase(updateSearchResults.pending, handlePending)
      .addCase(updateGeoLocation.rejected, handleRejected)
      .addCase(updateSearchResults.rejected, handleRejected)
      .addCase(
        updateGeoLocation.fulfilled,
        (state: IInitialState, action: PayloadAction<IGeoLocationData>) => {
          state.isLoading = false;
          state.geoLocation = action.payload;
        }
      )
      .addCase(
        updateSearchResults.fulfilled,
        (state: IInitialState, action: PayloadAction<ISearchResult[]>) => {
          state.isLoading = false;
          state.searchResults = action.payload;
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
  updateSearchQuery,
  updateFavoriteLocation,
} = SessionSlice.actions;

export const SessionReducer = SessionSlice.reducer;
