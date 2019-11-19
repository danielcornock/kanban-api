import {
  IRequest,
  IResponse,
  INext
} from '../../../config/interfaces/IMiddlewareParams';
import { BaseController } from '../../abstracts/baseController';
import { IController } from '../../abstracts/IController';
import { IStory } from '../interfaces/IStory';
import { Story } from '../model/storyModel';

export class StoryController extends BaseController<IStory, Story> implements IController {
  constructor() {
    super(new Story())
  }

  public async getAll(req: IRequest, res: IResponse, next: INext) {
    try {
      const stories = await this._storyDb.findMany('');
      this._res.successFind(res, { stories });
    } catch (e) {
      return next(e);
    }
  }

  public async create(req: IRequest, res: IResponse, next: INext) {
    try {
      this._model.validateEntries(req.body);
      const story = await this._storyDb.create('', req.body);
      this._res.successCreate(res, { story });
    } catch (e) {
      return next(e);
    }
  }

  public async getOne(req: IRequest, res: IResponse, next: INext) {
    try {
      const params = this._queryService.buildParamQuery(req.params);
      const story = this._storyDb.findOne('', params);
      this._res.successFind(res, { story });
    } catch (e) {
      return next(e);
    }
  }

  public async delete(req: IRequest, res: IResponse, next: INext) {
    try {
      const params = this._queryService.buildParamQuery(req.params);
      await this._storyDb.deleteOne('', params);
      this._res.successDelete(res);
    } catch (e) {
      return next(e);
    }
  }

  public async update(req: IRequest, res: IResponse, next: INext) {
    try {
      this._model.validateEntries(req.body);
      const params = this._queryService.buildParamQuery(req.params);
      const [updatedStory] = await this._storyDb.update('', params, req.body);
      this._res.successCreate(res, { story: updatedStory });
    } catch (e) {
      return next(e);
    }
  }
}
