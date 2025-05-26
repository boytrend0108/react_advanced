import { UserSchema } from "entities/Counter/User";
import { CounterSchema } from "entitiess/Counter";

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
}