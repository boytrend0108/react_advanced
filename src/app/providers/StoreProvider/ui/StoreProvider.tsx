import { Provider } from 'react-redux';
import { createReduxStore } from '../config/store';
import type { StateSchema } from '../config/stateSchema';

interface Props {
  children: React.ReactNode;
  initialState?: StateSchema;
}

export const StoreProvider: React.FC<Props> = ({ children, initialState }) => {
  const store = createReduxStore(initialState);

  return <Provider store={store}>{children}</Provider>;
};
