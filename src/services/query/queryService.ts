import { IParams } from '../../utilities/interfaces/IParams';

export class QueryService {
  constructor() {}

  public buildParamQuery(parameters: IParams): IParams {
    const paramLength = Object.keys(parameters).length;
    let query: IParams = {};

    if (paramLength === 1) {
      query = { _id: parameters[Object.keys(parameters)[0]] };
    } else if (paramLength > 1) {
      for (let [key, value] of Object.entries(parameters)) {
        query[key.replace('Id', '')] = value;
      }
    }

    return query;
  }
}
