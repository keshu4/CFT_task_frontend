import { createSlice } from "@reduxjs/toolkit";
import { userLoginAsync } from "../asyncThunk/auth.asyncThunk";

const initialState = {
    user: null,
    token: null,
    userLoginStatus: null,
};

export const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    removeToken: (state, action) => {
      state.token = null;
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userLoginAsync.pending, (state, action) => {
      state.userLoginStatus = 'loading';
    });
    builder.addCase(userLoginAsync.fulfilled, (state, action) => {
      state.userLoginStatus = 'success';
      state.token = action.payload.data.token;
      state.user = action.payload.data.data;
    });
    builder.addCase(userLoginAsync.rejected, (state, action) => {
      state.userLoginStatus = 'failed';
    });
  },
});

export const { removeToken } = AuthSlice.actions;

export default AuthSlice.reducer;