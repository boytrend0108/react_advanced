import { AsyncThunkAction, Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";
import axios, { AxiosStatic } from "axios";

type ActionCreator<Return, Arg, RejectedValue> = (args: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;
jest.mock('axios');

const mockedAxios = jest.mocked(axios, { shallow: true });

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: Dispatch;
  getState: () => StateSchema;
  actionCreator: ActionCreator<Return, Arg, RejectedValue>;
  api: jest.MockedFn<AxiosStatic>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  navigate: jest.MockedFn<any>;

  constructor(actionCreator: ActionCreator<Return, Arg, RejectedValue>, state?: DeepPartial<StateSchema>) {
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as StateSchema);
    this.actionCreator = actionCreator;
    this.api = mockedAxios;
    this.navigate = jest.fn();
  }

  async callThunk(args: Arg) {
    const action = this.actionCreator(args);
    const result = await action(this.dispatch, this.getState, { api: this.api, navigate: this.navigate });

    return result;
  }
}