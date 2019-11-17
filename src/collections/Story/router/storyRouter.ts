import { BaseRoutes } from '../../abstracts/baseRoutes';
import { StoryController } from '../controller/storyController';

export class StoryRouter extends BaseRoutes {
  constructor() {
    super(new StoryController());
    this._assignRoutes();
  }

  protected _assignRoutes() {
    this.router.get('/', (...args) => this.controller.getAllStories(...args));
  }
}
