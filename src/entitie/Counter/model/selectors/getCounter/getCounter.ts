import { StateSchema } from "app/providers/StoreProvider/config/stateSchema";

export function getCounter(state: StateSchema) {
  return state.counter
}