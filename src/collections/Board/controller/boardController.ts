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
import { ResponseService } from '../../../services/response/responseService';
import { QueryService } from '../../../services/query/queryService';
import { DatabaseService } from '../../../services/database/databaseService';

export class BoardController extends BaseController<IBoard, Board>
  implements IBoardController {
  constructor(...args: any) {
    super(...args);
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

export function boardDependencies(): Array<any> {
  const names = {
    singular: 'board',
    plural: 'boards'
  };
  const entity = new Board();
  return [
    entity,
    new BoardValidation(),
    new ResponseService(),
    new QueryService(names.singular),
    new DatabaseService<IBoard>(entity.model),
    names
  ];
}
