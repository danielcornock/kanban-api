import { expect } from 'chai';
import 'mocha';

import { StoryRouter } from './storyRouter';

describe('on initialisation', () => {
  const storyRouter = new StoryRouter();

  it('should assign the routes', () => {
    expect(storyRouter.routes).not.to.be.null;
  });
});
