import mongoose from 'mongoose';
import { database, env } from '../env/env';

export class DatabaseConnection {
  constructor() {
    this._connectToDatabase();
  }

  private async _connectToDatabase() {
    try {
      await mongoose.connect(database(env), {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
      });

      console.log(`Connected to ${env} database.`);
    } catch {
      console.error(`Error connecting to ${env} database`);
    }
  }
}
