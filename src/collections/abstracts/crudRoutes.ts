import { IController } from '../../utilities/interfaces/IController';
import { Router } from 'express';

export class CrudRoutes {
  private _router: Router;
  private _controller: IController;

  constructor(controller: IController, router: Router, name: string) {
    this._controller = controller;
    this._router = router;
    this._assignCrudRoutes(name);
  }

  private _assignCrudRoutes(name: string): void {
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

  public get routes(): Router {
    return this._router;
  }
}
