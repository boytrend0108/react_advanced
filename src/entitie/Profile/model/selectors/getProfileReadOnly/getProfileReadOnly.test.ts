import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileReadOnly } from './getProfileReadOnly';

describe('getProfileReadOnly.test', () => {
  test('should return readonly state as true', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: true,
      },
    };
    expect(getProfileReadOnly(state as StateSchema)).toEqual(true);
  });

  test('should return readonly state as false', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        readonly: false,
      },
    };
    expect(getProfileReadOnly(state as StateSchema)).toEqual(false);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileReadOnly(state as StateSchema)).toEqual(false);
  });

  test('should work with empty profile', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {},
    };
    expect(getProfileReadOnly(state as StateSchema)).toEqual(false);
  });
});
