import { Schema } from 'mongoose';
import { BaseModel } from '../../abstracts/baseModel';
import { IStory } from '../interfaces/IStory';
import { StoryValidation } from '../validation/storyValidation';

export class Story extends BaseModel<IStory> {
  constructor() {
    super();
    this._validation = new StoryValidation().validate;
    this._model = this._getModel(Story.name, this._createSchema);
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
