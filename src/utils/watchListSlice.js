import { createSlice } from "@reduxjs/toolkit";

const watchListSlice = createSlice({
  name: "watchList",
  initialState: [],
  reducers: {
    addMedia: (state, action) => {
      state.push(action.payload);
    },
    removeMedia: (state, action) => {
      const index = state.findIndex((media) => media.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const { addMedia, removeMedia } = watchListSlice.actions;
export default watchListSlice.reducer;
