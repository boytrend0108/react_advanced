import axios from 'axios';
import { TestAsyncThunk } from 'shared/config/tests/testAsyncThunk/testAsyncThunk';
import { updateProfileData } from './updataProfileData';
import { Profile, ValidateProfileError } from '../../types/profile';
import { Country } from 'entitie/Country';
import { Currency } from 'entitie/Currency';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, { shallow: true });

const validProfileData: Profile = {
  name: 'John',
  surname: 'Doe',
  age: 30,
  country: Country.USA,
  currency: Currency.USD,
  city: 'New York',
  username: 'johndoe',
  email: 'john@example.com',
  avatar: 'avatar-url'
};

describe('updateProfileData', () => {

  beforeEach(() => {
    jest.clearAllMocks();
  });


  it('should successfully update profile data', async () => {
    const thunk = new TestAsyncThunk(updateProfileData);

    // Mock the state to return valid profile form data
    thunk.getState = jest.fn().mockReturnValue({
      profile: {
        form: validProfileData
      }
    });

    // Mock successful API response
    mockedAxios.put = jest.fn().mockResolvedValue({
      data: validProfileData
    });

    const result = await thunk.callThunk(undefined);

    expect(mockedAxios.put).toHaveBeenCalledWith('/profile', validProfileData);
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(validProfileData);
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });

  it('should reject with validation errors when profile data is invalid', async () => {
    const invalidProfileData: Profile = {
      name: '', // Invalid: empty name
      surname: '', // Invalid: empty surname
      age: undefined, // Invalid: no age
      country: undefined, // Invalid: no country
    };

    const thunk = new TestAsyncThunk(updateProfileData);

    // Mock the state to return invalid profile form data
    thunk.getState = jest.fn().mockReturnValue({
      profile: {
        form: invalidProfileData
      }
    });

    const result = await thunk.callThunk(undefined);

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY
    ]);
    expect(mockedAxios.put).not.toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });

  it('should reject with NO_DATA error when no profile form data exists', async () => {
    const thunk = new TestAsyncThunk(updateProfileData);

    // Mock the state to return no profile form data
    thunk.getState = jest.fn().mockReturnValue({
      profile: {
        form: undefined
      }
    });

    const result = await thunk.callThunk(undefined);

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.NO_DATA]);
    expect(mockedAxios.put).not.toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });

  it('should reject with SERVER_ERROR when API returns no data', async () => {
    const thunk = new TestAsyncThunk(updateProfileData);

    // Mock the state to return valid profile form data
    thunk.getState = jest.fn().mockReturnValue({
      profile: {
        form: validProfileData
      }
    });

    // Mock API response with no data
    mockedAxios.put = jest.fn().mockResolvedValue({
      data: null
    });

    const result = await thunk.callThunk(undefined);

    expect(mockedAxios.put).toHaveBeenCalledWith('/profile', validProfileData);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });

  it('should reject with SERVER_ERROR when API call fails', async () => {
    const thunk = new TestAsyncThunk(updateProfileData);

    // Mock the state to return valid profile form data
    thunk.getState = jest.fn().mockReturnValue({
      profile: {
        form: validProfileData
      }
    });

    // Mock API call to throw an error
    mockedAxios.put = jest.fn().mockRejectedValue(new Error('Network error'));

    const result = await thunk.callThunk(undefined);

    expect(mockedAxios.put).toHaveBeenCalledWith('/profile', validProfileData);
    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR]);
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });

  it('should reject with validation errors for invalid age (non-integer)', async () => {
    const profileWithInvalidAge: Profile = {
      ...validProfileData,
      age: 30.5 // Invalid: non-integer age
    };

    const thunk = new TestAsyncThunk(updateProfileData);

    // Mock the state to return profile with invalid age
    thunk.getState = jest.fn().mockReturnValue({
      profile: {
        form: profileWithInvalidAge
      }
    });

    const result = await thunk.callThunk(undefined);

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_AGE]);
    expect(mockedAxios.put).not.toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });

  it('should reject with multiple validation errors', async () => {
    const multipleErrorsProfile: Profile = {
      name: '', // Invalid: empty name
      surname: 'Doe',
      age: 0, // Invalid: zero age
      country: undefined, // Invalid: no country
      currency: Currency.USD,
    };

    const thunk = new TestAsyncThunk(updateProfileData);

    // Mock the state to return profile with multiple errors
    thunk.getState = jest.fn().mockReturnValue({
      profile: {
        form: multipleErrorsProfile
      }
    });

    const result = await thunk.callThunk(undefined);

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_COUNTRY
    ]);
    expect(mockedAxios.put).not.toHaveBeenCalled();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
  });
});