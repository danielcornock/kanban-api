import { Schema } from 'mongoose';

export const columnSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    board: {
      type: Schema.Types.ObjectId,
      ref: 'User'
    },
    title: String,
    order: Number
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
  }
);
