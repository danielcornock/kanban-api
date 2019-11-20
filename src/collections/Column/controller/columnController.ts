import { BaseController } from '../../abstracts/baseController';
import { Column } from '../model/columnEntity';
import { IController } from '../../../utilities/interfaces/IController';
import { IColumn } from '../interfaces/IColumn';
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

  public async getAll(req: IReq, res: IRes, next: INext) {
    try {
      const params = this._queryService.buildParamQuery(req.params);
      const columns = await this._modelDb
        .findMany('', params)
        .populate('stories')
        .exec();

      this._res.successFind(res, { columns });
    } catch (e) {
      return next(e);
    }
  }
}
