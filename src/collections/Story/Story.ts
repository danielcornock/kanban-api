import { Schema } from 'mongoose';
import { AbstractModel } from '../abstracts/AbstractModel';
import { IStory } from './IStory';

export class Story extends AbstractModel<IStory> {
  constructor() {
    super();
    this._model = this._getModel(Story.name, this._createSchema());
  }

  protected _createSchema(): Schema<IStory> {
    return new Schema({
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
      },
      board: {
        type: Schema.Types.ObjectId,
        ref: 'Board'
      },
      column: String,
      title: String,
      content: String,
      number: Number
    });
  }
}
