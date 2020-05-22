<template>
  <div class="summary-cell">
    <h2>{{ data.count }}</h2>
    <small v-if="periodIncrease" class="up">(&#8593;X%)</small>
    <small v-else class="down">(&#8595;X%)</small>
    <small>{{ data.previousPeriodCount }} previous period</small>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      periodIncrease: true
    };
  },
  props: {
    description: String,
    data: Array
  },
  mounted() {
    if (this.data.previousPeriodCount > this.data.count) {
      this.periodIncrease = false;
    }
  },
  name: 'SummaryCell'
};
</script>
