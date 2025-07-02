// Mock i18n at the top level before any imports
jest.mock('shared/config/i18n/i18n', () => ({
  default: {
    t: (key: string) => key,
  },
}));

import { fetchProfileData } from './fetchProfileData';
import { Profile } from '../../types/profile';
import { Country } from 'entitie/Country';
import { Currency } from 'entitie/Currency';
import { ThunkExtraArg } from 'app/providers/StoreProvider';

const mockProfileData: Profile = {
  name: 'John',
  surname: 'Doe',
  age: 30,
  city: 'New York',
  username: 'johndoe',
  email: 'john.doe@example.com',
  avatar: 'https://example.com/avatar.jpg',
  country: Country.USA,
  currency: Currency.USD,
};

describe('fetchProfileData', () => {
  const mockDispatch = jest.fn();
  const mockGetState = jest.fn();
  const mockApi = {
    get: jest.fn(),
  };
  const mockNavigate = jest.fn();
  const mockExtra = {
    api: mockApi,
    navigate: mockNavigate,
  } as unknown as ThunkExtraArg;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should fetch profile data successfully', async () => {
    // Arrange
    mockApi.get.mockResolvedValue({
      data: mockProfileData,
    });

    // Act
    const thunk = fetchProfileData();
    const result = await thunk(mockDispatch, mockGetState, mockExtra);

    // Assert
    expect(mockApi.get).toHaveBeenCalledWith('/profile');
    expect(result.type).toBe('profile/fetchProfileData/fulfilled');
    expect(result.payload).toEqual(mockProfileData);
  });

  it('should handle error when no data is returned', async () => {
    // Arrange
    mockApi.get.mockResolvedValue({
      data: null,
    });

    // Act
    const thunk = fetchProfileData();
    const result = await thunk(mockDispatch, mockGetState, mockExtra);

    // Assert
    expect(mockApi.get).toHaveBeenCalledWith('/profile');
    expect(result.type).toBe('profile/fetchProfileData/rejected');
  });

  it('should handle network error', async () => {
    // Arrange
    mockApi.get.mockRejectedValue(new Error('Network Error'));

    // Act
    const thunk = fetchProfileData();
    const result = await thunk(mockDispatch, mockGetState, mockExtra);

    // Assert
    expect(mockApi.get).toHaveBeenCalledWith('/profile');
    expect(result.type).toBe('profile/fetchProfileData/rejected');
  });

  it('should handle undefined response data', async () => {
    // Arrange
    mockApi.get.mockResolvedValue({});

    // Act
    const thunk = fetchProfileData();
    const result = await thunk(mockDispatch, mockGetState, mockExtra);

    // Assert
    expect(mockApi.get).toHaveBeenCalledWith('/profile');
    expect(result.type).toBe('profile/fetchProfileData/rejected');
  });
});
