import { Router } from 'express';

export abstract class BaseRoutes {
  protected router: Router;
  protected controller: any;
  protected abstract _assignRoutes(): void;

  constructor(controller: any) {
    this.controller = controller;
    this.router = Router({ mergeParams: true });
  }

  public get routes() {
    return this.router;
  }
}
