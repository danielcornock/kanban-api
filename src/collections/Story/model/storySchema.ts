import { Schema } from 'mongoose';

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
