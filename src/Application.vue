<template>
  <div class="container">
    <div class="row" style="display:flex; justify-content:center; align-items:center; margin-top: 15px">
      <div v-if="this.isLoading" class="spinner-holder animated">
        <div class="spinner-overlay">Loading...</div>
        <p>Loading...</p>
      </div>
      <div v-else-if="this.hasError">
        <span class="text-danger">{{this.errorMessage}}</span>
      </div>
      <div v-else>
        <div v-if="Object.keys(this.analyticsData).length > 0">
          <DataTable></DataTable>
          <span>We have loaded <strong>{{this.analyticsData.appSessions.length}}</strong> entries</span>
        </div>
        <div v-else>
          <span>There is no data to show</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DataTable from './components/tables/dataTable';
import getAnalyticsData from './services/analytics';

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
    DataTable
  },
  mounted: function() {
    // TODO: at the start of the app we should load data for the current month
    this.loadData('2020-04-01', '2020-05-01');
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
          this.errorMessage = error;
        })
        .finally(() => {
          this.isLoading = false;
        });
    }
  }
};
</script>
