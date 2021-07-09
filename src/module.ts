import { PanelPlugin } from '@grafana/data';
import { Comparison } from './Comparison';
import { ComparisonOptions } from './types/comparison-options';

export const plugin = new PanelPlugin<ComparisonOptions>(Comparison).setPanelOptions((builder) => {
  return builder
    .addStringArray({
      path: 'names',
      name: 'Names',
      category: ['Comparison configuration'],
      defaultValue: ['on time', 'delayed'],
    })
    .addStringArray({
      path: 'colors',
      name: 'Colors',
      category: ['Comparison configuration'],
      defaultValue: ['green', 'darkorange'],
    })
    .addSelect({
      path: 'statusLeft',
      name: 'Status left',
      category: ['Comparison configuration'],
      defaultValue: 'success',
      settings: {
        options: [
          {
            value: 'success',
            label: 'Success',
          },
          {
            value: 'warning',
            label: 'Warning',
          },
          {
            value: 'error',
            label: 'Error',
          },
          {
            value: 'timeout',
            label: 'Timeout',
          },
        ],
      },
    })
    .addSelect({
      path: 'statusRight',
      name: 'Status right',
      category: ['Comparison configuration'],
      defaultValue: 'success',
      settings: {
        options: [
          {
            value: 'success',
            label: 'Success',
          },
          {
            value: 'warning',
            label: 'Warning',
          },
          {
            value: 'error',
            label: 'Error',
          },
          {
            value: 'timeout',
            label: 'Timeout',
          },
        ],
      },
    });
});
