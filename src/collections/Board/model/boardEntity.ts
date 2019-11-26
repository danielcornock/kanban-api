import { BaseEntity } from '../../abstracts/baseEntity';
import { IBoard, boardSchema } from './boardSchema';
import { Schema, Query } from 'mongoose';

export class Board extends BaseEntity<IBoard> {
  constructor() {
    super(boardSchema, Board.name);
    this._createModelConfig(boardSchema);
  }

  private _createModelConfig(schema: Schema) {
    schema.virtual('columns', {
      ref: 'Column',
      foreignField: 'board',
      localField: '_id'
    });

    schema.pre('findOne', function(this: Query<IBoard>) {
      this.populate('columns');
    });
  }
}
