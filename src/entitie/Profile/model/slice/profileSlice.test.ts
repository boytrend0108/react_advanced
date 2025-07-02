import { profileActions, profileReducer } from './profileSlice';
import { ProfileSchema, Profile, ValidateProfileError } from '../types/profile';
import { Currency } from 'entitie/Currency';
import { Country } from 'entitie/Country';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updataProfileData';

const mockProfile: Profile = {
  name: 'John',
  surname: 'Doe',
  age: 30,
  currency: Currency.USD,
  country: Country.USA,
  city: 'New York',
  username: 'johndoe',
  email: 'john@example.com',
  avatar: 'avatar.jpg'
};

describe('profileSlice', () => {
  describe('initial state', () => {
    test('should return initial state', () => {
      expect(profileReducer(undefined, { type: '' })).toEqual({
        data: null,
        form: null,
        isLoading: false,
        error: '',
        validateErrors: undefined,
        readonly: true,
      });
    });
  });

  describe('reducers', () => {
    test('should handle setReadonly', () => {
      const initialState: ProfileSchema = {
        data: null,
        form: null,
        isLoading: false,
        error: '',
        validateErrors: undefined,
        readonly: true,
      };

      const nextState = profileReducer(initialState, profileActions.setReadonly(false));

      expect(nextState.readonly).toBe(false);
    });

    test('should handle updateProfile', () => {
      const initialState: ProfileSchema = {
        data: {
          name: 'Old Name',
          age: 25,
        },
        form: null,
        isLoading: false,
        error: '',
        validateErrors: undefined,
        readonly: true,
      };

      const updateData: Profile = {
        name: 'New Name',
        surname: 'New Surname',
      };

      const nextState = profileReducer(initialState, profileActions.updateProfile(updateData));

      expect(nextState.data).toEqual({
        name: 'New Name',
        surname: 'New Surname',
        age: 25,
      });
    });

    test('should handle updateForm', () => {
      const initialState: ProfileSchema = {
        data: null,
        form: {
          name: 'Old Name',
          age: 25,
        },
        isLoading: false,
        error: '',
        validateErrors: undefined,
        readonly: true,
      };

      const updateData: Profile = {
        name: 'New Name',
        surname: 'New Surname',
      };

      const nextState = profileReducer(initialState, profileActions.updateForm(updateData));

      expect(nextState.form).toEqual({
        name: 'New Name',
        surname: 'New Surname',
        age: 25,
      });
    });

    test('should handle cancelEdit', () => {
      const initialState: ProfileSchema = {
        data: mockProfile,
        form: {
          name: 'Modified Name',
          surname: 'Modified Surname',
        },
        isLoading: false,
        error: '',
        validateErrors: [ValidateProfileError.INCORRECT_AGE],
        readonly: false,
      };

      const nextState = profileReducer(initialState, profileActions.cancelEdit());

      expect(nextState.readonly).toBe(true);
      expect(nextState.form).toEqual(mockProfile);
      expect(nextState.validateErrors).toBeUndefined();
    });
  });

  describe('extraReducers - fetchProfileData', () => {
    test('should handle fetchProfileData.pending', () => {
      const initialState: ProfileSchema = {
        data: null,
        form: null,
        isLoading: false,
        error: 'Some error',
        validateErrors: undefined,
        readonly: true,
      };

      const action = { type: fetchProfileData.pending.type };
      const nextState = profileReducer(initialState, action);

      expect(nextState.isLoading).toBe(true);
      expect(nextState.error).toBe(null);
    });

    test('should handle fetchProfileData.fulfilled', () => {
      const initialState: ProfileSchema = {
        data: null,
        form: null,
        isLoading: true,
        error: 'Some error',
        validateErrors: undefined,
        readonly: true,
      };

      const action = {
        type: fetchProfileData.fulfilled.type,
        payload: mockProfile,
      };
      const nextState = profileReducer(initialState, action);

      expect(nextState.isLoading).toBe(false);
      expect(nextState.error).toBe(null);
      expect(nextState.data).toEqual(mockProfile);
      expect(nextState.form).toEqual(mockProfile);
    });

    test('should handle fetchProfileData.rejected', () => {
      const initialState: ProfileSchema = {
        data: null,
        form: null,
        isLoading: true,
        error: null,
        validateErrors: undefined,
        readonly: true,
      };

      const errorMessage = 'Failed to fetch profile';
      const action = {
        type: fetchProfileData.rejected.type,
        payload: errorMessage,
      };
      const nextState = profileReducer(initialState, action);

      expect(nextState.isLoading).toBe(false);
      expect(nextState.error).toBe(errorMessage);
    });

    test('should handle fetchProfileData.rejected with default error message', () => {
      const initialState: ProfileSchema = {
        data: null,
        form: null,
        isLoading: true,
        error: null,
        validateErrors: undefined,
        readonly: true,
      };

      const action = {
        type: fetchProfileData.rejected.type,
        payload: undefined,
      };
      const nextState = profileReducer(initialState, action);

      expect(nextState.isLoading).toBe(false);
      expect(nextState.error).toBe('An error occurred while fetch profile in');
    });
  });

  describe('extraReducers - updateProfileData', () => {
    test('should handle updateProfileData.pending', () => {
      const initialState: ProfileSchema = {
        data: null,
        form: null,
        isLoading: false,
        error: '',
        validateErrors: [ValidateProfileError.INCORRECT_AGE],
        readonly: true,
      };

      const action = { type: updateProfileData.pending.type };
      const nextState = profileReducer(initialState, action);

      expect(nextState.isLoading).toBe(true);
      expect(nextState.validateErrors).toBeUndefined();
    });

    test('should handle updateProfileData.fulfilled', () => {
      const initialState: ProfileSchema = {
        data: {
          name: 'Old Name',
        },
        form: {
          name: 'New Name',
        },
        isLoading: true,
        error: '',
        validateErrors: [ValidateProfileError.INCORRECT_AGE],
        readonly: false,
      };

      const action = {
        type: updateProfileData.fulfilled.type,
        payload: mockProfile,
      };
      const nextState = profileReducer(initialState, action);

      expect(nextState.isLoading).toBe(false);
      expect(nextState.validateErrors).toBeUndefined();
      expect(nextState.data).toEqual(mockProfile);
      expect(nextState.form).toEqual(mockProfile);
      expect(nextState.readonly).toBe(true);
    });

    test('should handle updateProfileData.rejected', () => {
      const initialState: ProfileSchema = {
        data: null,
        form: null,
        isLoading: true,
        error: '',
        validateErrors: undefined,
        readonly: false,
      };

      const validationErrors = [ValidateProfileError.INCORRECT_AGE, ValidateProfileError.NO_DATA];
      const action = {
        type: updateProfileData.rejected.type,
        payload: validationErrors,
      };
      const nextState = profileReducer(initialState, action);

      expect(nextState.isLoading).toBe(false);
      expect(nextState.validateErrors).toEqual(validationErrors);
    });
  });
});