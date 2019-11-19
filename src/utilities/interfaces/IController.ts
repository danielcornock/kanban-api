import { IReq, IRes, INext } from './IMiddlewareParams';

export interface IController {
  getAll(req: IReq, res: IRes, next: INext): void;
  getOne(req: IReq, res: IRes, next: INext): void;
  update(req: IReq, res: IRes, next: INext): void;
  delete(req: IReq, res: IRes, next: INext): void;
  create(req: IReq, res: IRes, next: INext): void;
}
