import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { counterReducer } from 'entitie/Counter';
import { userReducer } from 'entitie/User';

import { createReducerManager } from './reducerManager';

export function createReduxStore(initialState?: StateSchema, asyncReducers?: ReducersMapObject<StateSchema>) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const store = configureStore<StateSchema>({
    reducer: reducerManager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  });

  // @ts-expect-error we need to extend the store with our custom reducer manager
  store.reducerManager = reducerManager;

  return store;
}


const store = createReduxStore();
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
