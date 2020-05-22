<template>
  <select v-model="selectedRange" name="dateRange" id="dateRange" class="date-dropdown form-control">
    <option value="24hours">Last 24 hours</option>
    <option value="7days">Last 7 days</option>
    <option value="30days">Last 30 days</option>
    <option value="90days">Last 90 days</option>
    <option value="6months">Last 6 months</option>
    <option value="12months">Last 12 months</option>
  </select>
</template>

<script>
export default {
  data() {
    return {
      selectedRange: '30days'
    };
  },
  name: 'DateDropdown'
};
</script>

<style scoped>

</style>
