import { BaseEntity } from '../../abstracts/baseEntity';
import { IColumn } from '../interfaces/IColumn';
import { Schema } from 'mongoose';

export class Column extends BaseEntity<IColumn> {
  constructor() {
    super();
    this._model = this._getModel(Column.name, this._createSchema);
  }

  protected _createSchema(): Schema<IColumn> {
    return new Schema({
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      board: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      title: String,
      order: Number
    });
  }
}
