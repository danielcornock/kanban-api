import { BaseEntity } from '../../abstracts/baseEntity';
import { IColumn } from '../interfaces/IColumn';
import { Schema } from 'mongoose';
import { columnSchema } from './columnSchema';

export class Column extends BaseEntity<IColumn> {
  constructor() {
    super(columnSchema, Column.name);
    this._createModelConfig(columnSchema);
  }

  protected _createModelConfig(columnSchema: Schema) {
    columnSchema.virtual('stories', {
      ref: 'Story',
      foreignField: 'column',
      localField: '_id'
    });
  }
}
