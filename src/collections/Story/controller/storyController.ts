import {
  IRequest,
  IResponse,
  INext
} from '../../../config/interfaces/IMiddlewareParams';
import { Story } from '../model/storyModel';
import { ResponseService } from '../../../services/responseService';

export class StoryController {
  private _model: Story;
  private _res: ResponseService;

  constructor() {
    this._model = new Story();
    this._res = new ResponseService();
  }

  public async getAllStories(req: IRequest, res: IResponse, next: INext) {
    try {
      this._res.successFind(res, { test: 'test ' });
    } catch (e) {
      return next(e);
    }
  }

  public async createStory(req: IRequest, res: IResponse, next: INext) {
    try {
      this._model.validateEntries(req.body);
      this._res.successCreate(res, { test: 'test' });
    } catch (e) {
      return next(e);
    }
  }
}
