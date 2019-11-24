import { BaseRoutes } from './baseRoutes';
import { IController } from '../../utilities/interfaces/IController';

export class CrudRoutes extends BaseRoutes<IController> {
  constructor(controller: IController, name: string) {
    super(controller);
    this._assignCrudRoutes(name);
  }

  protected _assignCrudRoutes(name: string): void {
    this._router.get('/', (...args) => this._controller.getAll(...args));
    this._router.post('/', (...args) => this._controller.create(...args));

    this._router.get(`/:${name}Id`, (...args) =>
      this._controller.getOne(...args)
    );
    this._router.put(`/:${name}Id`, (...args) =>
      this._controller.update(...args)
    );
    this._router.delete(`/:${name}Id`, (...args) =>
      this._controller.delete(...args)
    );
  }
}
