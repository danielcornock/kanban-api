import { Document, Schema } from 'mongoose';

export interface IBoard extends Document {
  user: string;
  name: string;
  columns: Array<{ order: number; column: string }>;
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
        type: Schema.Types.ObjectId,
        ref: 'Column'
      }
    ]
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);
