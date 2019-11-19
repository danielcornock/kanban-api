import {
  IRequest,
  IResponse,
  INext
} from '../../../config/interfaces/IMiddlewareParams';
import { Story } from '../model/storyModel';
import { IStory } from '../interfaces/IStory';
import { BaseController } from '../../abstracts/baseController';

export class StoryController extends BaseController<IStory> {
  constructor() {
    super(Story);
  }

  public async getAllStories(req: IRequest, res: IResponse, next: INext) {
    try {
      const stories = await this._modelDb.findMany('');
      this._res.successFind(res, { stories });
    } catch (e) {
      return next(e);
    }
  }

  public async createStory(req: IRequest, res: IResponse, next: INext) {
    try {
      this._model.validateEntries(req.body);
      const story = await this._modelDb.create('', req.body);
      this._res.successCreate(res, { story });
    } catch (e) {
      return next(e);
    }
  }

  public async getStory(req: IRequest, res: IResponse, next: INext) {
    try {
      const params = this._queryService.buildParamQuery(req.params);
      const story = this._modelDb.findOne('', params);
      this._res.successFind(res, { story });
    } catch (e) {
      return next(e);
    }
  }

  public async deleteStory(req: IRequest, res: IResponse, next: INext) {
    try {
      const params = this._queryService.buildParamQuery(req.params);
      await this._modelDb.deleteOne('', params);
      this._res.successDelete(res);
    } catch (e) {
      return next(e);
    }
  }

  public async updateStory(req: IRequest, res: IResponse, next: INext) {
    try {
      this._model.validateEntries(req.body);
      const params = this._queryService.buildParamQuery(req.params);
      const [updatedStory] = await this._modelDb.update('', params, req.body);
      this._res.successCreate(res, { story: updatedStory });
    } catch (e) {
      return next(e);
    }
  }
}
