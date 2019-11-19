import { expect } from 'chai';
import 'mocha';
import { QueryService } from './queryService';

describe('queryService', () => {
  const queryService = new QueryService();

  describe('when passing in storyId to the function', () => {
    const params = { storyId: '0000-0000' };

    it('should return a reformatted version to supply to the database query', () => {
      expect(queryService.buildParamQuery(params)).to.eql({
        story: '0000-0000'
      });
    });
  });

  describe('when passing in multiple parameters to the function', () => {
    const params = {
      storyId: '1234-5678',
      boardId: '0000-0000'
    };

    it('should return a reformatted version to supply to the database query', () => {
      expect(queryService.buildParamQuery(params)).to.eql({
        story: '1234-5678',
        board: '0000-0000'
      });
    });
  });
});
