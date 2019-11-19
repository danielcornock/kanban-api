import { Model, DocumentQuery, Query, Document } from 'mongoose';
import { IParams } from '../../utilities/interfaces/IParams';

export class DatabaseService<T extends Document> {
  private _model: Model<T>;

  constructor(model: Model<T>) {
    this._model = model;
  }

  public findOne(
    userId: string,
    params: IParams
  ): DocumentQuery<T | null, T, {}> {
    return this._model.findOne(params);
  }

  public findMany(userId: string, params?: IParams): DocumentQuery<T[], T, {}> {
    return this._model.find(params);
  }

  public create(userId: string, data: any): Promise<T> {
    return this._model.create(data);
  }

  public deleteOne(
    userId: string,
    query: IParams
  ): Query<
    { ok?: number | undefined; n?: number | undefined } & {
      deletedCount?: number | undefined;
    }
  > {
    return this._model.deleteOne(query);
  }

  public deleteMany(
    userId: string,
    query: IParams
  ): Query<{ ok?: number; n?: number } & { deletedCount?: number }> {
    return this._model.deleteMany(query);
  }

  public async update(
    userId: string,
    query: IParams,
    data: IParams
  ): Promise<[T, T]> {
    const doc = await this.findOne(userId, query);
    const oldDocument = JSON.parse(JSON.stringify(doc));
    const updatedDoc = Object.assign(doc, data);
    const docResponse = await updatedDoc.save();
    return [docResponse, oldDocument];
  }
}
