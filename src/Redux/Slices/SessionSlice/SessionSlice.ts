import { createSlice } from "@reduxjs/toolkit";

interface InitialStateTypes {
  loginForm: { email: string; password: string };
  registerForm: {
    username: string;
    email: string;
    password: string;
    confPassword: string;
  };
  user: { username: string; email: string; locations: []; isVerified: boolean };
  isAuth: boolean;
  token: string;
}

const initialState: InitialStateTypes = {
  loginForm: { email: "", password: "" },
  registerForm: { username: "", email: "", password: "", confPassword: "" },
  user: { username: "", email: "", locations: [], isVerified: false },
  isAuth: false,
  token: "",
};

const SessionSlice = createSlice({
  name: "user",
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
});

export const SessionReducer = SessionSlice.reducer;
