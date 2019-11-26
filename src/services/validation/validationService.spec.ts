import { expect } from 'chai';
import 'mocha';

import { isGuid, isEmail, isValidPassword, exists } from './validationService';

describe('validationService', () => {
  describe('when validating a GUID', () => {
    describe('when the GUID supplied is not valid', () => {
      const invalidGuid: string = '0000';

      it('should return false', () => {
        expect(isGuid(invalidGuid)).to.be.false;
      });
    });

    describe('when the GUID supplied is valid', () => {
      const validGuid: string = '5dbe105723b84d9872ce9f92';

      it('should return true', () => {
        expect(isGuid(validGuid)).to.be.true;
      });
    });
  });

  describe('when validating an email address', () => {
    describe('when the supplied email address is not valid', () => {
      const invalidEmail: string = 'test.com';

      it('should return false', () => {
        expect(isEmail(invalidEmail)).to.be.false;
      });
    });

    describe('when the supplied email address is valid', () => {
      const validEmail1 = 'test@test.com',
        validEmail2 = 'test.test+test@test.com';

      it('should return true', () => {
        expect(isEmail(validEmail1)).to.be.true;
        expect(isEmail(validEmail2)).to.be.true;
      });
    });
  });

  describe('when validating a password', () => {
    describe('when the supplied password does not meet the criteria', () => {
      const invalidPasswords = [
        '2Small',
        'nocapitals34!',
        'NoNumbers!?',
        'ALLCAPITALS2'
      ];

      it('should return false', () => {
        invalidPasswords.forEach(password => {
          expect(isValidPassword(password)).to.be.false;
        });
      });
    });

    describe('when the supplied password meets the criteria', () => {
      const validPasswords = ['NoSymbols1234', 'WithSymbols7!'];

      it('should return true', () => {
        validPasswords.forEach(password => {
          expect(isValidPassword(password)).to.be.true;
        });
      });
    });
  });

  describe('when testing required fields', () => {
    describe('when the item exists', () => {
      const inputs = ['hello', 145, { test: 'test' }, [1, 2, 3]];

      it('should return true', () => {
        inputs.forEach(input => {
          expect(exists(input)).to.be.true;
        });
      });
    });

    describe('when the input exists but is falsy', () => {
      const inputs = [false, 0];

      it('should return true', () => {
        inputs.forEach(input => {
          expect(exists(input)).to.be.true;
        });
      });
    });

    describe('when the input is undefined', () => {
      const input = undefined;

      it('should return false', () => {
        expect(exists(input)).to.be.false;
      });
    });

    describe('when the input is null', () => {
      const input = null;

      it('should return false', () => {
        expect(exists(input)).to.be.false;
      });
    });

    describe('when the input is an empty string', () => {
      const input = '';

      it('should return false', () => {
        expect(exists(input)).to.be.false;
      });
    });
  });
});
