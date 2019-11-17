import express from 'express';
import { Router } from './collections/Router';
import { Middleware } from './config/appMiddleware';

export class App {
  private _instance: express.Application;

  constructor() {
    this._instance = express();
    new Middleware(this._instance);
    new Router(this._instance);
  }

  public get instance(): express.Application {
    return this._instance;
  }
}
