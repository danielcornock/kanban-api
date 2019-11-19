import { ResponseService } from '../../services/responseService';
import { QueryService } from '../../services/query/queryService';
import { DatabaseService } from '../../services/database/databaseService';
import { Document, Model } from 'mongoose';

export abstract class BaseController<T extends Document> {
  protected readonly _res: ResponseService;
  protected readonly _queryService: QueryService;
  protected readonly _model: any;
  protected readonly _modelDb: DatabaseService<T>;

  constructor(model: any) {
    this._model = new model();
    this._res = new ResponseService();
    this._queryService = new QueryService();
    this._modelDb = new DatabaseService<T>(this._model.model as Model<T>);
  }
}
