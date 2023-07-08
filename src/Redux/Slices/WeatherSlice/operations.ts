import { createAsyncThunk } from '@reduxjs/toolkit';
import { useGetWeather } from '../../../utility/hooks/useGetWeather';
import { TSavedLocationsUrls } from '../SessionSlice/types';

const updateCurrentWeather = createAsyncThunk(
  `weather/updateCurrentWeather`,
  async (locationQuery: string, thunkAPI) => {
    try {
      const location = locationQuery;
      const weather = await useGetWeather(location);

      return weather;
    } catch (err) {
      const message = String((err as Error).message);
      thunkAPI.rejectWithValue(message);
    }
  }
);
const updateSavedLocations = createAsyncThunk(
  'weather/updateSavedLocations',
  async (locationsUrls: TSavedLocationsUrls, thunkAPI) => {
    try {
      const savedLocationsData = Promise.all(
        locationsUrls.map(async url => {
          const result = await useGetWeather(url);
          return result;
        })
      );

    
      return savedLocationsData;
    } catch (err) {
      const message = String((err as Error).message);
      thunkAPI.rejectWithValue(message);
    }
  }
);

export { updateCurrentWeather, updateSavedLocations };

