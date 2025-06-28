import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword'

describe('getLoginError.unit', () => {
  const mockState = {
    loginForm: {
      password: '000',
    },
  } as StateSchema;

  it('should return error as string', () => {
    expect(getLoginPassword(mockState)).toEqual("000");
  })

  it('should return undefined if slice doesn`t exist', () => {
    const mockState = {

    } as StateSchema;
    expect(getLoginPassword(mockState)).toEqual("");
  })
})