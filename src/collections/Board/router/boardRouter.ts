import { BaseRoutes } from '../../abstracts/baseRoutes';
import { IBoard } from '../model/boardSchema';
import { Boardcontroller } from '../controller/boardController';
import { IBoardController } from '../controller/IBoardController';

export class BoardRouter extends BaseRoutes<IBoardController> {
  constructor() {
    super(new Boardcontroller());
    this._extendedRoutes();
  }

  private _extendedRoutes(): void {
    this._router.get('/list', (...args) => this._controller.getList(...args));
  }
}
