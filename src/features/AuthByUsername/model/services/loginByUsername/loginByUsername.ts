import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { User } from "entitie/User";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
  'users/fetchByIdStatus',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>("http://localhost:8000/login", { authData })

      if (!response.data) {
        throw new Error("No user data found");
      }

      return response.data
    } catch (e) {
      console.error("Error fetching user by ID:", e);
      return thunkAPI.rejectWithValue("Failed to fetch user by ID");
    }
  }
)