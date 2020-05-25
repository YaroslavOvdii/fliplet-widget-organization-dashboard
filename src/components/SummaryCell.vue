<template>
  <div class="summary-cell">
    <h2>{{ data.count }}</h2>
    <small v-if="isPeriodPositive" class="up">(&#8593;X%)</small>
    <small v-else class="down">(&#8595;X%)</small>
    <small>{{ data.previousPeriodCount }} previous period</small>
    <p>{{ description }} <Tooltip :content="description"></Tooltip></p>
  </div>
</template>

<script>
import Tooltip from './Tooltip.vue';

export default {
  data() {
    return {
      isPeriodPositive: undefined
    };
  },
  props: {
    description: String,
    data: Array
  },
  mounted() {
    this.isPeriodPositive = this.data.count > this.data.previousPeriodCount;
  },
  components: {
    Tooltip
  },
  name: 'SummaryCell'
};
</script>
