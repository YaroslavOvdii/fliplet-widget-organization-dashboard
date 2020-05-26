<template>
  <div>
    <div v-if="cellValue.length > 1" class="multiline-cell">
      <p>{{ cellValue[0] }}</p>
      <small v-if="cellValue[0] > cellValue[1]" class="text-success">(&#8593;{{ this.perсent }}%)</small>
      <small v-else class="text-danger">(&#8595;{{ this.perсent }}%)</small>
      <small>
        {{ cellValue[1] }}
      </small>
      <small>
        Previous Period
      </small>
    </div>
    <span v-else>{{ cellValue[0] }}</span>
  </div>
</template>

<script>
import { calculateDynamic } from '../../services/analytics';

export default {
  data() {
    return {
      perсent: 0
    };
  },
  props: {
    cellValue: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  mounted: function() {
    if (this.cellValue.length > 1) {
      this.perсent = calculateDynamic(this.cellValue[0], this.cellValue[1]);
    }
  }
};
</script>
