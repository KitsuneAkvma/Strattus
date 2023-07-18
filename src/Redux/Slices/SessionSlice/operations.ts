import { createAsyncThunk } from '@reduxjs/toolkit';
import { useGetGeoLocation } from '../../../utility/hooks/useGetGeoLocation';
import { useSearchLocations } from '../../../utility/hooks/useGetWeather';

const updateGeoLocation = createAsyncThunk(
  'session/updateGeoLocation',
  async (_, thunkAPI) => {
    try {
      const location = await useGetGeoLocation();


      return location;
    } catch (err) {
      const message = String((err as Error).message);
      thunkAPI.rejectWithValue(message);
    }
  }
);
const updateSearchResults = createAsyncThunk(
  'session/updateSearchResults',
  async (query: string, thunkAPI) => {
    try {
      const results = await useSearchLocations(query);

      return results;
    } catch (err) {
      const message = String((err as Error).message);
      thunkAPI.rejectWithValue(message);
    }
  }
);
export { updateGeoLocation, updateSearchResults };
