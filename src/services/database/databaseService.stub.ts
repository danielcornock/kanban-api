import { Model, Document } from 'mongoose';
import { IParams } from '../../utilities/interfaces/IParams';

export class DatabaseServiceStub<T extends Document> {
  private _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  public findOne(userId: string, params: IParams): Object {
    return { name: 'findOne' };
  }

  public findMany(userId: string, params?: IParams): Array<Object> {
    return [{ name: 'findMany' }];
  }

  public create(userId: string, data: any): Object {
    return { name: 'create' };
  }

  public deleteOne(userId: string, query: IParams): Object {
    return { name: 'deleteOne' };
  }

  public deleteMany(userId: string, query: IParams): Object {
    return { name: 'deleteMany' };
  }

  public update(userId: string, query: IParams, data: IParams): Object {
    return { name: 'update' };
  }
}
