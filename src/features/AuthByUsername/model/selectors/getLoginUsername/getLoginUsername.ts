import { StateSchema } from "app/providers/StoreProvider";

export function getLoginUsername(state: StateSchema): string {
  return state.loginForm?.username || '';
};