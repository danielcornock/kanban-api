import { BaseRoutes } from '../../abstracts/baseRoutes';
import { StoryController } from '../controller/storyController';

export class StoryRouter extends BaseRoutes {
  constructor() {
    super(new StoryController());
    this._assignRoutes();
  }

  protected _assignRoutes() {
    this.router.get('/', (...args) => this.controller.getAll(...args));
    this.router.post('/', (...args) => this.controller.create(...args));

    this.router.get('/:storyId', (...args) => this.controller.getOne(...args));
    this.router.put('/:storyId', (...args) => this.controller.update(...args));
    this.router.delete('/:storyId', (...args) =>
      this.controller.delete(...args)
    );
  }
}
