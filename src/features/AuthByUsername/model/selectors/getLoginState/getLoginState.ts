import { StateSchema } from "app/providers/StoreProvider";
import { LoginSchema } from "../../types/loginSchema";

export function getLoginState(state: StateSchema): LoginSchema {
  return state.loginForm
};