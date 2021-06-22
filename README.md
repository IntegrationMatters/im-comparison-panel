# Comparison Panel

![img.png](https://github.com/IntegrationMatters/im-comparison-panel/blob/master/comparison-template.png?raw=true)

The Comparison panel is meant to display the difference of a current set of values and 
the set of values right before, with the same time range. \
When the current time range is for example from `now-5m` to `now`, the previous time range 
(the one to compare with) should be `now-10m` to `now-5m`. To achieve this easily, use
the `${__range}` variable for current and `offset ${__range}` for previous values as seen 
in the table below.

## Required queries and query names

Query name | query
--- | ---
**total-filtered** | increase(application_total{status="success"}[${__range}])
**total-right-filtered** | increase(application_total{status="timeout"}[${__range}])
**previous-filtered** | increase(application_total{status="success"}[${__range}] offset ${__range})
**previous-right-filtered** | increase(application_total{status="timeout"}[${__range}] offset ${__range})

**The query names are mandatory.**

The filtered status (success, warning, error or timeout) is responsible for the styling of the panel in relation to the
main icon and the trend color of change.
