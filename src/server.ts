import express from 'express';
import { App } from './app';
import { port } from './config/env';

export class Server {
  constructor() {
    this._startServer(new App().instance);
  }

  private _startServer(instance: express.Application) {
    instance.listen(port, () => {
      console.log(`Server started on port ${port}.`);
    });
  }
}

new Server();
