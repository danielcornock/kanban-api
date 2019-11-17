import express from 'express';
import { Story } from './collections/Story/Story';

export class App {
  private _instance: express.Application;

  constructor() {
    this._instance = express();
  }

  public get instance(): express.Application {
    return this._instance;
  }
}
