import AxiosMockAdapter from 'axios-mock-adapter';
import axios from 'axios';

export const mockServices = new AxiosMockAdapter(axios, {
  delayResponse: 1000,
});
