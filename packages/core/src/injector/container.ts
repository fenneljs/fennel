import { Type } from '@fennel/common/src/interfaces/type.interface';

/**
 * @author This file is adapted from NestJS source
 */

export class FennelContainer {
  bindGlobalScope() {
    throw new Error('Method not implemented.');
  }
  addModule(arg0: any, scope: Type<any>[]): any {
    throw new Error('Method not implemented.');
  }
  createCoreModule() {
    throw new Error('Method not implemented.');
  }
  registerCoreModuleRef(instance: any) {
    throw new Error('Method not implemented.');
  }
}
