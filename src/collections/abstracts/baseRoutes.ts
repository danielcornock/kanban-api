import { Router } from 'express';
import { IController } from '../../utilities/interfaces/IController';

export abstract class BaseRoutes {
  protected router: Router;
  protected controller: IController;

  constructor(controller: IController) {
    this.controller = controller;
    this.router = Router({ mergeParams: true });
  }

  protected abstract _assignRoutes(): void;

  public get routes(): Router {
    return this.router;
  }
}
