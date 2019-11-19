import { IRequest, IResponse, INext } from './IMiddlewareParams';

export interface IController {
  getAll(req: IRequest, res: IResponse, next: INext): void;
  getOne(req: IRequest, res: IResponse, next: INext): void;
  update(req: IRequest, res: IResponse, next: INext): void;
  delete(req: IRequest, res: IResponse, next: INext): void;
  create(req: IRequest, res: IResponse, next: INext): void;
}