import { BaseController } from '../../abstracts/baseController';
import { Column } from '../model/columnEntity';
import { IController } from '../../../utilities/interfaces/IController';
import { IColumn } from '../model/columnSchema';
import { ColumnValidation } from '../validation/columnValidation';
import { ResponseService } from '../../../services/response/responseService';
import { QueryService } from '../../../services/query/queryService';
import { DatabaseService } from '../../../services/database/databaseService';

export class ColumnController extends BaseController<IColumn, Column>
  implements IController {
  constructor(...args: any) {
    super(...args);
  }
}

export function columnDependencies(): Array<any> {
  const names = {
    singular: 'column',
    plural: 'columns'
  };
  const entity = new Column();
  return [
    entity,
    new ColumnValidation(),
    new ResponseService(),
    new QueryService(names.singular),
    new DatabaseService<IColumn>(entity.model),
    names
  ];
}
