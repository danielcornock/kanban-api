import { BaseEntity } from '../../abstracts/baseEntity';
import { IBoard, boardSchema } from './boardSchema';

export class Board extends BaseEntity<IBoard> {
  constructor() {
    super(boardSchema, Board.name);
  }
}
