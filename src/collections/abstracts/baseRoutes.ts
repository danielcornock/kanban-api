import { Router } from 'express';
import { IController } from '../../utilities/interfaces/IController';

export abstract class BaseRoutes<C extends IController> {
  protected _router: Router;
  protected _controller: C;

  constructor(controller: C) {
    this._controller = controller;
    this._router = Router({ mergeParams: true });
  }

  public get routes(): Router {
    return this._router;
  }
}
