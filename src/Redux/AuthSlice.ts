/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from "@reduxjs/toolkit";
import { TUser } from "../types/Types";
import { RootState } from "./store";
type TAuthState = {
  email: null | TUser;
  password: null | TUser;
  name: null | TUser;
  token: null | TUser;
};
const initialState: TAuthState = {
  name: null,
  email: null,
  password: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { email, password, name, token } = action.payload;
      state.name = name;
      state.email = email;
      state.password = password;
      state.token = token;
    },

    logout: (state) => {
      state.email = null;
      state.password = null;
      state.name = null;
    },
  },
});

export const { setUser, logout } = authSlice.actions;
export default authSlice.reducer;
export const userDetails = (state: RootState) => state.auth;
