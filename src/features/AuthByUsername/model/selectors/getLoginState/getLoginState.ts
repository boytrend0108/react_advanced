import { StateSchema } from "app/providers/StoreProvider/config/stateSchema";
import { LoginSchema } from "../../types/loginSchema";

export function getLoginState(state: StateSchema): LoginSchema {
  return state?.loginForm
};