import { Model, Document, models, model, Schema } from 'mongoose';

export abstract class BaseEntity<T extends Document> {
  protected _schema: Schema;
  private _name: string;

  constructor(schema: Schema, modelName: string) {
    this._schema = schema;
    this._name = modelName;
  }

  public get model(): Model<T> {
    return models[this._name]
      ? models[this._name]
      : model<T>(this._name, this._schema);
  }
}
