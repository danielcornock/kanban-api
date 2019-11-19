import { Document } from 'mongoose';

export abstract class Validation<D extends Document> {
  constructor() {}

  public abstract validate(document: D): void;
}
