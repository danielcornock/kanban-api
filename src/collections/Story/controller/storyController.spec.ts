import { expect } from 'chai';
import 'mocha';
import { StoryController, storyDependencies } from './storyController';
import sinon, { SinonSpy } from 'sinon';
import {
  IReq,
  IRes,
  INext
} from '../../../utilities/interfaces/IMiddlewareParams';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import { mockResponse, mockRequest } from 'mock-req-res';
import { IStory } from '../model/storySchema';
import { DatabaseServiceStub } from '../../../services/database/databaseService.stub';

chai.use(sinonChai);

describe.only('storyController', () => {
  let res: any, req: IReq, next: INext, controller: StoryController;

  res = mockResponse();
  req = mockRequest();
  next = sinon.spy();

  const [
    entity,
    validation,
    resService,
    query,
    dbOld,
    names
  ] = storyDependencies();

  const db = new DatabaseServiceStub<IStory>(entity);

  controller = new StoryController(
    entity,
    validation,
    resService,
    query,
    db,
    names
  );

  req.params = { storyId: '0000' };
  const paramBuilderRes = { story: '0000' };

  sinon.stub(validation, 'validate');

  sinon.stub(query, 'buildParamQuery').returns(paramBuilderRes);

  sinon.spy(resService, 'successCreate');
  sinon.spy(resService, 'successDelete');

  const resStub = sinon.spy(resService, 'successFind');
  const dbStub = sinon.spy(db, 'findMany');

  describe('when requesting for all stories', () => {
    let resStub: any, dbStub: any;

    beforeEach(() => {
      controller.getAll(req, res, next);
    });

    it('should build the parameter query', () => {
      expect(query.buildParamQuery).to.have.been.called;
    });

    it('should make a findMany request to the database service', () => {
      expect(db.findMany).to.have.been.called;
    });

    it('should return a successful find response', () => {
      expect(resService.successFind).to.have.been.called;
    });
  });

  // describe('when creating a new story', () => {
  //   beforeEach(() => {
  //     controller.create(req, res, next);
  //     req.body = {
  //       number: 1
  //     };
  //   });

  //   it('should build the parameter query', () => {
  //     expect(query.buildParamQuery).to.have.been.calledWith(req.params);
  //   });

  //   it('should call the validation function', () => {
  //     expect(validation.validate).to.have.been.calledWith({
  //       ...req.body,
  //       ...paramBuilderRes
  //     });
  //   });

  //   it('should make a create request to the database service', () => {
  //     expect(db.create).to.have.been.calledWith('', {
  //       ...req.body,
  //       ...paramBuilderRes
  //     });
  //   });

  //   it('should return a successful create response', () => {
  //     expect(resService.successCreate).to.have.been.calledWith(res, {
  //       name: 'create'
  //     });
  //   });
  // });

  // describe('when updating a story', () => {
  //   beforeEach(() => {
  //     controller.update(res, res, next);
  //   });

  //   it('should call the validate method', () => {
  //     expect(validation.validate).to.have.been.called;
  //   });

  //   it('should build the parameter query', () => {
  //     expect(query.buildParamQuery).to.have.been.called;
  //   });

  //   it('should return a successful create response', () => {
  //     expect(resService.successCreate).to.have.been.calledWith(res, {
  //       story: {
  //         name: 'update'
  //       }
  //     });
  //   });
  // });
});
