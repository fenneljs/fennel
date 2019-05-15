import { Task } from '@fennel/common';

describe('Worker decorator', () => {
  it('should add a task property', () => {
    // when
    @Task({})
    class TestWorker {}

    // then
    const metadataKey = '@fennel/decorator/task';
    expect(Reflect.getMetadataKeys(TestWorker)).toStrictEqual([metadataKey]);
  });

  it('should add options to the class', () => {
    // given
    const options = { test: 'aSuperTest' };

    // when
    @Task(options)
    class TestWorker {}

    // then
    const metadataKey = '@fennel/decorator/task';
    expect(Reflect.getMetadata(metadataKey, TestWorker)).toStrictEqual(options);
  });
});
