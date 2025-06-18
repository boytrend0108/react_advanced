import axios from 'axios';
import { loginByUsername } from './loginByUsername';
import { User, userActions } from 'entitie/User';
import { Dispatch } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { TestAsyncThunk } from 'shared/config/tests/testAsyncThunk/testAsyncThunk';

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
  let getState: () => StateSchema;
  let api: typeof mockedAxios;
  let navigate: jest.Mock;

  beforeEach(() => {
    dispatch = jest.fn();
    getState = jest.fn();
    api = mockedAxios;
    navigate = jest.fn();
  });

  const userValue = { username: 'testuser', password: '1111' }

  // it('success login', async () => {
  //   const action = loginByUsername(userValue);
  //   const result = await action(dispatch, getState, { api: api as AxiosInstance, navigate });

  //   expect(mockedAxios.post).toHaveBeenCalled()
  //   expect(result.meta.requestStatus).toBe('fulfilled');

  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(result.payload as User));
  //   expect(dispatch).toHaveBeenCalledTimes(3);
  //   expect(localStorage.getItem('user')).toBe(JSON.stringify(result.payload));
  //   expect(result.payload).toEqual(response);
  // });


  // it('error login', async () => {
  //   mockedAxios.post = jest.fn().mockResolvedValue({ status: 403 })
  //   const action = loginByUsername(userValue);
  //   const result = await action(dispatch, getState, { api: api as AxiosInstance, navigate });

  //   expect(axios.post).toHaveBeenCalled()
  //   expect(result.meta.requestStatus).toBe('rejected');

  //   expect(dispatch).toHaveBeenCalledTimes(2);
  //   expect(result.payload).toEqual('Failed to fetch user by ID');
  // });


  it('success login', async () => {
    const thunk = new TestAsyncThunk(loginByUsername);

    const result = await thunk.callThunk(userValue);

    expect(axios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('fulfilled');

    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(result.payload as User));
    expect(thunk.dispatch).toHaveBeenCalledTimes(3);
    expect(localStorage.getItem('user')).toBe(JSON.stringify(result.payload));
    expect(result.payload).toEqual(response);

  });


  it('error login', async () => {
    mockedAxios.post = jest.fn().mockResolvedValue({ status: 403 })
    const thunk = new TestAsyncThunk(loginByUsername);
    const result = await thunk.callThunk(userValue);

    expect(axios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected');

    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(result.payload).toEqual('Failed to fetch user by ID');
  });
});
