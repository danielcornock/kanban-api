import express from 'express';
import { StoryRouter } from './Story/router/storyRouter';
import { ColumnRouter } from './Column/router/columnRouter';
import { BoardRouter } from './Board/router/boardRouter';
import { IParams } from '../utilities/interfaces/IParams';
import { CrudRoutes } from './abstracts/crudRoutes';
import { StoryController } from './Story/controller/storyController';
import { ColumnController } from './Column/controller/columnController';
import { Boardcontroller } from './Board/controller/boardController';

export class Router {
  private _routes: IParams = {
    Story: ['stories', 'story'],
    Column: ['columns', 'column'],
    Board: ['boards', 'board']
  };
  constructor(app: express.Application) {
    this._initialiseExtendedRoutes(app);
    this._initialiseCrudRoutes(app);
  }

  private _initialiseCrudRoutes(app: express.Application): void {
    app.use(
      '/api/v1/stories',
      new CrudRoutes(new StoryController(), 'story').routes
    );
    app.use(
      '/api/v1/columns',
      new CrudRoutes(new ColumnController(), 'column').routes
    );
    app.use(
      '/api/v1/boards',
      new CrudRoutes(new Boardcontroller(), 'board').routes
    );
  }

  private _initialiseExtendedRoutes(app: express.Application): void {
    app.use('/api/v1/stories', new StoryRouter().routes);
    app.use('/api/v1/columns', new ColumnRouter().routes);
    app.use('/api/v1/boards', new BoardRouter().routes);
  }
}
