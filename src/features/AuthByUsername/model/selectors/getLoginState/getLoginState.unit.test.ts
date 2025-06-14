import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginState } from './getLoginState'

describe('getLoginError.unit', () => {
  const mockState = {
    loginForm: {
      password: '000',
      username: 'user',
      error: 'error',
      isLoading: false,
    },
  } as StateSchema;

  it('should return error as string', () => {
    expect(getLoginState(mockState)).toEqual(mockState.loginForm);
  })

  it('should return undefined if slice doesn`t exist', () => {
    const mockState = {

    } as StateSchema;
    expect(getLoginState(mockState)).toEqual(undefined);
  })
})