import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const initialState = {
  username: null,
  email: null,
  password: null,
};

const AuthSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const { username, email, password } = action.payload;
      state.email = email;
      state.username = username;
      state.password = password;
    },
    logOut: (state) => {
      (state.email = null), (state.username = null);
    },
  },
});

export const { setUser, logOut } = AuthSlice.actions;
export default AuthSlice.reducer;
export const CurrentUser = (state: RootState) => state.auth.email;
