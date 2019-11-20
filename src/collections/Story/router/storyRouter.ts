import { BaseRoutes } from '../../abstracts/baseRoutes';
import { StoryController } from '../controller/storyController';

export class StoryRouter extends BaseRoutes {
  constructor() {
    super(new StoryController(), 'story');
  }
}
