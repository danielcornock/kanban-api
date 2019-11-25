import { Document, Schema } from 'mongoose';

export interface IBoard extends Document {
  user: string;
  name: string;
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
      default: 1
    }
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);
