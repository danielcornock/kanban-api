import { expect } from 'chai';

import { database, port, env, testingPort } from './env';
import 'mocha';

describe('env', () => {
  describe('when fetching the database connection string', () => {
    describe('when the environment is development', () => {
      const result: string = database('development');

      it('should return the connection string for the remote database', () => {
        expect(result).to.include('mongodb+srv://daniel');
      });
    });

    describe('when the environment is local', () => {
      const result: string = database('local');

      it('should return the connection string for the local database', () => {
        expect(result).to.include('mongodb://');
      });
    });
  });

  describe('when fetching the constants', () => {
    const envPort: string = process.env.NODE_PORT as string;
    const envEnv: string = process.env.NODE_ENV as string;

    it('should return the correct port', () => {
      expect(port).to.equal(envPort);
    });

    it('should return the correct environment', () => {
      expect(env).to.equal(envEnv);
    });

    it('should return the correct testing port', () => {
      expect(testingPort).to.equal('http://localhost:4200');
    });
  });
});
