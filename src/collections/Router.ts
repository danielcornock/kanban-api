import express from 'express';
import { StoryRouter } from './Story/router/storyRouter';
import { ColumnRouter } from './Column/router/columnRouter';
import { BoardRouter } from './Board/router/boardRouter';

export class Router {
  constructor(app: express.Application) {
    this._initialiseRoutes(app);
  }

  private _initialiseRoutes(app: express.Application) {
    app.use('/api/v1/stories', new StoryRouter().routes);
    app.use('/api/v1/columns', new ColumnRouter().routes);
    app.use('/api/v1/boards', new BoardRouter().routes);
  }
}
