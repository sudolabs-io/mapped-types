import { Type } from './common';

export interface MappedType<T> extends Type<T> {
  new (): T;
}
