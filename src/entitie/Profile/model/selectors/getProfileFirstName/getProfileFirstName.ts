import { StateSchema } from "app/providers/StoreProvider";

export function getProfileFirstName(state: StateSchema): string {
  return state.profile?.data?.name || '';
}