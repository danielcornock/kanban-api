import { expect } from 'chai';
import 'mocha';
import { StoryController } from './storyController';
import sinon from 'sinon';
import {
  IRequest,
  IResponse
} from '../../../config/interfaces/IMiddlewareParams';
import { Story } from '../model/storyModel';
import chai from 'chai';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

describe('on initialisation', () => {
  const controller = new StoryController();
  const model = new Story();

  describe('when requesting for all stories', () => {
    const req: Partial<IRequest> = {
      body: {
        user: '0000'
      }
    };
    const res = {};
    const next = sinon.stub();

    beforeEach(() => {
      controller.getAllStories(req as IRequest, res as IResponse, next);
      sinon.stub(controller, 'test');
    });

    it('should call the validate function');
  });
});
