import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface GratitudeState {
  comments: string[];
}

const initialState: GratitudeState = {
  comments: [],
};

const gratitudeSlice = createSlice({
  name: "gratitude",
  initialState,
  reducers: {
    addGratitudeComment(state, action: PayloadAction<string>) {
      state.comments.push(action.payload);
    },
  },
});

export const { addGratitudeComment } = gratitudeSlice.actions;
export default gratitudeSlice.reducer;
