import { BaseController } from '../../abstracts/baseController';
import { IBoard } from '../model/boardSchema';
import { IController } from '../../../utilities/interfaces/IController';
import { Board } from '../model/boardEntity';
import { BoardValidation } from '../validation/boardValidation';
import {
  IReq,
  IRes,
  INext
} from '../../../utilities/interfaces/IMiddlewareParams';
import { IBoardController } from './IBoardController';

export class Boardcontroller extends BaseController<IBoard, Board>
  implements IBoardController {
  constructor() {
    super(new Board(), new BoardValidation(), {
      singular: 'board',
      plural: 'boards'
    });
  }

  public async getList(req: IReq, res: IRes, next: INext) {
    try {
      const boards = await this._modelDb.findMany('').select('+name');
      this._res.successFind(res, { boards });
    } catch (e) {
      return next(e);
    }
  }
}
