import { UserSchema } from "entitie/User";
import { CounterSchema } from "entitie/Counter";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
}