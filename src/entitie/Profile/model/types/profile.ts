import { Country } from "entitie/Country";
import { Currency } from "entitie/Currency";

export enum ValidateProfileError {
  INCORRECT_USER_DATA = 'INCORRECT_USER_DATA',
  INCORRECT_AGE = 'INCORRECT_AGE',
  INCORRECT_COUNTRY = 'INCORRECT_COUNTRY',
  NO_DATA = 'NO_DATA',
  SERVER_ERROR = 'SERVER_ERROR',
}

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
  validateErrors?: ValidateProfileError[];
}