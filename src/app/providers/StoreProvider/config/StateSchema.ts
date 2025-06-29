import { UserSchema } from "entitie/User";
import { CounterSchema } from "entitie/Counter";
import { LoginSchema } from "features/AuthByUsername/model/types/loginSchema";
import { Action, EnhancedStore, Reducer, ReducersMapObject } from "@reduxjs/toolkit";
import { ProfileSchema } from "entitie/Profile";
import { NavigateFunction } from "react-router";
import { AxiosInstance } from "axios";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;

  //async reducers
  loginForm?: LoginSchema
  profile?: ProfileSchema;
}

export type StateSchemaKey = keyof StateSchema;

export interface StoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager;
}

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema | undefined, action: Action) => StateSchema;
  add: (key: StateSchemaKey, reducer: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
};

export interface ThunkExtraArg {
  api: AxiosInstance,
  navigate: NavigateFunction
};

export interface ThunkConfig<T> {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: StateSchema;
}
