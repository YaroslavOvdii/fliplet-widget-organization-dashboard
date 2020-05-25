<template>
  <div>
    <div v-if="cellValue.length > 1" class="multiline-cell">
      <p>{{ cellValue[0] }}</p>
      <span v-if="cellValue[0] > cellValue[1]" class="text-success">(&#8593;X%)</span>
      <span v-else class="text-danger">(&#8595;X%)</span>
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
export default {
  props: {
    cellValue: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>
