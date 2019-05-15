import { CONSTANT } from '@fennel/common/src/constants/decorator';

export function Task(options: unknown): ClassDecorator {
  return (target: object) => {
    Reflect.defineMetadata(CONSTANT.task, options, target);
  };
}
