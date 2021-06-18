import {PanelPlugin} from "@grafana/data";
import {Comparison} from "./Comparison";
import {ComparisonOptions} from "./types/comparison-options";

export const plugin = new PanelPlugin<ComparisonOptions>(Comparison).setPanelOptions((builder) => {
  return builder
    .addStringArray({
      path: "names",
      name: "Names",
      category: ["Comparison configuration"],
      defaultValue: ["on time", "delayed"]
    })
    .addStringArray({
      path: "colors",
      name: "Colors",
      category: ["Comparison configuration"],
      defaultValue: ["green", "darkorange"]
    });
});
