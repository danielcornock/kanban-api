import { Schema } from 'mongoose';
import { BaseEntity } from '../../abstracts/baseEntity';
import { IStory } from '../model/storySchema';
import { storySchema } from './storySchema';
import { DatabaseService } from '../../../services/database/databaseService';
import { IBoard } from '../../Board/model/boardSchema';
import { Board } from '../../Board/model/boardEntity';

export class Story extends BaseEntity<IStory> {
  constructor() {
    super(storySchema, Story.name);
    this._schemaConfig(storySchema);
  }

  private _schemaConfig(schema: Schema): void {
    const boardDb = new DatabaseService<IBoard>(new Board().model);

    schema.pre('save', async function(this: IStory, next) {
      const board: IBoard = await boardDb.findOne('', {
        _id: this.board
      });

      this.number = board.storyAccum;

      board.storyAccum++;
      boardDb.update('', board._id, board as IBoard);

      next();
    });
  }
}
