import { expect } from 'chai';
import 'mocha';
import { StoryValidation } from './storyValidation';
import { IStory } from '../model/storySchema';

describe('storyValidation', () => {
  const validator = new StoryValidation();

  describe('when an story without a title is passed in to the function', () => {
    const invalidStory = {
      user: '5dbcacecaae9c97a5bcf6e80',
      board: '5d758f8362d9a7bc8117de2d'
    };

    it('should throw an error', () => {
      expect(() => validator.validate(invalidStory as IStory)).to.throw();
    });
  });

  describe('when an story with an invalid user GUID is passed in to the function', () => {
    const invalidStory = {
      user: '0000',
      board: '5d758f8362d9a7bc8117de2d',
      title: 'Test Title'
    };

    it('should throw an error', () => {
      expect(() => validator.validate(invalidStory as IStory)).to.throw();
    });
  });

  describe('when an story with an invalid board GUID is passed in to the function', () => {
    const invalidStory = {
      user: '5dbcacecaae9c97a5bcf6e80',
      board: '0000',
      title: 'Test Title'
    };

    it('should throw an error', () => {
      expect(() => validator.validate(invalidStory as IStory)).to.throw();
    });
  });

  describe('when a story with no user or board GUID is passed in to the function', () => {
    const invalidStory = {
      title: 'Test Title'
    };

    it('should throw an error', () => {
      expect(() => validator.validate(invalidStory as IStory)).to.throw();
    });
  });

  describe('when a valid story is passed in to the function', () => {
    const validStory = {
      user: '5dbcacecaae9c97a5bcf6e80',
      board: '5d758f8362d9a7bc8117de2d',
      title: 'Test Title'
    };

    it('should not throw an error', () => {
      expect(() => validator.validate(validStory as IStory)).to.not.throw();
    });
  });
});
