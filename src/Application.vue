<template>
  <div>
    <h1>Your organization-dashboard widget will be added here.</h1>
    <First-Component></First-Component>
  </div>
</template>

<script>
import FirstComponent from './components/FirstComponent';
import getAnalytics from './services/analytics';

export default {
  data() {
    return {};
  },
  components: {
    FirstComponent
  },
  created: function() {
    // TODO: at the start of the app we should load data for the current month
    console.log(getAnalytics({startDate: '2020-04-01', endDate: '2020-05-31'}));
  }
};
</script>
