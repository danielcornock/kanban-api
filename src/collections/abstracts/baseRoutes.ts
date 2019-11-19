import { Router } from 'express';
import { IController } from '../../utilities/interfaces/IController';

export abstract class BaseRoutes {
  protected router: Router;
  protected controller: IController;
  protected abstract _assignRoutes(): void;

  constructor(controller: IController) {
    this.controller = controller;
    this.router = Router({ mergeParams: true });
  }

  public get routes() {
    return this.router;
  }
}
