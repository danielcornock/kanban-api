import { BaseEntity } from '../../abstracts/baseEntity';
import { IColumn } from '../model/columnSchema';
import { Schema, Query } from 'mongoose';
import { columnSchema } from './columnSchema';
import { IBoard } from '../../Board/model/boardSchema';
import { Board } from '../../Board/model/boardEntity';
import { DatabaseService } from '../../../services/database/databaseService';

export class Column extends BaseEntity<IColumn> {
  constructor() {
    super(columnSchema, Column.name);
    this._createModelConfig(columnSchema);
  }

  private _createModelConfig(schema: Schema) {
    const boardDb = new DatabaseService<IBoard>(new Board().model);

    schema.virtual('stories', {
      ref: 'Story',
      foreignField: 'column',
      localField: '_id'
    });

    schema.pre(/^find/ as any, function(this: Query<IColumn>) {
      this.populate('stories');
    });
  }
}
