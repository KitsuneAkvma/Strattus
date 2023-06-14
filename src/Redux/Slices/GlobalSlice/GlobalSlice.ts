import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  isSideBarOpen: boolean;
}

const initialState: IInitialState = { isSideBarOpen: false };

const GlobalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    updateIsSideBarOpen: (state, action) => {
      state.isSideBarOpen = action.payload;
    },
  },
});

export const { updateIsSideBarOpen } = GlobalSlice.actions;

export const GlobalReducer = GlobalSlice.reducer;
