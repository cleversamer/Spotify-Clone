import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "discoverWeekly",
  initialState: {
    info: null,
  },
  reducers: {
    discoverWeeklySet: (discoverWeekly, action) => {
      discoverWeekly.info = action.payload.discoverWeekly;
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
  (discoverWeekly) => discoverWeekly.info
);

export default slice.reducer;
