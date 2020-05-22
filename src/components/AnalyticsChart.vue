<template>
  <div ref="chartContainer"></div>
</template>

<script>
export default {
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
  data() {
    return {
      chartInstance: {},
      chartOptions: {
        xAxis: {
          categories:
          [
            'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
            'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
          ]
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
            data: [...Array(12)].map(Math.random)
          },
          {
            name: 'Studio sessions',
            color: '#27799c',
            data: [...Array(12)].map(Math.random)
          }
        ]
      }
    };
  },
  mounted: function() {
    this.chartInstance = Highcharts.chart(this.$refs.chartContainer, this.chartOptions);
  },
  methods: {
    initChart: function() {
      
    }
  }
};
</script>
