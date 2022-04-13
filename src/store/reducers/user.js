import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "user",
  initialState: {
    body: null,
    token: null,
  },
  reducers: {
    userAuthenticated: (user, action) => {
      user.body = action.payload.user;
    },
    tokenSet: (user, action) => {
      user.token = action.payload.token;
    },
  },
});

const { userAuthenticated, tokenSet } = slice.actions;

// Action creators
export const authenticateUser = (user) => userAuthenticated({ user });

export const setToken = (token) => tokenSet({ token });

// Selectors
export const selectUser = createSelector(
  (state) => state.user,
  (user) => user
);

export default slice.reducer;
