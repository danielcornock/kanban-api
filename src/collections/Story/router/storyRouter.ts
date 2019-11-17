import { BaseRoutes } from '../../abstracts/baseRoutes';
import { StoryController } from '../controller/storyController';

export class StoryRouter extends BaseRoutes {
  constructor() {
    super(new StoryController());
    this._assignRoutes();
  }

  protected _assignRoutes() {
    this.router.get('/', (...args) => this.controller.getAllStories(...args));
    this.router.post('/', (...args) => this.controller.createStory(...args));

    this.router.get('/:storyId', (...args) =>
      this.controller.getStory(...args)
    );
    this.router.put('/:storyId', (...args) =>
      this.controller.updateStory(...args)
    );
    this.router.delete('/:storyId', (...args) =>
      this.controller.deleteStory(...args)
    );
  }
}
