import { BaseRoutes } from '../../abstracts/baseRoutes';
import { StoryController } from '../controller/storyController';
import { IController } from '../../../utilities/interfaces/IController';
import { CrudRoutes } from '../../abstracts/crudRoutes';

export class StoryRouter extends BaseRoutes<IController> {
  constructor() {
    super(new StoryController());
    this._router = new CrudRoutes(
      this._controller,
      this._router,
      'story'
    ).routes;
  }
}
