import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider";
import { User, userActions } from "entitie/User";
import i18n from "shared/config/i18n/i18n";
import { USER_LOCAL_STORAGE_KEY } from "shared/const/localStorage";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
  'users/fetchByIdStatus',
  async (authData, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI;
    try {
      const response = await extra.api.post<User>("/login", { authData })

      if (!response.data) {
        throw new Error("No user data found");
      }

      dispatch(userActions.setAuthData(response.data))
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(response.data))

      extra.navigate("/about")

      return response.data
    } catch (e) {
      console.error("Error fetching user by ID:", e);
      return rejectWithValue(i18n.t("Failed to fetch user by ID"));
    }
  }
)