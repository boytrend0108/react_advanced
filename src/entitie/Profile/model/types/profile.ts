import { Country, Currency } from "shared/const/common";

export interface Profile {
  name?: string,
  surname?: string,
  currency?: Currency,
  country?: Country,
  city?: string,
  age?: number,
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