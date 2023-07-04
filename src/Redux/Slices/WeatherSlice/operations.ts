import { createAsyncThunk } from '@reduxjs/toolkit';
import { useGetWeather } from '../../../utility/hooks/useGetWeather';

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

export { updateCurrentWeather };
