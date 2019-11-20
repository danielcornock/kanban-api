import { Document } from 'mongoose';

export interface IColumn extends Document {
  user: string;
  board: string;
  title: string;
  order: number;
}
