<template>
  <div class="summary-cell">
    <h2>{{ data.count }}</h2>
    <small v-if="data.count > data.previousPeriodCount" class="text-success">(&#8593; {{ perсent }}%)</small>
    <small v-else class="text-danger">(&#8595; {{ perсent }}%)</small>
    <small>{{ data.previousPeriodCount }} previous period</small>
    <p>{{ description }} <Tooltip :content="tooltip" :options= "{ placement: 'top' }"></Tooltip></p>
  </div>
</template>

<script>
import Tooltip from './Tooltip.vue';
import { calculateDynamic } from '../services/analytics';

export default {
  data() {
    return {
      perсent: 0
    };
  },
  components: {
    Tooltip
  },
  props: {
    description: String,
    tooltip: String,
    data: Array
  },
  mounted() {
    this.perсent = calculateDynamic(this.data.count, this.data.previousPeriodCount);
  }
};
</script>
