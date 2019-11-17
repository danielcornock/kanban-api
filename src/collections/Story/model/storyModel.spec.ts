import { expect } from 'chai';
import 'mocha';

import { Story } from './storyModel';

describe('storyModel', () => {
  const story = new Story();

  it('should create the model', () => {
    expect(story.model).not.to.be.null;
  });
});
