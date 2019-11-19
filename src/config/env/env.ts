import dotenv from 'dotenv';
import { IParams } from '../../utilities/interfaces/IParams';
dotenv.config({ path: './config.env' });

export const env: string = process.env.NODE_ENV || 'development';

export const port: string = process.env.NODE_PORT || '2100';

export const database = (environment: string = 'development') => {
  const databases: IParams = {
    development: process.env.DATABASE
      ? process.env.DATABASE.replace(
          '<PASSWORD>',
          process.env.DATABASE_PASSWORD ? process.env.DATABASE_PASSWORD : ''
        )
      : '',
    local: process.env.DATABASE_LOCAL
      ? process.env.DATABASE_LOCAL.replace(
          '<PORT>',
          process.env.DB_PORT ? process.env.DB_PORT : ''
        )
      : ''
  };

  return databases[environment];
};
