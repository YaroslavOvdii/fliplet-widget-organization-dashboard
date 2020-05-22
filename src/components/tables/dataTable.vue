<template>
  <div class="data-table-container">
    <table ref="table" class="data-table table-responsive d-print-inline" style="width:100%">
      <thead>
        <tr>
          <th v-for="(col, colIndex) in columns" :key="col">
            {{ col.name }}
            <InfoIcon v-on:click.stop :content="col.help"></InfoIcon>
            <input v-on:click.stop v-on:input="filter($event, colIndex)" data type="text" class="filter" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row">
          <td v-for="value in row" :key="value">
            <DataTableCell :cellValue="value"></DataTableCell>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import $ from 'jquery';

import 'datatables.net';
import 'datatables.net-dt/css/jquery.dataTables.css';
import InfoIcon from '../InfoIcon';
import DataTableCell from './DataTableCell';

export default {
  props: {
    columns: {
      type: Array,
      default() {
        return [];
      }
    },
    rows: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      component: {}
    };
  },
  components: {
    InfoIcon,
    DataTableCell
  },
  mounted: function() {
    this.initTable();
  },
  methods: {
    initTable: function() {
      this.component = $(this.$refs.table).DataTable({
        responsive: true
      });
      $(window).trigger('resize');
    },
    filter: function(event, colIndex) {
      this.component.columns(colIndex)
        .search(event.target.value)
        .draw();
    }
  }
};
</script>
