import {
  IRequest,
  IResponse,
  INext
} from '../../../config/interfaces/IMiddlewareParams';
import { Story } from '../model/storyModel';
import { ResponseService } from '../../../services/responseService';
import { DatabaseService } from '../../../services/database/databaseService';
import { IStory } from '../interfaces/IStory';
import { Model } from 'mongoose';
import { QueryService } from '../../../services/queryService';

export class StoryController {
  private _model: Story;
  private _res: ResponseService;
  private _storyDb: DatabaseService<IStory>;
  private _queryService: QueryService;

  constructor() {
    this._model = new Story();
    this._res = new ResponseService();
    this._queryService = new QueryService();

    this._storyDb = new DatabaseService<IStory>(
      this._model.model as Model<IStory>
    );
  }

  public async getAllStories(req: IRequest, res: IResponse, next: INext) {
    try {
      const stories = await this._storyDb.findMany('');
      this._res.successFind(res, { stories });
    } catch (e) {
      return next(e);
    }
  }

  public async createStory(req: IRequest, res: IResponse, next: INext) {
    try {
      this._model.validateEntries(req.body);
      const story = await this._storyDb.create('', req.body);
      this._res.successCreate(res, { story });
    } catch (e) {
      return next(e);
    }
  }
}
