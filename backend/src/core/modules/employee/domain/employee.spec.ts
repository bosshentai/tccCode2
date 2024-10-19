import { Employee } from './employee.entity';

describe('Employee unit test', () => {
  it('should throw error when name is empty', () => {
    expect(() => {
      let employee = new Employee({
        name: '',
        email: 'email',
        phone: 'phone',
        birth: new Date(),
        cni: 'cni',
        nif: 'nif',
      });
    }).toThrow('Name is required');
  });
});
