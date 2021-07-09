import { DataFrame } from '@grafana/data';
import { RefId } from './types/ref-id';

export interface ComparisonTemplateRequest {
  status: string;
  series: DataFrame[];
  total: RefId;
  previous: RefId;
  header: string;
  color: string;
}
