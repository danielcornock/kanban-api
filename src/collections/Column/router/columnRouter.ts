import { BaseRoutes } from '../../abstracts/baseRoutes';
import { ColumnController } from '../controller/columnController';

export class ColumnRouter extends BaseRoutes {
  constructor() {
    super(new ColumnController(), 'column');
  }
}
