import { createAsyncThunk } from "@reduxjs/toolkit";
import { useGetGeoLocation } from "../../../utility/hooks/useGetGeoLocation";

const updateGeoLocation = createAsyncThunk(
  "session/updateGeoLocation",
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

export { updateGeoLocation };
