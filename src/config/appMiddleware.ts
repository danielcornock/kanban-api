import express from 'express';

export class Middleware {
  constructor(app: express.Application) {
    this.globalSetup(app);
  }

  public globalSetup(app: express.Application): void {
    app.use(express.json());
  }
}
