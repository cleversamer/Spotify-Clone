import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const slice = createSlice({
  name: "user",
  initialState: {
    body: null,
    // Only while development process
    token:
      "BQBi9H3c0PAeO2Pu3F-ksyF0Jccc5VT2AAC1DNJW6TUkkJe41IWTQFUVwiFG0L-cZ65QjsYHegbqomfDwjXsfnfKAko_Cc9hCiHKRCh5n0MvRY9tJTcRhbKnWeNkZJCG8G04bIgpEwC9UUnwd3lkTYIuCGET1JPUff-BY7K9NjPiyvzHoPbL",
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
  (user) => user.body
);

export const selectToken = createSelector(
  (state) => state.user,
  (user) => user.token
);

export default slice.reducer;
