import { IParams } from '../../config/interfaces/IParams';

export class QueryService {
  constructor() {}

  public buildParamQuery(parameters: IParams): IParams {
    const query: IParams = {};
    for (let [key, value] of Object.entries(parameters)) {
      query[key.replace('Id', '')] = value;
    }
    return query;
  }
}
