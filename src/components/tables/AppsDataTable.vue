<template>
  <div>
    <div v-if="dataTransfotmed">
      <DataTable :columns="cols" :rows="rows"></DataTable>
    </div>
  </div>
</template>

<script>
import DataTable from './DataTable';

export default {
  props: {
    apps: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      cols: [
        'App',
        'Created',
        'Last Edit',
        'Last publish',
        'Apple',
        'Android',
        'Web'
      ],
      rows: [],
      dataTransfotmed: false
    };
  },
  components: {
    DataTable
  },
  mounted: function() {
    this.transformData();
  },
  methods: {
    transformData: function() {
      this.apps.forEach(app => {
        this.rows.push(
          [
            app.name,
            app.createdAt,
            app.updatedAt,
            app.publishedAt,
            app.publishedAppleAt,
            app.publishedGoogleAt,
            app.publishedWebAt
          ]
        );

        this.dataTransfotmed = true;
      });
    }
  }
};
</script>
