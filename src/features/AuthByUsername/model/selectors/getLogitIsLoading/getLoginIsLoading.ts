import { StateSchema } from "app/providers/StoreProvider";

export function getLoginIsLoading(state: StateSchema): boolean {
  return state.loginForm?.isLoading;
};