import { Schema, Document } from 'mongoose';

export interface IStory extends Document {
  user: string;
  board: string;
  column: string;
  title: string;
  content: string;
  number: number;
}
