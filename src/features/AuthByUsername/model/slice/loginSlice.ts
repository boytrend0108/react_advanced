import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/loginSchema';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

const initialState: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
  error: undefined,
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setUserPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loginByUsername.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    builder.addCase(loginByUsername.fulfilled, (state) => {
      state.isLoading = false;

    })
    builder.addCase(loginByUsername.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload || 'An error occurred while logging in';
    })
  },
})

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;