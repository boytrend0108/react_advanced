import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Profile, ProfileSchema } from '../types/profile'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'

const initialState: ProfileSchema = {
  data: null,
  isLoading: false,
  error: '',
  readonly: true,
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {

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

    })
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || 'An error occurred while logging in';
    })
  },
})

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;