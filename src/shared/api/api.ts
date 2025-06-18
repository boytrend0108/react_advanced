import axios from 'axios';
import { USER_LOCAL_STORAGE_KEY } from 'shared/const/localStorage';

// const baseURL = __IS_DEV__ ? "http://localhost:8000" : "https://api.example.com"; // 1 variant for development and production

export const $api = axios.create({
  baseURL: __API__,
  headers: {
    Authorization: localStorage.getItem(USER_LOCAL_STORAGE_KEY),
  }
});
