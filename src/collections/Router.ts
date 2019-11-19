import express from 'express';
import { StoryRouter } from './Story/router/storyRouter';

export class Router {
  constructor(app: express.Application) {
    this._initialiseRoutes(app);
  }

  private _initialiseRoutes(app: express.Application) {
    app.use('/api/v1/stories', new StoryRouter().routes);
  }
}
