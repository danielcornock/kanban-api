import { expect } from 'chai';
import 'mocha';

import { Story } from './storyModel';

describe('on initialisation', () => {
  const story = new Story();

  it('should create the model', () => {
    expect(story.model).not.to.be.null;
  });
});
