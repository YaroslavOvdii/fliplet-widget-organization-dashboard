<template>
  <div>
    <table ref="table" class="table-responsive d-print-inline">
      <thead>
        <tr>
          <th v-for="col in columns" :key="col">
            {{ col }}
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
        return ['Test column 1', 'Test column 2', 'Test column 3', 'Test column 4'];
      }
    },
    rows: {
      type: Array,
      default() {
        return [
          ['Test value 1.1', 'Test value 1.2', 'Test value 1.3', 'Test value 1.4'],
          ['Test value 2.1', 'Test value 2.2', 'Test value 2.3', 'Test value 2.4']
        ];
      }
    }
  },
  data() {
    return {
      dTable: {}
    };
  },
  mounted: function() {
    this.dTable = $(this.$refs.table).DataTable();

    // Adding col filters
    this.dTable.columns().every(function() {
      var column = this;
      var input = $('<input type="text" class="filter" />');
      input.appendTo($(column.header()));
      input.on('click', function(event) {
        event.stopPropagation();
      });
      input.on('input', function() {
        column
          .search(this.value)
          .draw();
      });
    });
  },
  methods: {
  }
};
</script>
