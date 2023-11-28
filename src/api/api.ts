import axios, {AxiosInstance} from 'axios';
import {BACKEND_URL, REQUEST_TIMEOUT} from '../const';


export const createApi = (): AxiosInstance => axios.create({
  baseURL: BACKEND_URL,
  timeout: REQUEST_TIMEOUT
});
