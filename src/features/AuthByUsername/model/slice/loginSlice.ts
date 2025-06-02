import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { LoginSchema } from '../types/loginSchema';

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
})

export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;