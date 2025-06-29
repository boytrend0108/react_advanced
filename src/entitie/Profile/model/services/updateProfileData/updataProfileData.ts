import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider";
import i18n from "shared/config/i18n/i18n";
import { Profile } from "../../types/profile";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'update/fetchProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const form = getProfileForm(getState());

    try {
      const response = await extra.api.put<Profile>("/profile", form)

      if (!response.data) {
        throw new Error("failed to update profile data");
      }


      return response.data
    } catch (e) {
      console.error("Error updating profile:", e);
      return rejectWithValue(i18n.t("Failed to update profile data"));
    }
  }
)