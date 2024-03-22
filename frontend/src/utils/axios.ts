import axios from 'axios';

export const axiosServices = axios.create();

axiosServices.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject((error.response && error.response.data) || 'wrong Services'),
);
