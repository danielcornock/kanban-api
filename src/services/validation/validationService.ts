import validator from 'validator';

export const isGuid = (testString: string) => {
  const regex: RegExp = new RegExp('^[0-9a-fA-F]{24}$');

  return regex.test(testString);
};

export const isEmail = (testString: string) => {
  return validator.isEmail(testString);
};

export const isValidPassword = (testString: string) => {
  const regex: RegExp = new RegExp(
    '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})'
  );

  return regex.test(testString);
};

export const exists = (testItem: any) => {
  return !(typeof testItem === 'undefined' || testItem === null);
};
