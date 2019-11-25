import { Schema } from 'mongoose';
import { Document } from 'mongoose';

export const columnSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    board: {
      type: Schema.Types.ObjectId,
      ref: 'Board'
    },
    title: String,
    order: Number
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);

export interface IColumn extends Document {
  user: string;
  board: string;
  title: string;
}
