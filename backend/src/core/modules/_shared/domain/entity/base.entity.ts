import Id from '../value-object/id.value-object';
import Notification from '../../notification/notification';

export default class BaseEntity {
  private _id: Id;
  private _createdAt: Date;

  private _updateAt: Date;

  public notification: Notification;

  constructor(id?: Id, createdAt?: Date, updateAt?: Date) {
    this._id = id || new Id();
    this._createdAt = createdAt || new Date();
    this._updateAt = updateAt || new Date();
    this.notification = new Notification();
  }

  get id(): Id {
    return this._id;
  }

  get createdAt(): Date {
    return this._createdAt;
  }

  get updateAt(): Date {
    return this._updateAt;
  }
}
