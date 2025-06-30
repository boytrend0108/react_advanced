import { StateSchema } from "app/providers/StoreProvider";
import { Profile } from "../../types/profile";

export function getProfileForm(state: StateSchema): Profile | undefined {
  return state.profile?.form || undefined;
}