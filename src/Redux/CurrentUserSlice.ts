/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";
import { useGetCurrentUserQuery } from "./Api/userApi";

export const fetchCurrentUser = createAsyncThunk(
  "user/fetchCurrentUser",
  async () => {
    const response = await useGetCurrentUserQuery();
    return response.data;
  }
);

export const fetchUserById = createAsyncThunk(
  "user/fetchUserById",
  async (userId: string) => {
    const response = await useGetUserByIdQuery(userId);
    return response.data;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null as any,
    entities: {} as Record<string, any>,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentUser.fulfilled, (state, action) => {
        state.currentUser = action.payload;
      })
      .addCase(fetchUserById.fulfilled, (state, action) => {
        const user = action.payload;
        state.entities[user._id] = user;
      });
  },
});

export const selectUserById = createSelector(
  [(state, userId: string) => state.user.entities[userId]],
  (user) => user
);

export default userSlice.reducer;
