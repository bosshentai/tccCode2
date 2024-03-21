import { mockServices } from '@/utils/mockAdapter';

const discounts = [];

mockServices.onGet('/discounts').reply(200, discounts);
