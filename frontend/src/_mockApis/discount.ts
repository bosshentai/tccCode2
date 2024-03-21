import { mockServices } from '@/utils/mockAdapter';

const discounts = [
  {
    name: 'Jovem',
    description: 'Desconto para jovens entre 16 a 24 anos',
    value: '500',
  },
  {
    name: 'Adulto',
    description: 'Desconto para adultos entre 25 a 64 anos',
    value: '1000',
  },
  {
    name: 'Idoso',
    description: 'Desconto para idosos entre 65 e mais',
    value: '1500',
  },
];

mockServices.onGet('/discounts').reply(200, discounts);
