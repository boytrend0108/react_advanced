import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { User, userActions } from "entitie/User";
import i18n from "shared/config/i18n/i18n";
import { USER_LOCAL_STORAGE_KEY } from "shared/const/localStorage";

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

      thunkAPI.dispatch(userActions.setAuthData(response.data))
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data))

      return response.data
    } catch (e) {
      console.error("Error fetching user by ID:", e);
      return thunkAPI.rejectWithValue(i18n.t("Failed to fetch user by ID"));
    }
  }
)