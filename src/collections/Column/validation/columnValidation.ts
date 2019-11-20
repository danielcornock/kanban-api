import { Validation } from '../../abstracts/baseValidation';
import { IColumn } from '../interfaces/IColumn';
import { isGuid, exists } from '../../../services/validation/validationService';

export class ColumnValidation extends Validation<IColumn> {
  constructor() {
    super();
  }

  public validate(column: IColumn): void {
    if (!exists(column.title)) throw new Error('A column must have a title');
    if (!exists(column.order))
      throw new Error('A column must have an assigned order!');

    if (!isGuid(column.user)) throw new Error('That is not a valid GUID');
    if (!isGuid(column.board)) throw new Error('That is not a valid GUID');
  }
}
