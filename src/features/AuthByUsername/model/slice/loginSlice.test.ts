import { LoginSchema } from "../types/loginSchema";
import { loginActions, loginReducer } from "./loginSlice";

describe('loginSlice', () => {
  const state: LoginSchema = {
    username: '',
    password: '',
    isLoading: false,
    error: undefined,
  }

  it('set username', () => {
    const newState = loginReducer(state, loginActions.setUserName('testuser'));
    expect(newState.username).toBe('testuser');
  });

  it('set password', () => {
    const newState = loginReducer(state, loginActions.setUserPassword('testpassword'));
    expect(newState.password).toBe('testpassword');
  });
});