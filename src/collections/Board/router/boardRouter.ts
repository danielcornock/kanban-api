import { BaseRoutes } from '../../abstracts/baseRoutes';
import { IBoard } from '../model/boardSchema';
import { Boardcontroller } from '../controller/boardController';

export class BoardRouter extends BaseRoutes {
  constructor() {
    super(new Boardcontroller(), 'story');
  }
}
