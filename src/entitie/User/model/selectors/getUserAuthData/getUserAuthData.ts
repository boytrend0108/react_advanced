import { StateSchema } from "app/providers/StoreProvider/config/stateSchema";


export function getUserAuthData(state: StateSchema) {
  return state.user.authData;
};