import { expect } from 'chai';
import 'mocha';
import { StoryController } from './storyController';
import sinon from 'sinon';
import { IReq, IRes } from '../../../utilities/interfaces/IMiddlewareParams';
import { Story } from '../model/storyEntity';
import chai from 'chai';
import sinonChai from 'sinon-chai';

chai.use(sinonChai);

describe('storyController', () => {
  const controller = new StoryController();
  const model = new Story();

  describe('when requesting for all stories', () => {
    const req: Partial<IReq> = {
      body: {
        user: '0000'
      }
    };
    const res = {};
    const next = sinon.stub();

    beforeEach(() => {
      controller.getAll(req as IReq, res as IRes, next);
    });

    it('should call the validate function');
  });
});
