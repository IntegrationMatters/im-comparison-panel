import {DataFrame, DataQueryRequest} from "@grafana/data";
import {RefId} from "./types/ref-id";

export interface ComparisonTemplateRequest {
  request?: DataQueryRequest;
  series: DataFrame[];
  total: RefId;
  previous: RefId;
  header: string;
  color: string;
}
