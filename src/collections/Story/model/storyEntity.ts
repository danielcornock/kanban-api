import { Schema } from 'mongoose';
import { BaseEntity } from '../../abstracts/baseEntity';
import { IStory } from '../interfaces/IStory';
import { StoryValidation } from '../validation/storyValidation';
import { storySchema } from './storySchema';

export class Story extends BaseEntity<IStory> {
  constructor() {
    super(storySchema, Story.name);
  }
}
