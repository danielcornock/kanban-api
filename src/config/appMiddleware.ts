import express from 'express';

export class Middleware {
  constructor(app: express.Application) {
    this.globalSetup(app);
  }

  public globalSetup(app: any): void {
    app.use(express.json());
  }
}
