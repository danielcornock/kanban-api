import { IController } from '../../../utilities/interfaces/IController';
import { Story } from '../model/storyEntity';
import { IStory } from '../model/storySchema';
import { BaseController } from '../../abstracts/baseController';
import { StoryValidation } from '../validation/storyValidation';
import { ResponseService } from '../../../services/response/responseService';
import { QueryService } from '../../../services/query/queryService';
import { DatabaseService } from '../../../services/database/databaseService';

export class StoryController extends BaseController<IStory, Story>
  implements IController {
  constructor(...args: any) {
    super(...args);
  }
}

export function storyDependencies(): Array<any> {
  const names = {
    singular: 'story',
    plural: 'stories'
  };
  const entity = new Story();
  return [
    entity,
    new StoryValidation(),
    new ResponseService(),
    new QueryService(names.singular),
    new DatabaseService<IStory>(entity.model),
    names
  ];
}
