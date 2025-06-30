import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider";
import i18n from "shared/config/i18n/i18n";
import { Profile } from "../../types/profile";

export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/fetchProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.get<Profile>("/profile")

      if (!response.data) {
        throw new Error("No user data found");
      }


      return response.data
    } catch (e) {
      console.error("Error fetching profile:", e);
      return rejectWithValue(i18n.t("Failed to fetch profile data"));
    }
  }
)