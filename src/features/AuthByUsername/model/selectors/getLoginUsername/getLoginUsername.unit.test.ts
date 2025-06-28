import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginUsername } from './getLoginUsername'

describe('getLoginError.unit', () => {
  const mockState = {
    loginForm: {
      username: 'Jonh Doe',
    },
  } as StateSchema;

  it('should return error as string', () => {
    expect(getLoginUsername(mockState)).toEqual('Jonh Doe');
  })

  it('should return undefined if slice doesn`t exist', () => {
    const mockState = {

    } as StateSchema;
    expect(getLoginUsername(mockState)).toEqual("");
  })
})