import { createSelector } from "reselect";
import { getCounter } from "../getCounter/getCounter";
import { CounterSchema } from "../../types/counterSchema";

export const GetCounterValue = createSelector(
  getCounter,
  (counter: CounterSchema) => counter.value
)