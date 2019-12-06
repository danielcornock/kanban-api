import { expect } from 'chai';
import 'mocha';
import chai from 'chai';
import sinonChai from 'sinon-chai';
import sinon from 'sinon';

chai.use(sinonChai);

import { Story } from '../../collections/Story/model/storyEntity';
import { DatabaseService } from './databaseService';
import { IParams } from '../../utilities/interfaces/IParams';
import { IStory } from '../../collections/Story/model/storySchema';
import { Model } from 'mongoose';

describe('databaseService', () => {
  let model: Model<IStory>,
    dbService: DatabaseService<IStory>,
    params: IParams,
    data: IParams,
    storyRes: IStory,
    storyResFunc: IStory;

  model = new Story().model;
  dbService = new DatabaseService(model);
  params = { test: 'test1' };
  storyRes = {
    _id: '0000',
    user: '0001',
    board: '0002',
    column: '0003',
    title: 'test-title',
    content: 'test-content',
    number: 1
  } as any;

  data = {
    testData: 'testData'
  };

  sinon.stub(model, 'findOne');
  sinon.spy(model, 'find');
  sinon.spy(model, 'create');
  sinon.spy(model, 'deleteOne');
  sinon.spy(model, 'deleteMany');

  describe('when calling the findOne function', () => {
    dbService.findOne('', params);

    it('should call the findOne model function', () => {
      expect(model.findOne).to.have.been.calledWith(params);
    });
  });

  describe('when calling the findMany function', () => {
    dbService.findMany('', params);

    it('should call the findMany model function', () => {
      expect(model.find).to.have.been.calledWith(params);
    });
  });

  describe('when calling the create function', () => {
    dbService.create('', data);

    it('should call the create model function', () => {
      expect(model.create).to.have.been.calledWith(data);
    });
  });

  describe('when calling the deleteOne function', () => {
    const res = dbService.deleteOne('', params);

    it('should call the deleteOne model function', () => {
      expect(model.deleteOne).to.have.been.calledWith(params);
    });
  });

  describe('when calling the deleteMany function', () => {
    const res = dbService.deleteMany('', params);

    it('should call the deleteMany model function', () => {
      expect(model.deleteMany).to.have.been.calledWith(params);
    });
  });

  describe('when calling the update function', () => {
    const res = dbService.update('', params, data);

    it('should call the findOne model function', () => {
      expect(model.findOne).to.have.been.calledWith(params);
    });
  });

  describe('when calling the update function externally', async () => {
    const res = await dbService.update('', params, data);
    const newData = {
      ...storyRes,
      ...data
    };

    it('should return an array with the old data and new data', done => {
      expect(res).to.eql([newData, newData]);
      done();
    });
  });
});
