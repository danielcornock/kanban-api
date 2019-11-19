import { Model, Document, models, model, Schema } from 'mongoose';

export abstract class BaseEntity<T extends Document> {
  protected _model?: Model<T>;
  protected _validation: any;

  constructor() {}

  protected _getModel(name: string, schema: () => Schema<T>): Model<T> {
    return models.Story ? models.Story : model<T>(name, schema());
  }

  public validateEntries(document: T) {
    this._validation(document);
  }

  protected abstract _createSchema(): Schema<T>;

  public get model() {
    return this._model;
  }
}