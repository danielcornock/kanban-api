import { IController } from '../../../utilities/interfaces/IController';
import { Story } from '../model/storyEntity';
import { IStory } from '../interfaces/IStory';
import { BaseController } from '../../abstracts/baseController';
import { StoryValidation } from '../validation/storyValidation';

export class StoryController extends BaseController<IStory, Story>
  implements IController {
  constructor() {
    super(new Story(), new StoryValidation(), {
      plural: 'stories',
      singular: 'story'
    });
  }
}
