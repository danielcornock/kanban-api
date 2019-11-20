import { Router } from 'express';
import { IController } from '../../utilities/interfaces/IController';

export abstract class BaseRoutes {
  protected _router: Router;
  protected _controller: IController;

  constructor(controller: IController, name: string) {
    this._controller = controller;
    this._router = Router({ mergeParams: true });
    this._assignCrudRoutes(name);
  }

  public get routes(): Router {
    return this._router;
  }

  protected _assignCrudRoutes(name: string): void {
    this._router.get('/', (...args) => this._controller.getAll(...args));
    this._router.post('/', (...args) => this._controller.create(...args));

    this._router.get(`/${name}Id`, (...args) =>
      this._controller.getOne(...args)
    );
    this._router.put(`/${name}Id`, (...args) =>
      this._controller.update(...args)
    );
    this._router.delete(`/${name}Id`, (...args) =>
      this._controller.delete(...args)
    );
  }
}
