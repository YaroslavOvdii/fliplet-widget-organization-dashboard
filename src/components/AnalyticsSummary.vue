<template>
  <div class="analytics-container">
    <SummaryCell v-for="(item, index) in transformedData" :data="item" :description="cellInformation[index]" :key="index"></SummaryCell>
  </div>
</template>

<script>
import SummaryCell from './SummaryCell.vue';

export default {
  data() {
    return {
      cellInformation: ['Studio sessions', 'Total users', 'New studio users', 'Apps created', 'Apps edited', 'Apps published'],
      transformedData: undefined
    };
  },
  props: {
    analyticsData: Object
  },
  created() {
    this.transformedData = Object.values(this.analyticsData);
  },
  components: {
    SummaryCell
  },
  name: 'AnalyticsSummary'
};
</script>
