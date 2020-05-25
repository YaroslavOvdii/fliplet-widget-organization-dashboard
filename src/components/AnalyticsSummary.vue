<template>
  <div class="analytics-container">
    <SummaryCell v-for="(item, index) in summaryData" :data="item" :description="cellInformation[index]" :key="index"></SummaryCell>
  </div>
</template>

<script>
import SummaryCell from './SummaryCell.vue';

export default {
  data() {
    return {
      cellInformation: ['Studio sessions', 'Total users', 'New studio users', 'Apps created', 'Apps edited', 'Apps published'],
      summaryData: undefined
    };
  },
  components: {
    SummaryCell
  },
  props: {
    analyticsData: Object
  },
  created() {
    this.summaryData = Object.values(this.analyticsData);
  }
};
</script>
