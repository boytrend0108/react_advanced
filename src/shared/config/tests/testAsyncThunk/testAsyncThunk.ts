import { AsyncThunkAction, Dispatch } from "@reduxjs/toolkit";
import { StateSchema } from "app/providers/StoreProvider";

type ActionCreator<Return, Arg, RejectedValue> = (args: Arg) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>;

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: Dispatch;
  getSTate: () => StateSchema;
  actionCreator: ActionCreator<Return, Arg, RejectedValue>;

  constructor(actionCreator: ActionCreator<Return, Arg, RejectedValue>) {
    this.dispatch = jest.fn();
    this.getSTate = jest.fn();
    this.actionCreator = actionCreator;
  }

  async callThunk(args: Arg) {
    const action = this.actionCreator(args);
    const result = await action(this.dispatch, this.getSTate, undefined);

    return result;
  }
}