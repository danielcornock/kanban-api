import { IController } from '../../../utilities/interfaces/IController';
import {
  IReq,
  IRes,
  INext
} from '../../../utilities/interfaces/IMiddlewareParams';

export interface IBoardController extends IController {
  getList(req: IReq, res: IRes, next: INext): void;
}
