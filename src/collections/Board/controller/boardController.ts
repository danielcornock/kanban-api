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

export class Boardcontroller extends BaseController<IBoard, Board>
  implements IController {
  constructor() {
    super(new Board(), new BoardValidation(), {
      singular: 'board',
      plural: 'boards'
    });
  }

  public async getAll(req: IReq, res: IRes, next: INext) {
    try {
      const boards = await this._modelDb.findMany('').populate('columns');
      this._res.successFind(res, { boards });
    } catch (e) {
      return next(e);
    }
  }

  public async getOne(req: IReq, res: IRes, next: INext) {
    try {
      try {
        const id = req.params[Object.keys(req.params)[0]];
        const board: IBoard = await this._modelDb
          .findOne('', { _id: id })
          .populate('columns');
        this._res.successFind(res, { board });
      } catch (e) {
        return next(e);
      }
    } catch (e) {
      return next(e);
    }
  }
}
