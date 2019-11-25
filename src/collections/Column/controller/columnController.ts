import { BaseController } from '../../abstracts/baseController';
import { Column } from '../model/columnEntity';
import { IController } from '../../../utilities/interfaces/IController';
import { IColumn } from '../model/columnSchema';
import { ColumnValidation } from '../validation/columnValidation';

export class ColumnController extends BaseController<IColumn, Column>
  implements IController {
  constructor() {
    super(new Column(), new ColumnValidation(), {
      singular: 'column',
      plural: 'columns'
    });
  }
}
