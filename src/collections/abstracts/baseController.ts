import { ResponseService } from '../../services/responseService';
import { QueryService } from '../../services/query/queryService';
import { DatabaseService } from '../../services/database/databaseService';
import { Document, Model } from 'mongoose';
import { BaseEntity } from './baseEntity';
import { Validation } from './baseValidation';

export abstract class BaseController<
  D extends Document,
  M extends BaseEntity<D>
> {
  protected readonly _res: ResponseService;
  protected readonly _queryService: QueryService;
  protected readonly _entity: M;
  protected readonly _modelDb: DatabaseService<D>;
  protected readonly _validate: (document: D) => void;

  constructor(model: M, validation: Validation<D>) {
    this._entity = model;
    this._validate = validation.validate;
    this._res = new ResponseService();
    this._queryService = new QueryService();
    this._modelDb = new DatabaseService<D>(this._entity.model as Model<D>);
  }
}
