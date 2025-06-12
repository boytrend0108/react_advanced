import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginIsLoading } from './getLoginIsLoading'

describe('getLoginError.unit', () => {
  const mockState = {
    loginForm: {
      isLoading: true,
    },
  } as StateSchema;

  it('should return error as string', () => {
    expect(getLoginIsLoading(mockState)).toBeTruthy();
  })

  it('should return undefined if slice doesn`t exist', () => {
    const mockState = {

    } as StateSchema;
    expect(getLoginIsLoading(mockState)).toEqual(undefined);
  })
})