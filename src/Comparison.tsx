import {PanelProps} from "@grafana/data";
import React from "react";
import {ComparisonTemplate} from "./comparison-template";
import "./Comparison.scss";
import {Styles} from "./helper/styles";
import {ComparisonOptions} from "./types/comparison-options";

export const Comparison: React.FC<PanelProps<ComparisonOptions>> = ({width, height, data, options}) => {
  const wrapperStyle = {
    width: `${width}px`,
    height: `${height}px`
  };

  const [headerLeft, headerRight] = options.names;
  const [colorLeft, colorRight] = options.colors;
  const statusLeft = options.statusLeft;
  const statusRight = options.statusRight;

  const panelLeftTemplate = ComparisonTemplate.getTemplate({
    status: statusLeft,
    series: data.series,
    total: "total-filtered",
    previous: "previous-filtered",
    header: headerLeft,
    color: colorLeft
  });
  const panelRightTemplate = ComparisonTemplate.getTemplate({
    status: statusRight,
    series: data.series,
    total: "total-right-filtered",
    previous: "previous-right-filtered",
    header: headerRight,
    color: colorRight
  });

  const wrapperClassNames = Styles.getWrapperClassNames('im-comparison', height);

  return (
    <div style={wrapperStyle} className={wrapperClassNames}>
      <div className="panel-left">{panelLeftTemplate}</div>
      <div className="panel-right">{panelRightTemplate}</div>
    </div>
  );
};
