import { UserSchema } from "entitie/User";
import { CounterSchema } from "entitie/Counter";
import { LoginSchema } from "features/AuthByUsername/model/types/loginSchema";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  loginForm: LoginSchema
}