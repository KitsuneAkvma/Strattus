import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { updateGeoLocation } from "./operations";
import { TRootState } from "../../store";
import { IGeoLocationData } from "../../../utility/hooks/useGetGeoLocation";
interface ILoginForm {
  email: string;
  password: string;
}
interface IRegisterForm {
  username: string;
  email: string;
  password: string;
  confPassword: string;
}
interface IUser {
  username: string;
  email: string;
  locations: [];
  isVerified: boolean;
}
interface IInitialState {
  isLoading: boolean;
  error: Error | undefined;
  loginForm: ILoginForm | undefined;
  registerForm: IRegisterForm | undefined;
  user: IUser | undefined;
  isAuth: boolean;
  token: string;
  geoLocation: IGeoLocationData | undefined;
}

const initialState: IInitialState = {
  isLoading: false,
  error: undefined,
  loginForm: undefined,
  registerForm: undefined,
  user: undefined,
  isAuth: false,
  token: "",
  geoLocation: undefined,
};
const handlePending = (state: TRootState) => {
  state.isLoading = true;
};
const handleRejected = (state: TRootState, action: PayloadAction<never>) => {
  state.isLoading = true;
  state.error = action.payload;
};

const SessionSlice = createSlice({
  name: "session",
  initialState,
  reducers: {
    updateLoginForm: (state, action) => {
      state.loginForm = action.payload;
    },
    clearLoginForm: (state) => {
      state.loginForm = initialState.loginForm;
    },
    updateRegisterForm: (state, action) => {
      state.registerForm = action.payload;
    },
    clearRegisterForm: (state) => {
      state.registerForm = initialState.registerForm;
    },
    updateIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    updateToken: (state, action) => {
      state.token = action.payload;
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

export const SessionReducer = SessionSlice.reducer;
