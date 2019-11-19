import { Model, Document } from 'mongoose';
import { DatabaseService } from '../../services/database/databaseService';
import { QueryService } from '../../services/query/queryService';
import { ResponseService } from '../../services/responseService';
import { AbstractModel } from './AbstractModel';

export class BaseController<D extends Document, T extends AbstractModel<D>> {
  protected readonly _queryService: QueryService;
  protected readonly _res: ResponseService;
  protected readonly _storyDb: DatabaseService<D>;
  protected _model: T;


  constructor(model: T){
    this._model = model;
    this._res = new ResponseService();
    this._queryService = new QueryService();
    this._storyDb = new DatabaseService<D>(
      this._model.model as Model<D>
    );
  }

}
