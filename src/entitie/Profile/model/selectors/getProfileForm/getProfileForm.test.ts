import { StateSchema } from 'app/providers/StoreProvider';
import { Country } from 'entitie/Country';
import { Currency } from 'entitie/Currency';
import { getProfileForm } from './getProfileForm';

describe('getProfileForm.test', () => {
  test('should return form data', () => {
    const formData = {
      name: 'John',
      surname: 'Doe',
      age: 30,
      country: Country.Ukraine,
      city: 'Kyiv',
      currency: Currency.USD,
      username: 'johndoe',
      email: 'john@example.com',
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        form: formData,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(formData);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });

  test('should work with empty profile', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {},
    };
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });

  test('should work with null form', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        form: null,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(undefined);
  });

  test('should return partial form data', () => {
    const partialFormData = {
      name: 'Jane',
      age: 25,
    };

    const state: DeepPartial<StateSchema> = {
      profile: {
        form: partialFormData,
      },
    };
    expect(getProfileForm(state as StateSchema)).toEqual(partialFormData);
  });
});
