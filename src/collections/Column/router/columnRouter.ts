import { BaseRoutes } from '../../abstracts/baseRoutes';
import { ColumnController } from '../controller/columnController';
import { IController } from '../../../utilities/interfaces/IController';

export class ColumnRouter extends BaseRoutes<IController> {
  constructor() {
    super(new ColumnController());
  }
}
