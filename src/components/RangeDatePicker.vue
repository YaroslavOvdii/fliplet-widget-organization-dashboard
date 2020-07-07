<template>
  <div class="range-date-picker">
    <DateDropdown :onDropdownChange="onDropdownChange" :isEnabled="isEnabled" :customDates="customDates"></DateDropdown>
    <date-range-picker
      ref="picker"
      opens="left"
      :disabled="!isEnabled"
      :locale-data="dateFormat"
      :autoApply=true
      :ranges=false
      v-model="dateRange"
      @update="updateValues"
      :linkedCalendars=false
      :class="{ disabled: !isEnabled }"
    >
      <template v-slot:input="picker" style="min-width: 350px;">
        {{ picker.startDate }} - {{ picker.endDate }}
      </template>
    </date-range-picker>
  </div>
</template>

<script>
import DateRangePicker from 'vue2-daterange-picker';
import DateDropdown from './DateDropdown.vue';
import 'vue2-daterange-picker/dist/vue2-daterange-picker.css';

export default {
  data() {
    let startDate = new Date();
    let endDate = new Date();

    startDate.setDate(endDate.getDate() - 30);

    return {
      dateRange: {
        startDate,
        endDate
      },
      dateFormat: {
        format: 'dd/mm/yyyy',
        separator: ' - '
      },
      customDates: false
    };
  },
  components: {
    DateDropdown,
    DateRangePicker
  },
  props: {
    onChange: Function,
    isEnabled: Boolean
  },
  methods: {
    updateValues() {
      this.customDates = true;

      if (this.onChange && typeof this.onChange === 'function') {
        this.onChange(this.dateRange.startDate, this.dateRange.endDate);
      }
    },
    onDropdownChange(range) {
      if (range === 'none') {
        return;
      }

      let startDate = new Date();
      let endDate = new Date();

      this.customDates = false;
      this.dateRange.startDate = startDate.setDate(endDate.getDate() - range);
      this.dateRange.endDate = endDate;

      if (this.onChange && typeof this.onChange === 'function') {
        this.onChange(this.dateRange.startDate, this.dateRange.endDate);
      }
    }
  }
};
</script>
