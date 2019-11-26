import { expect } from 'chai';
import 'mocha';
import { StoryController } from './storyController';
import sinon from 'sinon';
import {
  IReq,
  IRes,
  INext
} from '../../../utilities/interfaces/IMiddlewareParams';
import { Story } from '../model/storyEntity';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import { mockResponse, mockRequest } from 'mock-req-res';
import { QueryService } from '../../../services/query/queryService';

chai.use(sinonChai);

describe('storyController', () => {
  let res: any = mockResponse(),
    req: IReq = mockRequest(),
    next: INext = sinon.spy(),
    controller: StoryController = new StoryController();

  describe('when requesting for all stories', () => {
    sinon.spy(controller['_queryService'], 'buildParamQuery');
    sinon.spy(controller['_modelDb'], 'findMany');

    beforeEach(() => {
      req.body = {
        user: '0000'
      };
      req.params = { storyId: '0000' };
      controller.getAll(req, res, next);
    });

    it('should build the parameter query', () => {
      expect(
        controller['_queryService'].buildParamQuery
      ).to.have.been.calledWith(req.params);
    });

    it('should make a call to the database service', () => {
      const result = controller['_queryService'].buildParamQuery(req.params);
      expect(controller['_modelDb'].findMany).to.have.been.calledWith(
        '',
        result
      );
    });
  });
});
