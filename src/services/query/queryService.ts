import { IParams } from '../../utilities/interfaces/IParams';

export class QueryService {
  private _nativeId: string;

  constructor(nativeId: string) {
    this._nativeId = nativeId;
  }

  public buildParamQuery(parameters: IParams): IParams {
    let query: IParams = {};

    for (let [key, value] of Object.entries(parameters)) {
      if (key.includes(this._nativeId)) {
        query._id = value;
      } else {
        query[key.replace('Id', '')] = value;
      }
    }

    return query;
  }
}
