import BaseEntity from '../../_shared/domain/entity/base.entity';
import Id from '../../_shared/domain/value-object/id.value-object';

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
}
