import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import moviesReducer from "./moviesSlice";
import watchListReducer from "./watchListSlice";
import gptReducer from "./gptSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    watchList: watchListReducer,
    gpt: gptReducer,
  },
});

export default appStore;
