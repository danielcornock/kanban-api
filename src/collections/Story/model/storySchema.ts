import { Schema } from 'mongoose';
import { Document } from 'mongoose';

export const storySchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    board: {
      type: Schema.Types.ObjectId,
      ref: 'Board'
    },
    column: {
      type: Schema.Types.ObjectId,
      ref: 'Column'
    },
    title: String,
    content: String,
    number: Number
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

export interface IStory extends Document {
  user: string;
  board: string;
  column: string;
  title: string;
  content: string;
  number: number;
}
