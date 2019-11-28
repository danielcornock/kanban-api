import { BaseRoutes } from '../../abstracts/baseRoutes';
import { ColumnController } from '../controller/columnController';
import { IController } from '../../../utilities/interfaces/IController';
import { CrudRoutes } from '../../abstracts/crudRoutes';

export class ColumnRouter extends BaseRoutes<IController> {
  constructor() {
    super(new ColumnController());
    this._router = new CrudRoutes(
      this._controller,
      this._router,
      'column'
    ).routes;
  }
}
