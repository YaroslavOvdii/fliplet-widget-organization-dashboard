<template>
  <div class="summary-cell">
    <h2>{{ data.count }}</h2>
    <small v-if="data.count > data.previousPeriodCount" class="text-success">(&#8593; {{ changeFromPreviousPeriod }}%)</small>
    <small v-else class="text-danger">(&#8595; {{ changeFromPreviousPeriod }}%)</small>
    <small>{{ data.previousPeriodCount }} previous period</small>
    <p>{{ description }} <Tooltip :content="description"></Tooltip></p>
  </div>
</template>

<script>
import Tooltip from './Tooltip.vue';

export default {
  data() {
    return {
      changeFromPreviousPeriod: undefined
    };
  },
  components: {
    Tooltip
  },
  props: {
    description: String,
    data: Array
  },
  mounted() {
    if (this.data.previousPeriodCount > this.data.count) {
      this.changeFromPreviousPeriod = Math.round((( this.data.previousPeriodCount - this.data.count ) / this.data.count) * 100);
    } else {
      this.changeFromPreviousPeriod = Math.round((( this.data.count - this.data.previousPeriodCount ) / this.data.count) * 100);
    }
  }
};
</script>
