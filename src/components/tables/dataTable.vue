<template>
  <div>
    <table ref="table" class="table-responsive d-print-inline">
      <thead>
        <tr>
          <th v-for="(col, colIndex) in columns" :key="col">
            {{ col }}
            <i>Text</i>
            <input v-on:click.stop v-on:input="filter($event, colIndex)" data type="text" class="filter" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in rows" :key="row">
          <td v-for="value in row" :key="value">
            {{ value }}
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
  mounted: function() {
    this.initTable();
  },
  methods: {
    initTable: function() {
      this.component = $(this.$refs.table).DataTable();
    },
    filter: function(event, colIndex) {
      this.component.columns(colIndex)
        .search(event.target.value)
        .draw();
    }
  }
};
</script>
