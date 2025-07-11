import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Profile, ProfileSchema } from '../types/profile'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updataProfileData'

const initialState: ProfileSchema = {
  data: null,
  form: null,
  isLoading: false,
  error: '',
  validateErrors: undefined,
  readonly: true,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.data = {
        ...state.data,
        ...action.payload,
      }
    },
    updateForm: (state, action: PayloadAction<Profile>) => {
      state.form = {
        ...state.form,
        ...action.payload,
      }
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.form = state.data;
      state.validateErrors = undefined; // Reset validation errors on cancel
    },

  },
  extraReducers: (builder) => {
    builder.addCase(fetchProfileData.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    builder.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
      state.form = action.payload; // Assuming you want to keep the form in sync with the fetched data
    })
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || 'An error occurred while fetch profile in';
    })

    builder.addCase(updateProfileData.pending, (state) => {
      state.isLoading = true;
      state.validateErrors = undefined;
    })
    builder.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
      state.isLoading = false;
      state.validateErrors = undefined;
      state.data = action.payload;
      state.form = action.payload; // Assuming you want to keep the form in sync with the fetched data
      state.readonly = true; // Set readonly to true after update
    })
    builder.addCase(updateProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.validateErrors = action.payload;
    })
  },
})

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;