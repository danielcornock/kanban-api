import { BaseRoutes } from '../../abstracts/baseRoutes';
import { StoryController } from '../controller/storyController';
import { IController } from '../../../utilities/interfaces/IController';

export class StoryRouter extends BaseRoutes<IController> {
  constructor() {
    super(new StoryController());
  }
}
