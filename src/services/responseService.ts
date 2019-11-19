import { IRes } from '../utilities/interfaces/IMiddlewareParams';

export class ResponseService {
  public successFind(res: IRes, data: object | Array<object>): void {
    res.status(200).json({
      status: 'success',
      data: {
        ...data
      }
    });
  }

  public successCreate(res: IRes, data: object | Array<object>): void {
    res.status(201).json({
      status: 'success',
      data: {
        ...data
      }
    });
  }

  public successDelete(res: IRes) {
    res.status(204).send();
  }
}
