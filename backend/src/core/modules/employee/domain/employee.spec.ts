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

  it('should throw error when email is empty', () => {
    expect(() => {
      let employee = new Employee({
        name: 'name',
        email: '',
        phone: 'phone',
        birth: new Date(),
        cni: 'cni',
        nif: 'nif',
      });
    }).toThrow('Email is required');
  });

  it('should throw error when phone is empty', () => {
    expect(() => {
      let employee = new Employee({
        name: 'name',
        email: 'email',
        phone: '',
        birth: new Date(),
        cni: 'cni',
        nif: 'nif',
      });
    }).toThrow('Phone is required');
  });

  it('should throw error when birth is empty', () => {
    expect(() => {
      let employee = new Employee({
        name: 'name',
        email: 'email',
        phone: 'phone',
        birth: new Date(''),
        cni: 'cni',
        nif: 'nif',
      });
    }).toThrow('Birth is required');
  });

  it('should throw error when cni is empty', () => {
    expect(() => {
      let employee = new Employee({
        name: 'name',
        email: 'email',
        phone: 'phone',
        birth: new Date(),
        cni: '',
        nif: 'nif',
      });
    }).toThrow('CNI is required');
  });

  it('should throw error when nif is empty', () => {
    expect(() => {
      let employee = new Employee({
        name: 'name',
        email: 'email',
        phone: 'phone',
        birth: new Date(),
        cni: 'cni',
        nif: '',
      });
    }).toThrow('NIF is required');
  });
});
