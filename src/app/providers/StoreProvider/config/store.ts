import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { counterReducer } from 'entitie/Counter';
import { userReducer } from 'entitie/User';
import { loginReducer } from 'features/AuthByUsername';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
    loginForm: loginReducer,
  };

  return configureStore<StateSchema>({
    reducer: rootReducer,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })
}


const store = createReduxStore();
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
