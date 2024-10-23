import { Employee } from './employee.entity';

describe('Employee unit test', () => {
  it('should throw error when name is empty', () => {
    expect(() => {
      let employee = new Employee({
        name: '',
        email: 'example@example.com',
        phone: '1234567',
        birth: new Date(),
        cni: '19931022M012F',
        nif: 'nif',
      });
    }).toThrow('Name is required');
  });

  it('should throw error when email is empty', () => {
    expect(() => {
      let employee = new Employee({
        name: 'name',
        email: '',
        phone: '1234567',
        birth: new Date(),
        cni: '19931022M012F',
        nif: 'nif',
      });
    }).toThrow('Email is required');
  });

  it(" should throw error when email isn't valid", () => {
    expect(() => {
      let employee = new Employee({
        name: 'name',
        email: 'email@.com',
        phone: 'phone',
        birth: new Date(),
        cni: '19931022M012F',
        nif: 'nif',
      });
    }).toThrow('Email is invalid');
  });

  it('should throw error when phone is empty', () => {
    expect(() => {
      let employee = new Employee({
        name: 'name',
        email: 'example@example.com',
        phone: '',
        birth: new Date(),
        cni: '19931022M012F',
        nif: 'nif',
      });
    }).toThrow('Phone is required');
  });

  it('should throw error when phone is too long', () => {
    expect(() => {
      let employee = new Employee({
        name: 'name',
        email: 'example@example.com',
        phone: '12345678',
        birth: new Date(),
        cni: '19931022M012F',
        nif: 'nif',
      });
    }).toThrow('Phone is too long');
  });

  it('should throw error when phone is invalid', () => {
    expect(() => {
      let employee = new Employee({
        name: 'name',
        email: 'example@example.com',
        phone: '123456n',
        birth: new Date(),
        cni: 'cni',
        nif: 'nif',
      });
    }).toThrow('Phone is invalid');
  });

  it('should throw error when birth is empty', () => {
    expect(() => {
      let employee = new Employee({
        name: 'name',
        email: 'example@example.com',
        phone: '1234567',
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
        email: 'example@example.com',
        phone: '1234567',
        birth: new Date(),
        cni: '',
        nif: 'nif',
      });
    }).toThrow('CNI is required');
  });

  it("should throw error when cni isn't valid", () => {
    expect(() => {
      let employee = new Employee({
        name: 'name',
        email: 'example@example.com',
        phone: '1234567',
        birth: new Date(),
        cni: '19931022C012F',
        nif: 'nif',
      });
    }).toThrow('CNI is invalid');
  });

  it('should throw error when nif is empty', () => {
    expect(() => {
      let employee = new Employee({
        name: 'name',
        email: 'example@example.com',
        phone: '1234567',
        birth: new Date(),
        cni: '19931022M012F',
        nif: '',
      });
    }).toThrow('NIF is required');
  });
});
