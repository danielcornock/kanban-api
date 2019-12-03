import { expect } from 'chai';
import 'mocha';
import sinon from 'sinon';
import {
  IReq,
  IRes,
  INext
} from '../../../utilities/interfaces/IMiddlewareParams';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import { mockResponse, mockRequest } from 'mock-req-res';
import { boardDependencies, BoardController } from './boardController';

chai.use(sinonChai);

describe('storyController', () => {
  let res: any,
    req: IReq,
    next: INext,
    controller: BoardController,
    dependencies: Array<any>;

  res = mockResponse();
  req = mockRequest();
  next = sinon.spy();

  req.params = { boardId: '0000' };

  dependencies = boardDependencies();

  let entity = dependencies[0];
  let validationService = dependencies[1];
  let resService = dependencies[2];
  let queryService = dependencies[3];
  let modelDb = dependencies[4];
  let names = dependencies[5];

  sinon.spy(queryService, 'buildParamQuery');

  controller = new BoardController(dependencies);

  describe('when creating a new board', () => {
    sinon.stub(modelDb, 'create').resolves({ name: 'test' });

    beforeEach(() => {
      controller.create(req, res, next);
      req.body = {
        name: 'test'
      };
    });

    it('should build the parameter query', () => {
      expect(queryService.buildParamQuery).to.have.been.calledWith(req.params);
    });
  });
});
