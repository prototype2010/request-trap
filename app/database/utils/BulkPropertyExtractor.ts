import { IndexedObject } from '../../../types';
import { ExtractPropertyDescriptor } from './ExtractPropertyDescriptor';

export class BulkPropertyExtractor<T> {
  constructor(private descriptors: Array<ExtractPropertyDescriptor<any>>) {}

  public extract(extractTarget: IndexedObject<any>): T {
    const extractedByDescriptors = this.descriptors.map(descriptor => {
      return descriptor.extract(extractTarget);
    });

    return extractedByDescriptors.reduce((cumulative, current: IndexedObject<any>) => {
      return { ...cumulative, ...current };
    }) as T;
  }
}
