import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  isSideBarOpen: boolean;
  isEditModeOn: boolean;
}

const initialState: IInitialState = {
  isSideBarOpen: false,
  isEditModeOn: false,
};

const GlobalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    updateIsSideBarOpen: (state, action) => {
      state.isSideBarOpen = action.payload;
    },
    updateIsEditModeOn: (state, action) => {
      state.isEditModeOn = action.payload;
    },
  },
});

export const { updateIsSideBarOpen, updateIsEditModeOn } = GlobalSlice.actions;

export const GlobalReducer = GlobalSlice.reducer;
