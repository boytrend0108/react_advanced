import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginError } from './getLoginError'

describe('getLoginError.unit', () => {
  const mockState = {
    loginForm: {
      error: 'error',
    },
  } as StateSchema;

  it('should return error as string', () => {
    expect(getLoginError(mockState)).toEqual("error");
  })

  it('should return undefined if slice doesn`t exist', () => {
    const mockState = {

    } as StateSchema;
    expect(getLoginError(mockState)).toEqual(undefined);
  })
})