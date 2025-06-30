import { createAsyncThunk } from "@reduxjs/toolkit"
import { ThunkConfig } from "app/providers/StoreProvider";
import { Profile, ValidateProfileError } from "../../types/profile";
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm";
import { validateProfileData } from "../validateProfileData/validateProfileData";

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
  'update/fetchProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const form = getProfileForm(getState());

    const errors = validateProfileData(form);

    if (errors.length) {
      return rejectWithValue(errors);
    }

    try {
      const response = await extra.api.put<Profile>("/profile", form)

      if (!response.data) {
        throw new Error("failed to update profile data");
      }


      return response.data
    } catch (e) {
      console.error("Error updating profile:", e);
      return rejectWithValue([ValidateProfileError.SERVER_ERROR]);
    }
  }
)