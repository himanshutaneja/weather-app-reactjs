import axios, { AxiosRequestConfig } from 'axios';
import { URLS } from '../constants';

export const invokeAPI = async ({ url, params }: AxiosRequestConfig) =>
  await axios.get(`${URLS.BASE_URL}${url}`, {
    params: {
      ...params,
      units: 'metric',
      appid: process.env.REACT_APP_API_KEY,
    },
  });
