import { StateSchema } from 'app/providers/StoreProvider';
import { getProfileFirstName } from './getProfileFirstName';

describe('getProfileFirstName.test', () => {
  test('should return first name', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          name: 'John',
        },
      },
    };
    expect(getProfileFirstName(state as StateSchema)).toEqual('John');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileFirstName(state as StateSchema)).toEqual('');
  });

  test('should work with empty profile data', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {},
    };
    expect(getProfileFirstName(state as StateSchema)).toEqual('');
  });

  test('should work when data exists but name is undefined', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          surname: 'Doe',
        },
      },
    };
    expect(getProfileFirstName(state as StateSchema)).toEqual('');
  });
});
