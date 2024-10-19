import ValueObject from './value-object.interface';
import { v7 as uuid } from 'uuid';

export default class Id implements ValueObject {
  private _id: string;

  constructor(id?: string) {
    this._id = id || uuid();
  }

  get id(): string {
    return this._id;
  }
}
