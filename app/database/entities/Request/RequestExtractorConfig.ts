import { ExtractPropertyDescriptor } from '../../utils/ExtractPropertyDescriptor';
import { BulkPropertyExtractor } from '../../utils/BulkPropertyExtractor';

export const RequestBulkExtractor = new BulkPropertyExtractor<RequestInfo>([
  new ExtractPropertyDescriptor('cookies', 'cookies'),
  new ExtractPropertyDescriptor('ip', 'ip'),
  new ExtractPropertyDescriptor('method', 'method'),
  new ExtractPropertyDescriptor('secure', 'secure'),
  new ExtractPropertyDescriptor('query', 'query'),
  new ExtractPropertyDescriptor('params', 'params'),
  new ExtractPropertyDescriptor('url', 'url'),
]);
