import { Model, Document, models, model, Schema } from 'mongoose';

export abstract class BaseEntity<T extends Document> {
  protected _model!: Model<T>;

  constructor() {}

  protected _getModel(name: string, schema: () => Schema<T>): Model<T> {
    return models.Story ? models.Story : model<T>(name, schema());
  }

  protected abstract _createSchema(): Schema<T>;

  public get model(): Model<T> {
    return this._model;
  }
}
