import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {},
  reducers: {
    logIn: (user, action) => ({ ...action.payload }),
  },
});

export const { logIn: loginActionCreator } = usersSlice.actions;

export default usersSlice.reducer;
