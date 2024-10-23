import BaseEntity from '../../_shared/domain/entity/base.entity';
import Id from '../../_shared/domain/value-object/id.value-object';
import { NotificationError } from '../../_shared/notification/notification.error';
import EmployeeValidatorFactory from '../factory/employee.validator.factory';

type EmployeeProps = {
  id?: Id;
  name: string;
  email: string;
  phone: string;
  birth: Date;
  nif: string;
  cni: string;
  createdAt?: Date;
  updateAt?: Date;
};

export class Employee extends BaseEntity {
  private _name: string;
  private _email: string;
  private _phone: string;
  private _birth: Date;

  private _cni: string;

  private _nif: string;

  constructor(props: EmployeeProps) {
    super(props.id, props.createdAt, props.updateAt);
    this._name = props.name;
    this._email = props.email;
    this._phone = props.phone;
    this._birth = props.birth;
    this._cni = props.cni;
    this._nif = props.nif;

    this.validate();

    if (this.notification.hasErrors()) {
      throw new NotificationError(this.notification.getErrors());
    }
  }

  private validate() {
    EmployeeValidatorFactory.create().validate(this);
    // if (this._name.trim().length === 0) {
    //   throw new Error('Name is required');
    // }

    // if (this._email.trim().length === 0) {
    //   throw new Error('Email is required');
    // }

    // if (this._phone.trim().length === 0) {
    //   throw new Error('Phone is required');
    // }

    // if (this._cni.trim().length === 0) {
    //   throw new Error('CNI is required');
    // }

    // if (this._nif.trim().length === 0) {
    //   throw new Error('NIF is required');
    // }

    // if (!this._birth || isNaN(this.birth.getTime())) {
    //   throw new Error('Birth is required');
    // }

    // return true;
  }

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  get phone(): string {
    return this._phone;
  }

  get birth(): Date {
    return this._birth;
  }

  get cni(): string {
    return this._cni;
  }
  get nif(): string {
    return this._nif;
  }
}
