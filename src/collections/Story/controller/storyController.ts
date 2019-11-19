import {
  IRequest,
  IResponse,
  INext
} from '../../../utilities/interfaces/IMiddlewareParams';
import { IController } from '../../../utilities/interfaces/IController';
import { Story } from '../model/storyEntity';
import { IStory } from '../interfaces/IStory';
import { BaseController } from '../../abstracts/baseController';
import { StoryValidation } from '../validation/storyValidation';

export class StoryController extends BaseController<IStory, Story>
  implements IController {
  constructor() {
    super(new Story(), new StoryValidation());
  }

  public async getAll(req: IRequest, res: IResponse, next: INext) {
    try {
      const stories = await this._modelDb.findMany('');
      this._res.successFind(res, { stories });
    } catch (e) {
      return next(e);
    }
  }

  public async create(req: IRequest, res: IResponse, next: INext) {
    try {
      this._validate(req.body);
      const story = await this._modelDb.create('', req.body);
      this._res.successCreate(res, { story });
    } catch (e) {
      return next(e);
    }
  }

  public async getOne(req: IRequest, res: IResponse, next: INext) {
    try {
      const params = this._queryService.buildParamQuery(req.params);
      const story = this._modelDb.findOne('', params);
      this._res.successFind(res, { story });
    } catch (e) {
      return next(e);
    }
  }

  public async delete(req: IRequest, res: IResponse, next: INext) {
    try {
      const params = this._queryService.buildParamQuery(req.params);
      await this._modelDb.deleteOne('', params);
      this._res.successDelete(res);
    } catch (e) {
      return next(e);
    }
  }

  public async update(req: IRequest, res: IResponse, next: INext) {
    try {
      this._validate(req.body);
      const params = this._queryService.buildParamQuery(req.params);
      const [updatedStory] = await this._modelDb.update('', params, req.body);
      this._res.successCreate(res, { story: updatedStory });
    } catch (e) {
      return next(e);
    }
  }
}
