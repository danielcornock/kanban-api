import { BaseRoutes } from '../../abstracts/baseRoutes';
import { ColumnController } from '../controller/columnController';

export class ColumnRouter extends BaseRoutes {
  constructor() {
    super(new ColumnController());
    this._assignRoutes();
  }

  protected _assignRoutes() {
    this.router.get('/', (...args) => this.controller.getAll(...args));
    this.router.post('/', (...args) => this.controller.create(...args));

    this.router.get('/:columnId', (...args) => this.controller.getOne(...args));
    this.router.put('/:columnId', (...args) => this.controller.update(...args));
    this.router.delete('/:columnId', (...args) =>
      this.controller.delete(...args)
    );
  }
}
