import { Country } from "entitie/Country";
import { Currency } from "entitie/Currency";

export interface Profile {
  name?: string,
  surname?: string,
  currency?: Currency,
  country?: Country,
  city?: string,
  age?: number,
  username?: string,
  email?: string,
  avatar?: string
}

export interface ProfileSchema {
  data?: Profile | null;
  form?: Profile | null;
  isLoading: boolean;
  error?: string | null;
  readonly: boolean;
}