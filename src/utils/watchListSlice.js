import { createSlice } from "@reduxjs/toolkit";

import { db } from "../utils/firebase";
import { addDoc, collection } from "firebase/firestore";

const watchListSlice = createSlice({
  name: "watchList",
  initialState: [],
  reducers: {
    addMedia: (state, action) => {
      const index = state.findIndex((media) => {
        console.log(media.id, action.payload.id);
        return media.id === action.payload.id;
      });

      console.log(index, state);

      if (index === -1) {
        state.push(action.payload);
      }
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

// add data redux to firebase

export const addToFirebaseWatchList = (mediaData) => {
  return async (dispatch) => {
    try {
      // Add mediaData to Firestore
      const docRef = await addDoc(collection(db, "watchlist"), mediaData);

      // Dispatch the action to add mediaData to Redux state
      dispatch({
        type: "ADD_TO_WATCHLIST",
        payload: {
          id: docRef.id,
          ...mediaData,
        },
      });
    } catch (error) {
      console.error("Error adding to watchlist in Firestore:", error);
    }
  };
};
