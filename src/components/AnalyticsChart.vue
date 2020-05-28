<template>
  <div ref="chartContainer"></div>
</template>

<script>
export default {
  data() {
    return {
      chartInstance: {},
      chartOptions: {
        title: {
          text: ''
        },
        xAxis: {
          categories:
          []
        },
        yAxis: {
          title: {
            text: ''
          },
          plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
          }]
        },
        exporting: {
          chartOptions: {
            plotOptions: {
              series: {
                dataLabels: {
                  enabled: true
                }
              }
            }
          },
          fallbackToExportServer: false
        },
        legend: {
          layout: 'horizontal',
          align: 'center',
          verticalAlign: 'bottom',
          borderWidth: 0,
          showInLegend: false
        },
        series: [
          {
            name: 'Apps Sessions',
            color: '#03b1fc',
            data: []
          },
          {
            name: 'Studio sessions',
            color: '#27799c',
            data: []
          }
        ]
      }
    };
  },
  props: {
    appsSessions: {
      type: Array,
      default() {
        return [];
      }
    },
    studioSessions: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    initChart: function() {
      this.transformData()
        .then(() => {
          this.chartInstance = Highcharts.chart(this.$refs.chartContainer, this.chartOptions);
        });
    },
    transformData: function() {
      return new Promise((resolve) => {
        const categories = [];
        const appSessionVal = [];

        this.appsSessions.forEach((appSession) => {
          categories.push(appSession.day);
          appSessionVal.push(appSession.count);
        });

        const studioSessionVal = [];

        this.studioSessions.forEach((studioSession) => {
          studioSessionVal.push(studioSession.count);
        });

        this.chartOptions.xAxis.categories = categories;
        this.chartOptions.series[0].data = appSessionVal;
        this.chartOptions.series[1].data = studioSessionVal;
        resolve();
      });
    }
  },
  mounted: function() {
    this.initChart();
  }
};
</script>
