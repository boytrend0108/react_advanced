import { StateSchema } from "app/providers/StoreProvider";

export function getLoginPassword(state: StateSchema): string {
  return state.loginForm?.password
};