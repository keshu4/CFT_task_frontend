import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserLoginService } from "../services/auth.service";

export const userLoginAsync = createAsyncThunk(  
  '/login',
  async (payload) => await UserLoginService(payload)
);