import { Action, combineReducers, Reducer, ReducersMapObject } from "@reduxjs/toolkit"
import { ReducerManager, StateSchema, StateSchemaKey } from "./stateSchema"



export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): ReducerManager {
  const reducers = { ...initialReducers }

  let combinedReducer = combineReducers(reducers) as Reducer<StateSchema>

  let keysToRemove: StateSchemaKey[] = []

  return {
    getReducerMap: () => reducers,

    reduce: (state: StateSchema | undefined, action: Action) => {
      if (keysToRemove.length > 0 && state) {
        state = { ...state }

        for (const key of keysToRemove) {
          delete state[key]
        }
        keysToRemove = []
      }

      return combinedReducer(state, action)
    },

    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return
      }

      reducers[key] = reducer

      combinedReducer = combineReducers(reducers) as Reducer<StateSchema>
    },

    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) {
        return
      }

      delete reducers[key]

      keysToRemove.push(key)

      combinedReducer = combineReducers(reducers) as Reducer<StateSchema>
    }
  }
}
