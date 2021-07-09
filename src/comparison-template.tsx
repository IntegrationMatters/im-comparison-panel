import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {ComparisonTemplateRequest} from "./comparison-template-request";
import {AbsoluteNumbers} from "./helper/absolute-numbers";
import {Changes} from "./helper/changes";
import {DataInspector} from "./helper/data-inspector";
import {Styles} from "./helper/styles";

export class ComparisonTemplate {
  static getTemplate(request: ComparisonTemplateRequest) {
    const trendDirection = DataInspector.getTrendDirection(request.status);

    const totalFiltered = AbsoluteNumbers.getTotal(request.series, request.total);
    const previousFiltered = AbsoluteNumbers.getTotal(request.series, request.previous);

    const change = Changes.getChange(previousFiltered, totalFiltered);
    const changeOperator = Changes.getChangeOperator(previousFiltered, totalFiltered);

    const changeClassNames = Styles.getChangeValueClassNames(changeOperator, trendDirection);
    const mainIconClassNames = Styles.getMainIconClassNames();
    const mainIcon = Styles.getMainIcon(request.status);

    return (
      <div>
        <div className="header">{request.header}</div>

        <div className="main-text">
          <span className={mainIconClassNames} style={{ color: request.color }}>
            <FontAwesomeIcon icon={mainIcon} />
          </span>

          <span className="percentage">{totalFiltered}</span>
        </div>

        <div className="comparison">
          <div className="compare-values">
            <span className="text">Previous</span>

            <span className="value">{previousFiltered}</span>
          </div>

          <span className="spacer" />

          <div className="compare-values">
            <span className="text">Change</span>

            <span className={changeClassNames}>
              {changeOperator} {change} %
            </span>
          </div>
        </div>
      </div>
    );
  }
}
