import { BaseRoutes } from '../../abstracts/baseRoutes';
import { IBoard } from '../model/boardSchema';
import {
  BoardController,
  boardDependencies
} from '../controller/boardController';
import { IBoardController } from '../controller/IBoardController';
import { ColumnRouter } from '../../Column/router/columnRouter';
import { CrudRoutes } from '../../abstracts/crudRoutes';

export class BoardRouter extends BaseRoutes<IBoardController> {
  constructor() {
    super(new BoardController(...boardDependencies()));
    this._extendedRoutes();
    this._externalRoutes();
    this._router = new CrudRoutes(
      this._controller,
      this._router,
      'board'
    ).routes;
  }

  private _extendedRoutes(): void {
    this._router.get('/list', (...args) => this._controller.getList(...args));
  }

  private _externalRoutes(): void {
    this._router.use('/:boardId/columns', new ColumnRouter().routes);
  }
}
