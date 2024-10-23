import ValidatorInterface from '../../_shared/validator/validator.interface';
import { Employee } from '../domain/employee.entity';
import { z } from 'zod';

export default class EmployeeZodValidator
  implements ValidatorInterface<Employee>
{
  /**
   * @description Validate an Employee entity using zod.
   * @param entity Employee entity to be validated.
   * @throws If the entity is invalid.
   */

  validate(entity: Employee): void {
    try {
      const schema = z
        .object({
          name: z.string().min(1, 'Name is required').trim(),
          email: z
            .string()
            .min(1, 'Email is required')
            .email('Email is invalid')
            .trim(),
          phone: z
            .string()
            .min(1, 'Phone is required')
            .max(7, 'Phone is too long')
            .trim()
            .regex(/^[0-9]+$/, 'Phone is invalid'),
          birth: z.coerce.date({
            errorMap: ({ code }, { defaultError }) => {
              if (code === 'invalid_date')
                return { message: 'Birth is required' };
              return { message: defaultError };
            },
          }),
          cni: z
            .string()
            .min(13, 'CNI is required')
            .trim()
            .superRefine((cni, ctx) => {
              if (cni.length === 13) {
                const formattedDate = `${cni.slice(0, 4)}-${cni.slice(4, 6)}-${cni.slice(6, 8)}`;
                const isDate = new Date(formattedDate);

                if (isNaN(isDate.getTime())) {
                  ctx.addIssue({
                    code: 'invalid_date',
                    message: 'CNI is invalid',
                    fatal: true,
                  });

                  return z.NEVER;
                }

                const isSex = this.validSex(cni.slice(8, 9));

                if (!isSex) {
                  ctx.addIssue({
                    code: 'custom',
                    message: 'CNI is invalid',
                  });
                }
                const isNumber = this.valid3Number(cni.slice(9, 12));

                if (!isNumber) {
                  ctx.addIssue({
                    code: 'custom',
                    message: 'CNI is invalid',
                  });
                  return z.NEVER;
                }
                const isValidChar = this.validCharacter(cni.slice(12, 13));

                if (!isValidChar) {
                  ctx.addIssue({
                    code: 'custom',
                    message: 'CNI is invalid',
                  });
                  return z.NEVER;
                }
                // let isDateValid = z.date(new Date(cni.slice(0, 8)));
              }
            }),
          nif: z
            .string()
            .min(9, 'NIF is required')
            .trim()
            .regex(/^[0-9]+$/, 'NIF is invalid'),
        })
        .strict();
      schema.parse(entity, {
        async: false,
      });
    } catch (errors) {
      const zodError = errors as z.ZodError;

      zodError.errors.forEach((error) => {
        entity.notification.addError({
          context: 'employee',
          message: error.message,
        });
      });
    }
  }

  /**
   * @description Validates if the given sex is valid (M or F).
   * @param {string} sex
   * @returns {boolean}
   * @private
   */
  private validSex(sex: string): boolean {
    if (sex === 'M' || sex === 'F') {
      return true;
    } else {
      return false;
    }
  }

  /**
   *
   * @description Checks if the number is 3 digits
   * @param number : string
   * @returns {boolean}
   *
   * @example The number should be 3 digits
   *  valid3Number('123');
   *   Returns   true
   *
   *
   * @example The number should is not 3 digits
   * valid3Number('12A');
   * Returns false
   *
   */
  private valid3Number(number: string): boolean {
    if (number.length === 3) {
      let regex = /[0-9]{3}/;

      if (!regex.test(number)) {
        return false;
      }

      return true;
    }

    return false;
  }

  /**
   * @description Checks if the character is a upper case
   * @param character: string
   * @returns {boolean}
   * @private
   */
  private validCharacter = (character: string): boolean => {
    let regex = /[A-Z]{1}/;

    return regex.test(character);
  };
}
