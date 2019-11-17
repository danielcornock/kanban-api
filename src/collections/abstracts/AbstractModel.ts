import { Model, Document, models, model, Schema } from 'mongoose';

export abstract class AbstractModel<T extends Document> {
  protected _model?: Model<T>;

  constructor() {}

  protected _getModel(name: string, schema: Schema<T>): Model<T> {
    return models.Story ? models.Story : model(name, schema);
  }

  protected abstract _createSchema(): Schema<T>;

  public get model() {
    return this._model;
  }
}
