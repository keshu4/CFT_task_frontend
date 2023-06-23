import { createSlice } from "@reduxjs/toolkit";
import { userRegisterAsync } from "../asyncThunk/register.asyncThunk";

const initialState = {
  userRegisterStatus: null,
};
export const RegisterSlice = createSlice({
  name: "register",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(userRegisterAsync.pending, (state, action) => {
      state.userRegisterStatus = 'loading';
    });
    builder.addCase(userRegisterAsync.fulfilled, (state, action) => {
      state.userRegisterStatus = 'success';
    });
    builder.addCase(userRegisterAsync.rejected, (state, action) => {
      state.userRegisterStatus = 'failed';
    });
  },
});

export default RegisterSlice.reducer;