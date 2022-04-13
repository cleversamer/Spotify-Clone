import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "discoverWeekly",
  initialState: [],
  reducers: {
    discoverWeeklySet: (discoverWeekly, action) => {
      discoverWeekly = action.payload.discoverWeekly;
    },
  },
});

const { discoverWeeklySet } = slice.actions;

// Action creators
export const setDiscoverWeekly = (discoverWeekly) =>
  discoverWeeklySet({ discoverWeekly });

// Selectors
export const selectDiscoverWeekly = createSelector(
  (state) => state.discoverWeekly,
  (discoverWeekly) => discoverWeekly
);

export default slice.reducer;
