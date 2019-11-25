import { BaseController } from '../../abstracts/baseController';
import { Column } from '../model/columnEntity';
import { IController } from '../../../utilities/interfaces/IController';
import { IColumn } from '../model/columnSchema';
import { ColumnValidation } from '../validation/columnValidation';
import {
  IReq,
  IRes,
  INext
} from '../../../utilities/interfaces/IMiddlewareParams';

export class ColumnController extends BaseController<IColumn, Column>
  implements IController {
  constructor() {
    super(new Column(), new ColumnValidation(), {
      singular: 'column',
      plural: 'columns'
    });
  }

  public async create(req: IReq, res: IRes, next: INext) {
    try {
      console.log('here');
      const body = {
        ...req.body,
        ...this._queryService.buildParamQuery(req.params)
      };
      const column = await this._modelDb.create('', body);
      this._res.successCreate(res, { column });
    } catch (e) {
      return next(e);
    }
  }

  public async getAll(req: IReq, res: IRes, next: INext) {
    try {
      const params = this._queryService.buildParamQuery(req.params);
      const columns = await this._modelDb.findMany('', params);

      this._res.successFind(res, { columns });
    } catch (e) {
      return next(e);
    }
  }
}
