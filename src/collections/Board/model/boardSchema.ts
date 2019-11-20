import { Document, Schema } from 'mongoose';

export interface IBoard extends Document {
  user: string;
  name: string;
  column: { order: number; column: string };
  storyAccum: number;
}

export const boardSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'user'
    },
    name: String,
    storyAccum: {
      type: Number,
      default: 0
    },
    columns: [
      {
        order: Number,
        column: {
          type: Schema.Types.ObjectId,
          ref: 'Column'
        }
      }
    ]
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);
