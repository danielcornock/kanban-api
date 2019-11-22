import express from 'express';
import cors from 'cors';
import { testingPort, env } from './env/env';
import morgan from 'morgan';

export class Middleware {
  constructor(app: express.Application) {
    this.globalSetup(app);
  }

  public globalSetup(app: express.Application): void {
    app.use(express.json());
    app.use(cors({ origin: testingPort }));

    if (env !== 'production') {
      app.use(morgan('dev'));
    }
  }
}
