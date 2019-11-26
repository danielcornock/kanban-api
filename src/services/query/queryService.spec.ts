import { expect } from 'chai';
import 'mocha';
import { QueryService } from './queryService';

describe('queryService', () => {
  const queryService = new QueryService('story');

  describe('when passing in a singule id to the function', () => {
    describe('when the id matches the native id', () => {
      const params = { storyId: '0000-0000' };

      it('should return a reformatted version to supply to the database query', () => {
        expect(queryService.buildParamQuery(params)).to.eql({
          _id: '0000-0000'
        });
      });
    });

    describe('when the id does not match the native id', () => {
      const params = { columnId: '0000-0000' };

      it('should return a reformatted version to supply to the database query', () => {
        expect(queryService.buildParamQuery(params)).to.eql({
          column: '0000-0000'
        });
      });
    });
  });

  describe('when passing in multiple parameters to the function', () => {
    describe('when one parameter matches the native id', () => {
      const params = {
        storyId: '1234-5678',
        boardId: '0000-0000'
      };

      it('should return a reformatted version to supply to the database query including the id', () => {
        expect(queryService.buildParamQuery(params)).to.eql({
          _id: '1234-5678',
          board: '0000-0000'
        });
      });
    });

    describe('when both parameters do not match the native ID', () => {
      const params = {
        columnId: '1234-5678',
        boardId: '0000-0000'
      };

      it('should return a reformatted version to supply to the database query including the id', () => {
        expect(queryService.buildParamQuery(params)).to.eql({
          column: '1234-5678',
          board: '0000-0000'
        });
      });
    });
  });
});
