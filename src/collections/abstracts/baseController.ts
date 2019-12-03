import { ResponseService } from '../../services/response/responseService';
import { QueryService } from '../../services/query/queryService';
import { DatabaseService } from '../../services/database/databaseService';
import { Document, Model } from 'mongoose';
import { BaseEntity } from './baseEntity';
import { Validation } from './baseValidation';
import {
  IReq,
  IRes,
  INext
} from '../../utilities/interfaces/IMiddlewareParams';
import { IParams } from '../../utilities/interfaces/IParams';
import { IDataNames } from './interfaces/IDataNames';

export abstract class BaseController<
  D extends Document,
  M extends BaseEntity<D>
> {
  protected readonly _res: ResponseService;
  protected readonly _queryService: QueryService;
  protected readonly _entity: M;
  protected readonly _modelDb: DatabaseService<D>;
  protected readonly _validation: Validation<D>;
  protected readonly _names: IParams;

  constructor(...args: any) {
    this._entity = args[0];
    this._validation = args[1];
    this._res = args[2];
    this._queryService = args[3];
    this._modelDb = args[4];
    this._names = args[5];
  }

  public async getAll(req: IReq, res: IRes, next: INext) {
    try {
      const params = this._queryService.buildParamQuery(req.params);
      const docs: Array<D> = await this._modelDb.findMany('', params);
      this._res.successFind(res, { [this._names.plural]: docs });
    } catch (e) {
      return next(e);
    }
  }

  public async create(req: IReq, res: IRes, next: INext) {
    try {
      const body = {
        ...req.body,
        ...this._queryService.buildParamQuery(req.params)
      };
      this._validation.validate(body);
      const doc: D = await this._modelDb.create('', body);
      this._res.successCreate(res, { [this._names.singular]: doc });
    } catch (e) {
      return next(e);
    }
  }

  public async getOne(req: IReq, res: IRes, next: INext) {
    try {
      const params = this._queryService.buildParamQuery(req.params);
      const doc: D | null = await this._modelDb.findOne('', params);
      this._res.successFind(res, { [this._names.singular]: doc });
    } catch (e) {
      return next(e);
    }
  }

  public async delete(req: IReq, res: IRes, next: INext) {
    try {
      const params = this._queryService.buildParamQuery(req.params);
      await this._modelDb.deleteOne('', params);
      this._res.successDelete(res);
    } catch (e) {
      return next(e);
    }
  }

  public async update(req: IReq, res: IRes, next: INext) {
    try {
      this._validation.validate(req.body);
      const params = this._queryService.buildParamQuery(req.params);
      const [updated]: Array<D> = await this._modelDb.update(
        '',
        params,
        req.body
      );
      this._res.successCreate(res, { [this._names.singular]: updated });
    } catch (e) {
      return next(e);
    }
  }
}
