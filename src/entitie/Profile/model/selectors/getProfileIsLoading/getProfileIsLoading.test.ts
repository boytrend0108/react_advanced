import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileIsLoading } from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
  test('should return loading state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: true,
      },
    };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should return false when not loading', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        isLoading: false,
      },
    };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(false);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileIsLoading(state as StateSchema)).toEqual(false);
  });

  test('should work with empty profile', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {},
    };
    expect(getProfileIsLoading(state as StateSchema)).toEqual(false);
  });
});
