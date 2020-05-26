<template>
  <div class="org-usage-dashboard">
    <div v-if="this.isLoading" class="spinner-holder animated">
      <div class="spinner-overlay">Loading...</div>
      <p>Loading...</p>
    </div>
    <div v-else-if="this.hasError">
      <span class="text-danger">{{ this.errorMessage }}</span>
    </div>
    <div v-else-if="Object.keys(this.analyticsData).length > 0">
      <RangeDatePicker></RangeDatePicker>
      <AnalyticsChart class="component" :appsSessions="this.analyticsData.appSessions" :studioSessions="this.analyticsData.studioSessions"></AnalyticsChart>
      <AnalyticsSummary class="component" :analyticsData="this.analyticsData.stats"></AnalyticsSummary>
      <ul class="nav nav-tabs">
        <li role="presentation" class="active"><a href="#">Apps</a></li>
        <li role="presentation"><a href="#">Users</a></li>
      </ul>
      <AppDataTable class="component" :apps="this.analyticsData.apps"></AppDataTable>
    </div>
    <div v-else>
      <span>There is no data to show</span>
    </div>
  </div>
</template>

<script>
import AnalyticsSummary from './components/AnalyticsSummary.vue';
import AppDataTable from './components/tables/AppsDataTable';
import RangeDatePicker from './components/RangeDatePicker.vue';
import getAnalyticsData from './services/analytics';
import AnalyticsChart from './components/AnalyticsChart';

export default {
  data() {
    return {
      isLoading: false,
      analyticsData: {},
      errorMessage: '',
      hasError: false
    };
  },
  components: {
    AnalyticsSummary,
    AppDataTable,
    RangeDatePicker,
    AnalyticsChart
  },
  methods: {
    loadData: function(startDate, endDate) {
      this.isLoading = true;

      getAnalyticsData(startDate, endDate)
        .then((result) => {
          this.analyticsData = result;
        })
        .catch((error) => {
          this.hasError = true;
          this.errorMessage = Fliplet.parseError(error);
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  },
  mounted: function() {
    // TODO: at the start of the app we should load data for the current month
    this.loadData('2020-04-01', '2020-05-01');
    Fliplet.Widget.autosize();
  },
  updated() {
    Fliplet.Widget.autosize();
  }
};
</script>
