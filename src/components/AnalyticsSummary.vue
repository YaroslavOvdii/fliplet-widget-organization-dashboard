<template>
  <div class="analytics-container">
    <SummaryCell
      v-for="(item, index) in summaryData"
      :data="item"
      :description="cellInformation[index]"
      :tooltip="cellTooltip[index]"
      :key="index"
    ></SummaryCell>
  </div>
</template>

<script>
import SummaryCell from './SummaryCell.vue';

export default {
  data() {
    return {
      cellInformation: [
        'Studio sessions',
        'Total users',
        'New studio users',
        'Apps created',
        'Apps edited',
        'Apps published'
      ],
      cellTooltip: [
        'The total number of Studio sessions. A session is a group of interactions without 30 min of inactivity.',
        'The total number of Studio users.',
        'The total number of Studio users that logged in for the first time.',
        'The total number of apps created',
        'The total number of apps that had screens altered within Studio',
        'The total number of apps that had app updates published via Studio.'
      ],
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
