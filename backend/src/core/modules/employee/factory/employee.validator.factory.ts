import ValidatorInterface from '../../_shared/validator/validator.interface';
import { Employee } from '../domain/employee.entity';
import EmployeeZodValidator from '../validator/employee.zod.validator';

export default class EmployeeValidatorFactory {
  static create(): ValidatorInterface<Employee> {
    return new EmployeeZodValidator();
  }
}
