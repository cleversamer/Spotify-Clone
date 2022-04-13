import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "topArtists",
  initialState: [],
  reducers: {
    topArtistsSet: (topArtists, action) => {
      topArtists = action.payload.topArtists;
    },
  },
});

const { topArtistsSet } = slice.actions;

// Action creators
export const setTopArtists = (topArtists) => topArtistsSet({ topArtists });

// Selectors
export const selectTopArtists = createSelector(
  (state) => state.topArtists,
  (topArtists) => topArtists
);

export default slice.reducer;
