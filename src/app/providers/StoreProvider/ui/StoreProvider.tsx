import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import { StateSchema } from '../config/StateSchema';
import { ReducersMapObject } from '@reduxjs/toolkit';

interface Props {
  children: React.ReactNode;
  initialState?: StateSchema;
  asyncReducers?: ReducersMapObject<StateSchema>;
}

export const StoreProvider: React.FC<Props> = ({
  children,
  initialState,
  asyncReducers,
}) => {
  const store = createReduxStore(initialState, asyncReducers);

  return <Provider store={store}>{children}</Provider>;
};
