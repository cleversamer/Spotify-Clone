import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "openedList",
  initialState: {
    name: "songs",
  },
  reducers: {
    openedListInverted: (openedList, action) => {
      const { name } = openedList;
      openedList.name = name === "songs" ? "nav" : "songs";
    },
  },
});

const { openedListInverted } = slice.actions;

// Action creators
export const invertOpenedList = () => openedListInverted();

// Selectors
export const selectOpenedList = createSelector(
  (state) => state.openedList,
  (openedList) => openedList.name
);

export default slice.reducer;
