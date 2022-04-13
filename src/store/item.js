import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "item",
  initialState: null,
  reducers: {
    itemSet: (item, action) => {
      item = action.payload.item;
    },
  },
});

const { itemSet } = slice.actions;

// Action creators
export const setItem = (item) => itemSet({ item });

// Selectors
export const selectItem = createSelector(
  (state) => state.item,
  (item) => item
);

export default slice.reducer;
