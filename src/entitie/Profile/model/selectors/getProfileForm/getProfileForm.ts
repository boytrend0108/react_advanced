import { StateSchema } from "app/providers/StoreProvider";
import { Profile } from "../../types/profile";

export function getProfileForm(state: StateSchema): Profile | null {
  return state.profile?.form || null;
}