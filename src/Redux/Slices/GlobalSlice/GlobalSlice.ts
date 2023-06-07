import { createSlice } from "@reduxjs/toolkit";

interface initialStateTypes {
  isSideBarOpen: boolean;
}

const initialState: initialStateTypes = { isSideBarOpen: false };

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
