import { Validation } from '../../abstracts/baseValidation';
import { IBoard } from '../model/boardSchema';
import { isGuid, exists } from '../../../services/validation/validationService';

export class BoardValidation extends Validation<IBoard> {
  constructor() {
    super();
  }

  public validate(board: IBoard) {
    if (!exists(board.user)) throw new Error('Invalid user ID');
    if (!exists(board.name)) throw new Error('A board must have a name!');

    if (!isGuid(board.user)) throw new Error('That is not a valid GUID!');
  }
}
