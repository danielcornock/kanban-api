import { IStory } from '../interfaces/IStory';
import { isGuid, exists } from '../../../services/validation/validationService';

export class StoryValidation {
  constructor() {}

  public validate(story: IStory): void {
    if (!exists(story.user)) throw new Error('Invalid user ID');
    if (!exists(story.title)) throw new Error('A story must have a title');
    if (!exists(story.board))
      throw new Error('A story needs to be assigned to a board');

    if (!isGuid(story.user)) throw new Error('That is not a valid GUID');
    if (!isGuid(story.board)) throw new Error('That is not a valid GUID');
  }
}
