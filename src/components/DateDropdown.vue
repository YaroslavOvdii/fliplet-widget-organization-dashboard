<template>
  <select
    v-model="selectedRange"
    @change="dropdownHandler(selectedRange)"
    name="dateRange"
    id="dateRange"
    class="date-dropdown"
    :disabled="isLoading"
  >
    <option value="1">Last 24 hours</option>
    <option value="7">Last 7 days</option>
    <option value="30">Last 30 days</option>
    <option value="90">Last 90 days</option>
    <option value="183">Last 6 months</option>
    <option value="365">Last 12 months</option>
    <option value="none">Custom dates</option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      selectedRange: '30'
    };
  },
  props: {
    dropdownHandler: Function,
    isLoading: Boolean,
    customDates: Boolean
  },
  watch: {
    customDates(newVal) {
      this.selectedRange = newVal ? 'none' : this.selectedRange;
    }
  }
};
</script>
