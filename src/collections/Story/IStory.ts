import { Schema, Document } from 'mongoose';

export interface IStory extends Document {
  user: Schema.Types.ObjectId;
  board: Schema.Types.ObjectId;
  column: string;
  title: string;
  content: string;
  number: number;
}
