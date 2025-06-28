import { StateSchema } from "app/providers/StoreProvider";

export function getLoginError(state: StateSchema): string {
  return state.loginForm?.error ?? ''
};