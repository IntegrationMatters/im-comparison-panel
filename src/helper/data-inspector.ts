import {DataQuery, DataQueryRequest} from "@grafana/data";
import {ChartType} from "../types/chart-type";
import {ExtendedDataQuery} from "../types/extended-data-query";
import {RefId} from "../types/ref-id";
import {TrendDirection} from "../types/trend-direction";

export class DataInspector {

  static getTarget(refId: RefId, request?: DataQueryRequest): ExtendedDataQuery | undefined {
    return request?.targets.find((target) => this.findByRefId(target, refId));
  }

  static getStatus(target?: ExtendedDataQuery) {
    let status: string | undefined;

    if(target && target.expr) {
      const statusMatches = target.expr.match(/(status=")(\w*)(")/);
      if(statusMatches && typeof statusMatches[2] === "string") {
        status = statusMatches[2].toLowerCase();
      }
    }

    return status;
  }

  static getChartType(target?: ExtendedDataQuery) {
    let type: ChartType = "bar";

    if(target && target.expr) {
      const typeMatches = target.expr.match(/(#type=)(\w*)/);
      if(typeMatches && typeof typeMatches[2] === "string") {
        const loweredType = typeMatches[2].toLowerCase();
        if(loweredType === "bar" || loweredType === "area") {
          type = loweredType;
        }
      }
    }

    return type;
  }

  static getHeader(status?: string) {
    let header = "";

    if(status === "success") {
      header = "on time";
    } else if(status === "timeout") {
      header = "delayed";
    } else if(status === "error") {
      header = "errored";
    }

    return header;
  }

  static getTrendDirection(status?: string): TrendDirection {
    if(!status || status === "success") {
      return "positive";
    }

    return "negative";
  }

  private static findByRefId(target: DataQuery, refId: RefId) {
    return target.refId.toLowerCase() === refId;
  }

}
