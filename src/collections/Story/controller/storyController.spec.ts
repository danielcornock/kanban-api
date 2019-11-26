import { expect } from 'chai';
import 'mocha';
import { StoryController } from './storyController';
import sinon from 'sinon';
import {
  IReq,
  IRes,
  INext
} from '../../../utilities/interfaces/IMiddlewareParams';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import { mockResponse, mockRequest } from 'mock-req-res';
import { IStory } from '../model/storySchema';

chai.use(sinonChai);

describe('storyController', () => {
  let res: any, req: IReq, next: INext, controller: StoryController;

  res = mockResponse();
  req = mockRequest();
  next = sinon.spy();
  controller = new StoryController();

  req.params = { storyId: '0000' };
  const paramBuilderRes = { story: '0000' };

  sinon.stub(controller['_validation'], 'validate');

  sinon
    .stub(controller['_queryService'], 'buildParamQuery')
    .returns(paramBuilderRes);

  sinon.spy(controller['_res'], 'successFind');
  sinon.spy(controller['_res'], 'successCreate');
  sinon.spy(controller['_res'], 'successDelete');

  describe('when requesting for all stories', () => {
    sinon
      .stub(controller['_modelDb'], 'findMany')
      .resolves([{ _id: '0000' }] as IStory[]);

    beforeEach(() => {
      controller.getAll(req, res, next);
    });

    it('should build the parameter query', () => {
      expect(
        controller['_queryService'].buildParamQuery
      ).to.have.been.calledWith(req.params);
    });

    it('should make a findMany request to the database service', () => {
      expect(controller['_modelDb'].findMany).to.have.been.calledWith('', {
        story: '0000'
      });
    });

    it('should return a successful find response', () => {
      expect(controller['_res'].successFind).to.have.been.calledWith(res, {
        stories: [
          {
            _id: '0000'
          }
        ]
      });
    });
  });

  describe('when creating a new story', () => {
    const createStub = sinon
      .stub(controller['_modelDb'], 'create')
      .resolves({ title: 'test' } as IStory);

    beforeEach(() => {
      controller.create(req, res, next);
      req.body = {
        number: 1
      };
    });

    it('should build the parameter query', () => {
      expect(
        controller['_queryService'].buildParamQuery
      ).to.have.been.calledWith(req.params);
    });

    it('should call the validation function', () => {
      expect(controller['_validation'].validate).to.have.been.calledWith({
        ...req.body,
        ...paramBuilderRes
      });
    });

    it('should make a create request to the database service', () => {
      expect(controller['_modelDb'].create).to.have.been.calledWith('', {
        ...req.body,
        ...paramBuilderRes
      });
    });

    it('should return a successful create response', () => {
      expect(controller['_res'].successCreate).to.have.been.calledWith(res, {
        story: { title: 'test' }
      });
    });
  });

  describe('when updating a story', () => {
    sinon.stub(controller['_modelDb'], 'update');

    beforeEach(() => {
      controller.update(res, res, next);
    });

    it('should call the validate method', () => {
      expect(controller['_validation'].validate).to.have.been.called;
    });

    it('should build the parameter query', () => {
      expect(controller['_queryService'].buildParamQuery).to.have.been.called;
    });

    it('should return a successful create response', () => {
      expect(controller['_res'].successCreate).to.have.been.calledWith(res, {
        story: {
          title: 'test'
        }
      });
    });
  });
});
