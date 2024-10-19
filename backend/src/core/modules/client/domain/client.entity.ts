import BaseEntity from '../../_shared/domain/entity/base.entity';
import Id from '../../_shared/domain/value-object/id.value-object';

type ClientProps = {
  id?: Id;
  name: string;
  email: string;
  phone: string;
  birth: Date;
  createdAt?: Date;
  updateAt?: Date;
};

export default class Client extends BaseEntity {
  private _name;

  private _email;
  private _phone;
  private _birth;

  constructor(props: ClientProps) {
    super(props.id, props.createdAt, props.updateAt);
    this._name = props.name;
    this._email = props.email;
    this._phone = props.phone;
    this._birth = props.birth;
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
