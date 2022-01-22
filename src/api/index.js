/* eslint-disable prettier/prettier */
import axios from 'axios';
const API_URL = 'https://610a34de52d56400176afc50.mockapi.io/api/v1/';
const config = {};
const instance = axios.create({
  baseURL: API_URL,
  timeout: 1000,
  headers: config,
});
export default instance;
