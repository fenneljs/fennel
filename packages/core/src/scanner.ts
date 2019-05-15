/**
 * @author This file is adapted from NestJS source
 */

import 'reflect-metadata';

import { FennelContainer } from '@fennel/core/src/injector/container';
import { MetadataScanner } from '@fennel/core/src/metadata-scanner';

import { Type } from '@fennel/common/src/interfaces/type.interface';

export class DependenciesScanner {
  constructor(
    private readonly container: FennelContainer,
    private readonly metadataScanner: MetadataScanner
  ) {}

  public async scan(module: Type<any>) {
    await this.registerCoreModule();
    await this.scanForModules(module);
    await this.scanModulesForDependencies();
    this.container.bindGlobalScope();
  }
  scanModulesForDependencies() {
    throw new Error("Method not implemented.");
  }

  public async scanForModules(
    module: Type<any>,
    scope: Type<any>[] = [],
    ctxRegistry: (Type<any>)[] = []
  ): Promise<Module> {
    const moduleInstance = await this.insertModule(module, scope);
    ctxRegistry.push(module);
    const modules = this.reflectMetadata(module as Type<any>, METADATA.IMPORTS);

    for (const innerModule of modules) {
      if (ctxRegistry.includes(innerModule)) {
        continue;
      }
      await this.scanForModules(
        innerModule,
        [].concat(scope, module),
        ctxRegistry
      );
    }
    return moduleInstance;
  }

  public async insertModule(module: any, scope: Type<any>[]): Promise<Module> {
    if (module && module.forwardRef) {
      return this.container.addModule(module.forwardRef(), scope);
    }
    return this.container.addModule(module, scope);
  }

  public async registerCoreModule() {
    const module = this.container.createCoreModule();
    const instance = await this.scanForModules(module);
    this.container.registerCoreModuleRef(instance);
  }

  public reflectMetadata(metatype: Type<any>, metadataKey: string) {
    return Reflect.getMetadata(metadataKey, metatype) || [];
  }
}
