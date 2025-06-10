import cn from 'classnames';
import { useAppDispatch } from 'app/providers/StoreProvider/store.hooks';
import { useStore } from 'react-redux';
import { StoreWithManager } from 'app/providers/StoreProvider';
import { Reducer } from '@reduxjs/toolkit';
import { StateSchemaKey } from 'app/providers/StoreProvider/config/stateSchema';
import { useEffect } from 'react';

export type ReducersList = {
  [k in StateSchemaKey]?: Reducer;
};

type ReducerEntry = [StateSchemaKey, Reducer];

interface Props {
  children?: React.ReactNode;
  name?: StateSchemaKey;
  reducers: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicModuleLoader: React.FC<Props> = (props) => {
  const { children, reducers, name, removeAfterUnmount, ...otherProps } = props;

  const dispatch = useAppDispatch();
  const store = useStore() as StoreWithManager;

  useEffect(() => {
    Object.entries(reducers).forEach(([key, reducer]: ReducerEntry) => {
      store.reducerManager.add(key, reducer);
      dispatch({ type: `@INIT  ${key} reducer` });
    });

    return () => {
      if (!removeAfterUnmount) return;
      Object.entries(reducers).forEach(([key, reducer]: ReducerEntry) => {
        store.reducerManager.remove(key);
        dispatch({ type: `@DESTROY ${key} reducer` });
      });
    };
  }, [dispatch, store.reducerManager, name, reducers, removeAfterUnmount]);

  return <div {...otherProps}>{children}</div>;
};
