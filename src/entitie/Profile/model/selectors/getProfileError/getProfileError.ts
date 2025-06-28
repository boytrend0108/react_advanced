import { StateSchema } from "app/providers/StoreProvider";

export function getProfileError(state: StateSchema): string | undefined {
  return state.profile?.error || "";
}