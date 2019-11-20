import { BaseEntity } from '../../abstracts/baseEntity';
import { IColumn } from '../model/columnSchema';
import { Schema, Query } from 'mongoose';
import { columnSchema } from './columnSchema';

export class Column extends BaseEntity<IColumn> {
  constructor() {
    super(columnSchema, Column.name);
    this._createModelConfig(columnSchema);
  }

  private _createModelConfig(columnSchema: Schema) {
    columnSchema.virtual('stories', {
      ref: 'Story',
      foreignField: 'column',
      localField: '_id'
    });

    columnSchema.pre(/^find/ as any, function(this: Query<IColumn>) {
      this.populate('stories');
    });
  }
}
