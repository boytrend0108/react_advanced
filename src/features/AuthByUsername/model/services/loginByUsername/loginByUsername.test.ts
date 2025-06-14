import axios from 'axios';
import { loginByUsername } from './loginByUsername';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { User, userActions } from 'entitie/User';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, { shallow: true });
const userValue = { username: 'testuser', password: '1111' }
const response = {
  id: '1',
  username: 'testuser',
}

describe('loginByUsername', () => {
  mockedAxios.post = jest.fn().mockResolvedValue({
    data: response,
  })

  let dispatch: Dispatch;
  let getSTate: () => StateSchema;

  beforeEach(() => {
    dispatch = jest.fn();
    getSTate = jest.fn();
  });

  const userValue = { username: 'testuser', password: '1111' }

  it('success login', async () => {
    const action = loginByUsername(userValue);
    const result = await action(dispatch, getSTate, undefined);

    expect(axios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled');

    expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(result.payload as User));
    expect(dispatch).toHaveBeenCalledTimes(3);
    expect(localStorage.getItem('user')).toBe(JSON.stringify(result.payload));
    expect(result.payload).toEqual(response);

  });


  it('error login', async () => {
    mockedAxios.post = jest.fn().mockResolvedValue({ status: 403 })
    const action = loginByUsername(userValue);
    const result = await action(dispatch, getSTate, undefined);

    expect(axios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected');

    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual('Failed to fetch user by ID');
  });
});
