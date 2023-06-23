import { createAsyncThunk } from "@reduxjs/toolkit";
import { UserRegisterService } from "../services/register.service";

export const userRegisterAsync = createAsyncThunk(
  '/register',
  async (payload) => await UserRegisterService(payload)
);