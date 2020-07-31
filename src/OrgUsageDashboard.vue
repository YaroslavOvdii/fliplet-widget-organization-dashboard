<template>
  <div class="org-usage-dashboard">
    <RangeDatePicker :onChange="loadData" :isEnabled="!isLoading" v-if="showDatePicker"></RangeDatePicker>
    <div v-if="this.isLoading" class="spinner-holder animated">
      <div class="spinner-overlay"></div>
      <p>Loading...</p>
    </div>
    <div v-else-if="this.hasError">
      <span class="text-danger">{{ this.errorMessage }}</span>
    </div>
    <div v-else-if="Object.keys(this.analyticsData).length > 0">
      <AnalyticsChart class="component" :appsSessions="this.analyticsData.appSessions" :studioSessions="this.analyticsData.studioSessions"></AnalyticsChart>
      <AnalyticsSummary class="component" :analyticsData="this.analyticsData.stats"></AnalyticsSummary>
      <AlertMessage v-show="this.isStartDateBeforehand" class="component" message='<b>Studio sessions</b> data is only avaliable from June 24th 2020' />
      <ul class="tabs">
        <li role="presentation" @click="activeTab = 'apps'" :class="{active: activeTab === 'apps'}">Apps</li>
        <li role="presentation" @click="activeTab = 'users'" :class="{active: activeTab === 'users'}">Users</li>
      </ul>
      <AppDataTable v-if="activeTab === 'apps'" class="component" :apps="this.analyticsData.apps"></AppDataTable>
      <UsersDataTable v-else-if="activeTab === 'users'" class="component" :users="this.analyticsData.users"></UsersDataTable>
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
import getAnalyticsData, { handleSessions } from './services/analytics';
import AnalyticsChart from './components/AnalyticsChart';
import UsersDataTable from './components/tables/UsersDataTable';
import AlertMessage from './components/AlertMessage';

export default {
  data() {
    return {
      isLoading: false,
      analyticsData: {},
      errorMessage: '',
      hasError: false,
      activeTab: 'apps',
      showDatePicker: false,
      isStartDateBeforehand: false
    };
  },
  components: {
    AnalyticsSummary,
    AppDataTable,
    RangeDatePicker,
    AnalyticsChart,
    UsersDataTable,
    AlertMessage
  },
  methods: {
    loadData: function(startDate, endDate) {
      this.isLoading = true;
      this.isStartDateBeforehand = moment(startDate).isBefore('2020-06-24');

      getAnalyticsData(startDate, endDate)
        .then(result => {
          result.appSessions = handleSessions(startDate, endDate, result.appSessions);
          result.studioSessions = handleSessions(startDate, endDate, result.studioSessions);
          this.analyticsData = result;
        })
        .catch(error => {
          this.hasError = true;
          this.errorMessage = Fliplet.parseError(error);
        })
        .finally(() => {
          this.isLoading = false;
          this.showDatePicker = true;
        });
    }
  },
  created() {
    this.isLoading = true;
  },
  mounted() {
    const startDate = moment().add(-1, 'month');
    const endDate = moment();

    this.loadData(startDate, endDate);
    Fliplet.Widget.autosize();
  },
  updated() {
    Fliplet.Widget.autosize();
  }
};
</script>
