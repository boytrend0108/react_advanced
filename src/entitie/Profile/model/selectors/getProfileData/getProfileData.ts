import { StateSchema } from "app/providers/StoreProvider";
import { Profile } from "../../types/profile";

export function getProfileData(state: StateSchema): Profile | null {
  return state.profile?.data || null;
}