import { ExtractPropertyDescriptor } from '../../utils/ExtractPropertyDescriptor';
import { BulkPropertyExtractor } from '../../utils/BulkPropertyExtractor';
import { HTTPRequestInfo } from './HttpRequestInfoModel';

export const RequestBulkExtractor = new BulkPropertyExtractor<HTTPRequestInfo>([
  new ExtractPropertyDescriptor('params.cookies', 'cookies'),
  new ExtractPropertyDescriptor('params.ip', 'ip'),
  new ExtractPropertyDescriptor('params.method', 'method'),
  new ExtractPropertyDescriptor('params.secure', 'secure'),
  new ExtractPropertyDescriptor('params.query', 'query'),
  new ExtractPropertyDescriptor('params.params', 'params'),
  new ExtractPropertyDescriptor('params.url', 'url'),
]);
